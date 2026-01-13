import type {UpdateThresholdsRequest} from "~/types/requests/UpdateThresholdsRequest";
import type {LinkAcquaintanceRequest} from "~/types/requests/LinkAcquaintanceRequest";
import type {Acquaintance} from "~/types/models/Acquaintance";

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

                const response = await useFetch('http://localhost:5170/api/personal/thresholds', {
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
        },
        async getAcquaintancesAsync(request: LinkAcquaintanceRequest): Promise<{
            success: boolean;
            message: string | undefined;
            acquaintances: Array<Acquaintance> | undefined;
        }> {
            try {
                const authStore = useAuthStore();
                const currentUser = await authStore.fetchUser();

                if (!currentUser) {
                    return {
                        success: false,
                        message: 'User not logged in',
                        acquaintances: undefined
                    };
                }

                const response = await useFetch<Acquaintance[]>('http://localhost:5170/api/personal/acquaintances', {
                    method: 'GET',
                    body: request,
                    credentials: 'include',
                });

                if (response.error.value) {
                    return {
                        success: false,
                        message: 'Failed to get acquaintances',
                        acquaintances: undefined
                    };
                }

                return {
                    success: true,
                    message: undefined,
                    acquaintances: response.data.value
                }
            } catch (error) {
                console.error('Error getting acquaintances:', error);

                return {
                    success: false,
                    message: 'An unexpected error occurred',
                    acquaintances: undefined
                };
            }
        },
        async linkAcquaintanceAsync(request: LinkAcquaintanceRequest): Promise<{
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

                const response = await useFetch('http://localhost:5170/api/personal/acquaintances', {
                    method: 'PUT',
                    body: request,
                    credentials: 'include',
                });

                if (response.error.value) {
                    return {
                        success: false,
                        message: 'Failed to link acquaintance'
                    };
                }

                return {
                    success: true,
                    message: undefined
                }
            } catch (error) {
                console.error('Error linking acquaintance:', error);

                return {
                    success: false,
                    message: 'An unexpected error occurred'
                };
            }
        },
        async unlinkAcquaintanceAsync(acquaintanceId: string): Promise<{
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

                const response = await useFetch(`http://localhost:5170/api/personal/acquaintances/${acquaintanceId}`, {
                    method: 'DELETE',
                    credentials: 'include',
                });

                if (response.error.value) {
                    return {
                        success: false,
                        message: 'Failed to unlink acquaintance'
                    };
                }

                return {
                    success: true,
                    message: undefined
                }
            } catch (error) {
                console.error('Error unlinking acquaintance:', error);

                return {
                    success: false,
                    message: 'An unexpected error occurred'
                };
            }
        },
    }
});