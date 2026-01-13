import type {user} from "~/types/models/user";
import type {LoginRequest} from "~/types/requests/LoginRequest";

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        isLoggedIn: ref<boolean>(false),
        user: ref<user | undefined>(undefined),
    }),
    actions: {
        async login(request: LoginRequest): Promise<{
            success: boolean;
            message: string | undefined;
        }> {
            try {
                const response = await useFetch<user>('http://localhost:5170/api/identity/login', {
                    method: 'POST',
                    body: request,
                    credentials: 'include',
                });

                if (response.error.value) return {
                    success: false,
                    message: 'Login failed'
                };

                if ((await this.updateLoginStatus()).success) return {
                    success: true,
                    message: undefined
                };

                return {
                    success: false,
                    message: 'Failed to fetch user data after login'
                }

            } catch (error) {
                console.error('Error during login:', error);

                return {
                    success: false,
                    message: 'An unexpected error occurred'
                };
            }
        },
        async fetchUser(cookieValue?: string): Promise<user | undefined> {
            if (this.user) return this.user;

            await this.updateLoginStatus(cookieValue);
            return this.user;
        },
        async updateLoginStatus(cookieValue?: string): Promise<{
            success: boolean;
            message: string | undefined;
        }> {
            try {
                const response = await useFetch<user>('http://localhost:5170/api/identity/me', {
                    method: 'GET',
                    credentials: 'include',
                    headers: cookieValue ? {'Cookie': `.AspNetCore.Identity.Application=${cookieValue}`} : {}
                });

                if (response.error.value) {
                    this.isLoggedIn = false;
                    this.user = undefined;

                    return {
                        success: false,
                        message: 'Failed to fetch user data'
                    }
                }

                this.user = response.data.value;
                this.isLoggedIn = true;

                return {
                    success: true,
                    message: undefined
                };
            } catch (error) {
                console.error('Error fetching user data:', error);

                this.isLoggedIn = false;
                this.user = undefined;

                return {
                    success: false,
                    message: 'An unexpected error occurred'
                };
            }
        }
    },
});