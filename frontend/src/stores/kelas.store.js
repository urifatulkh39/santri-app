// @ts-nocheck
// src/features/kelas/store/kelas.store.js

import { writable } from "svelte/store";

/**
 * ==========================================
 * INITIAL STATE
 * ==========================================
 */

const initialState = {
    kelas: [],
    selectedKelas: null,

    loading: false,

    search: "",

    filterSemester: "Semua",

    form: {
        nama: "",
        semester: "",
    },
};

/**
 * ==========================================
 * STORE
 * ==========================================
 */

function createKelasStore() {

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
         * Set Kelas
         */
        setKelas(kelas = []) {
            update((state) => ({
                ...state,
                kelas,
            }));
        },

        /**
         * Add Kelas
         */
        addKelas(data) {
            update((state) => ({
                ...state,
                kelas: [...state.kelas, data],
            }));
        },

        /**
         * Update Kelas
         */
        updateKelas(data) {
            update((state) => ({
                ...state,
                kelas: state.kelas.map((item) =>
                    item.id === data.id ? data : item
                ),
            }));
        },

        /**
         * Remove Kelas
         */
        removeKelas(id) {
            update((state) => ({
                ...state,
                kelas: state.kelas.filter(
                    (item) => item.id !== id
                ),
            }));
        },

        /**
         * Selected Kelas
         */
        setSelectedKelas(kelas = null) {
            update((state) => ({
                ...state,
                selectedKelas: kelas,
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
         * Filter Semester
         */
        setFilterSemester(filterSemester = "Semua") {
            update((state) => ({
                ...state,
                filterSemester,
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
                    semester: "",
                },
            }));
        },

    };

}

export const kelasStore = createKelasStore();

export default kelasStore;