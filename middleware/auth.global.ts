export default defineNuxtRouteMiddleware(async (to, from) => {
    const authStore = useAuthStore();
    let cookie: string | null | undefined = undefined;

    // If this middleware is running on the server, we can't just make a request on behalf of the user.
    // So, we need to extract the cookie from the request headers and send it manually.
    const isBackend = import.meta.server;
    if (isBackend) cookie = useCookie('.AspNetCore.Identity.Application').value;

    const user = await authStore.fetchUser(cookie ?? undefined);

    if (!user && to.path !== '/login') return navigateTo('/login');
    if (user && to.path === '/login') return navigateTo('/');
});