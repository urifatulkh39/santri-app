import axios from "axios";

/**
 * ==========================================
 * API CONFIGURATION
 * ==========================================
 */

const api = axios.create({
    baseURL: "https://santri-app-production.up.railway.app",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

/**
 * ==========================================
 * REQUEST INTERCEPTOR
 * ==========================================
 */

api.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
);

/**
 * ==========================================
 * RESPONSE INTERCEPTOR
 * ==========================================
 */

api.interceptors.response.use(
    (response) => response,
    (error) => {

        if (error.response) {

            console.error(
                `[API ${error.response.status}]`,
                error.response.data
            );

        } else if (error.request) {

            console.error("[API] Tidak dapat terhubung ke server.");

        } else {

            console.error("[API]", error.message);

        }

        return Promise.reject(error);

    }
);

export default api;