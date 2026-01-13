import type {user} from "~/types/models/user";

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        isLoggedIn: ref<boolean>(false),
        user: ref<user | undefined>(undefined),
    }),
    actions: {
        async login(email: string, password: string): Promise<Boolean> {
            try {
                const response = await useFetch<user>('http://localhost:5170/api/identity/login', {
                    method: 'POST',
                    body: {email, password},
                    credentials: 'include',
                });

                if (response.error.value) {
                    throw new Error('Login failed');
                }

                await this.updateLoginStatus();
                return true;
            } catch (error) {
                console.error('Error during login:', error);
                return false;
            }
        },
        async fetchUser(cookieValue?: string): Promise<user | undefined> {
            if (this.user) return this.user;

            await this.updateLoginStatus(cookieValue);
            return this.user;
        },
        async updateLoginStatus(cookieValue?: string): Promise<boolean> {
            try {
                const response = await useFetch<user>('http://localhost:5170/api/identity/me', {
                    method: 'GET',
                    credentials: 'include',
                    headers: cookieValue ? {'Cookie': `.AspNetCore.Identity.Application=${cookieValue}`} : {}
                });

                if (response.error.value) {
                    throw new Error('Failed to fetch user data');
                }

                this.user = response.data.value;
                this.isLoggedIn = true;

                return true;
            } catch (error) {
                console.error('Error fetching user data:', error);

                this.isLoggedIn = false;
                this.user = undefined;

                return false;
            }
        }
    },
});