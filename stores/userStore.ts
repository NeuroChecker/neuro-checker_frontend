import type {UpdateThresholdsRequest} from "~/types/requests/UpdateThresholdsRequest";
import type {user} from "~/types/models/user";

export const useUserStore = defineStore('userStore', {
    actions: {
        async updateThresholds(request: UpdateThresholdsRequest): Promise<{
            success: boolean;
            message: string | undefined;
        }> {
            try {
                const authStore = useAuthStore();
                const currentUser = await authStore.fetchUser();

                if (!currentUser) {
                    return {
                        success: false,
                        message: 'User not logged in'
                    };
                }

                const response = await useFetch<user>('http://localhost:5170/api/personal/thresholds', {
                    method: 'POST',
                    body: request,
                    credentials: 'include',
                });

                if (response.error.value) {
                    return {
                        success: false,
                        message: 'Failed to update thresholds'
                    };
                }

                return {
                    success: true,
                    message: undefined
                }
            } catch (error) {
                console.error('Error updating thresholds:', error);

                return {
                    success: false,
                    message: 'An unexpected error occurred'
                };
            }
        }
    }
});