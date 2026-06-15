// src/stores/auth.store.js

import { writable } from "svelte/store";

/**
 * ==========================================
 * INITIAL STATE
 * ==========================================
 */

const initialState = {
    isAuthenticated: false,
    loading: false,
    user: null,
};

/**
 * ==========================================
 * STORE
 * ==========================================
 */

function createAuthStore() {
    const { subscribe, set, update } = writable(initialState);

    return {
        subscribe,

        /**
         * Reset Store
         */
        reset() {
            set(initialState);
        },

        /**
         * Loading State
         */
        setLoading(loading = false) {
            update((state) => ({
                ...state,
                loading,
            }));
        },

        /**
         * Set User
         */
        setUser(user = null) {
            update((state) => ({
                ...state,
                user,
                isAuthenticated: !!user,
            }));
        },

        /**
         * Login
         */
        login(user = {}) {
            update((state) => ({
                ...state,
                // @ts-ignore
                user,
                isAuthenticated: true,
                loading: false,
            }));
        },

        /**
         * Logout
         */
        logout() {
            set({
                ...initialState,
            });
        },
    };
}

export const authStore = createAuthStore();