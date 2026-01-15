FROM node:lts-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci
COPY . .
RUN npm run build

FROM node:lts-alpine AS runtime

RUN adduser -D appuser
USER appuser
WORKDIR /app

COPY --from=build /app/.output /app/.output

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]