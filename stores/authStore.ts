import type {user} from "~/types/models/user";

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        user: ref <user | undefined>(undefined),
    }),
    actions: {
        async login(email: string, password: string):Promise<Boolean> {
            try {
                const response = await useFetch<user>('http://localhost:5170/api/identity/login', {
                    method: 'POST',
                    body: { email, password },
                    credentials: 'include',
                });

                if (response.error.value) {
                    throw new Error('Login failed');
                }
                await this.fetchUser();
                return true;

            } catch (error) {
                console.error('Error during login:', error);
                return false;
            }
        },
        async fetchUser() {
            try {
                const response = await useFetch<user>('http://localhost:5170/api/identity/me', {
                    method: 'GET',
                    credentials: 'include',
                });
                if (response.error.value) {
                    throw new Error('Failed to fetch user data');
                }
                this.user = response.data.value;
            }
            catch (error) {
                console.error('Error fetching user data:', error);
                throw error;
            }
        }
    },
});