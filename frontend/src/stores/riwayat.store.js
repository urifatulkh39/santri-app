// @ts-nocheck
// src/stores/riwayat.store.js

import { writable } from "svelte/store";

/**
 * ==========================================
 * INITIAL STATE
 * ==========================================
 */

const initialState = {
    riwayat: [],
    selectedRiwayat: null,

    loading: false,

    search: "",

    filterAktivitas: "Semua",

    statistik: {
        total: 0,
        hariIni: 0,
        mingguIni: 0,
        bulanIni: 0,
    },
};

/**
 * ==========================================
 * STORE
 * ==========================================
 */

function createRiwayatStore() {

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
         * Set Riwayat
         */
        setRiwayat(riwayat = []) {

            const now = new Date();

            const today = new Date(
                now.getFullYear(),
                now.getMonth(),
                now.getDate()
            );

            const week = new Date(today);
            week.setDate(today.getDate() - 7);

            const month = new Date(
                now.getFullYear(),
                now.getMonth(),
                1
            );

            const statistik = {
                total: riwayat.length,
                hariIni: 0,
                mingguIni: 0,
                bulanIni: 0,
            };

            riwayat.forEach((item) => {

                const created = new Date(
                    item.created_at
                );

                if (created >= today) {
                    statistik.hariIni++;
                }

                if (created >= week) {
                    statistik.mingguIni++;
                }

                if (created >= month) {
                    statistik.bulanIni++;
                }

            });

            update((state) => ({
                ...state,
                riwayat,
                statistik,
            }));

        },

        /**
         * Add Riwayat
         */
        addRiwayat(data) {

            update((state) => ({
                ...state,
                riwayat: [
                    data,
                    ...state.riwayat
                ],
            }));

        },

        /**
         * Selected Riwayat
         */
        setSelectedRiwayat(
            riwayat = null
        ) {

            update((state) => ({
                ...state,
                selectedRiwayat: riwayat,
            }));

        },

        /**
         * Search
         */
        setSearch(search = "") {

            update((state) => ({
                ...state,
                search,
            }));

        },

        /**
         * Filter Aktivitas
         */
        setFilterAktivitas(
            filterAktivitas = "Semua"
        ) {

            update((state) => ({
                ...state,
                filterAktivitas,
            }));

        },

        /**
         * Statistik
         */
        setStatistik(statistik) {

            update((state) => ({
                ...state,
                statistik,
            }));

        },

    };

}

export const riwayatStore =
    createRiwayatStore();

export default riwayatStore;