// src/lib/api.js

import axios from "axios";

/**
 * ==========================================
 * API CONFIGURATION
 * ==========================================
 */

const api = axios.create({
    baseURL: "http://localhost:3000",
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
    (config) => {
        // Future:
        // JWT Token
        // Authorization Header
        // Loading Global

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
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
            console.error(
                "[API] Tidak dapat terhubung ke server."
            );
        } else {
            console.error("[API]", error.message);
        }

        return Promise.reject(error);
    }
);

export default api;