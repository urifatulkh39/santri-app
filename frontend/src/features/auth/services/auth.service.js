// src/features/auth/services/auth.service.js

import api from "../../../lib/api";
import { API } from "../../../lib/constants";
import { authStore } from "../../../stores/auth.store";

/**
 * ==========================================
 * AUTH SERVICE
 * ==========================================
 */

class AuthService {
    /**
     * Login
     */
    // @ts-ignore
    async login(payload) {
        authStore.setLoading(true);

        try {
            const response = await api.post(
                API.AUTH.LOGIN,
                payload
            );

            const result = response.data;

            if (result.success) {
                authStore.login(
                    result.user ?? {
                        username: payload.username,
                    }
                );
            }

            return result;
        } catch (error) {
            console.error("Login Error:", error);

            throw error;
        } finally {
            authStore.setLoading(false);
        }
    }

    /**
     * Logout
     */
    logout() {
        authStore.logout();
    }

    /**
     * Future
     * Check Session
     */
    async me() {
        try {
            // nanti endpoint /auth/me
            return null;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    /**
     * Future
     * Refresh Token
     */
    async refresh() {
        return null;
    }
}

export const authService = new AuthService();

export default authService;