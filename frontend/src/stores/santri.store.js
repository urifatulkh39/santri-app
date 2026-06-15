// @ts-nocheck
// src/stores/santri.store.js

import { writable } from "svelte/store";

/**
 * ==========================================
 * INITIAL STATE
 * ==========================================
 */

const initialState = {
    santri: [],
    selectedSantri: null,

    loading: false,

    search: "",

    filterStatus: "Semua",
    filterKelas: "Semua",

    form: {
        nama: "",
        kelas_id: null,
        domisili: "",
        status: "Aktif",
    },
};

/**
 * ==========================================
 * STORE
 * ==========================================
 */

function createSantriStore() {

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
         * Set Santri
         */
        setSantri(santri = []) {
            update((state) => ({
                ...state,
                santri,
            }));
        },

        /**
         * Add Santri
         */
        addSantri(data) {
            update((state) => ({
                ...state,
                santri: [...state.santri, data],
            }));
        },

        /**
         * Update Santri
         */
        updateSantri(data) {
            update((state) => ({
                ...state,
                santri: state.santri.map((item) =>
                    item.id === data.id ? data : item
                ),
            }));
        },

        /**
         * Remove Santri
         */
        removeSantri(id) {
            update((state) => ({
                ...state,
                santri: state.santri.filter(
                    (item) => item.id !== id
                ),
            }));
        },

        /**
         * Selected Santri
         */
        setSelectedSantri(santri = null) {
            update((state) => ({
                ...state,
                selectedSantri: santri,
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
         * Filter Status
         */
        setFilterStatus(filterStatus = "Semua") {
            update((state) => ({
                ...state,
                filterStatus,
            }));
        },

        /**
         * Filter Kelas
         */
        setFilterKelas(filterKelas = "Semua") {
            update((state) => ({
                ...state,
                filterKelas,
            }));
        },

        /**
         * Update Form
         */
        updateForm(field, value) {
            update((state) => ({
                ...state,
                form: {
                    ...state.form,
                    [field]: value,
                },
            }));
        },

        /**
         * Replace Form
         */
        setForm(form = {}) {
            update((state) => ({
                ...state,
                form: {
                    ...state.form,
                    ...form,
                },
            }));
        },

        /**
         * Reset Form
         */
        resetForm() {
            update((state) => ({
                ...state,
                form: {
                    nama: "",
                    kelas_id: null,
                    domisili: "",
                    status: "Aktif",
                },
            }));
        },

    };

}

export const santriStore = createSantriStore();

export default santriStore;