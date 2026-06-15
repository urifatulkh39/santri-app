// src/stores/dashboard.store.js

import { writable } from "svelte/store";

/**
 * ==========================================
 * INITIAL STATE
 * ==========================================
 */

const initialState = {
    loading: false,
    refreshing: false,

    lastUpdated: null,

    stats: {
        totalSantri: 0,
        aktif: 0,
        lulus: 0,
        keluar: 0,
        nonaktif: 0,
        totalRiwayat: 0,
    },
};

/**
 * ==========================================
 * STORE
 * ==========================================
 */

function createDashboardStore() {
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
         * Loading
         */
        setLoading(loading = false) {
            update((state) => ({
                ...state,
                loading,
            }));
        },

        /**
         * Refresh State
         */
        setRefreshing(refreshing = false) {
            update((state) => ({
                ...state,
                refreshing,
            }));
        },

        /**
         * Last Updated
         */
        setLastUpdated(date = new Date()) {
            update((state) => ({
                ...state,
                // @ts-ignore
                lastUpdated: date,
            }));
        },

        /**
         * Replace Stats
         */
        setStats(stats = {}) {
            update((state) => ({
                ...state,
                stats: {
                    ...state.stats,
                    ...stats,
                },
                // @ts-ignore
                lastUpdated: new Date(),
            }));
        },

        /**
         * Total Santri
         */
        setTotalSantri(totalSantri = 0) {
            update((state) => ({
                ...state,
                stats: {
                    ...state.stats,
                    totalSantri,
                },
            }));
        },

        /**
         * Total Riwayat
         */
        setTotalRiwayat(totalRiwayat = 0) {
            update((state) => ({
                ...state,
                stats: {
                    ...state.stats,
                    totalRiwayat,
                },
            }));
        },

        /**
         * Status Counter
         */
        setStatusCount({
            aktif = 0,
            lulus = 0,
            keluar = 0,
            nonaktif = 0,
        }) {
            update((state) => ({
                ...state,
                stats: {
                    ...state.stats,
                    aktif,
                    lulus,
                    keluar,
                    nonaktif,
                },
            }));
        },
    };
}

export const dashboardStore = createDashboardStore();