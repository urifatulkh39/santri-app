// @ts-nocheck
// src/lib/constants.js

/**
 * ==========================================
 * APP
 * ==========================================
 */

export const APP = {
    NAME: "Santri Management System",
    SHORT_NAME: "Santri App",
    COMPANY: "Santri App",
    VERSION: "1.0.0",
    DESCRIPTION: "Sistem Pendataan Santri Modern",
};

/**
 * ==========================================
 * API
 * ==========================================
 */

export const API = {
    BASE_URL: "http://localhost:3000",

    AUTH: {
        LOGIN: "/auth/login",
    },

    DASHBOARD: "/dashboard",

    SANTRI: {
        BASE: "/santri",
        DETAIL: (id) => `/santri/${id}`,
        RIWAYAT: "/riwayat",
    },

    KELAS: {
        BASE: "/kelas",
        DETAIL: (id) => `/kelas/${id}`,
    },

    RIWAYAT: {
        BASE: "/riwayat",
        SANTRI: (id) => `/riwayat/santri/${id}`,
    },
};

/**
 * ==========================================
 * ROUTE
 * ==========================================
 */

export const ROUTE = {
    LOGIN: "/login",
    DASHBOARD: "/dashboard",
    SANTRI: "/santri",
    KELAS: "/kelas",
    RIWAYAT: "/riwayat",
};

/**
 * ==========================================
 * SIDEBAR
 * ==========================================
 */

export const SIDEBAR_MENU = [
    {
        key: "dashboard",
        title: "Dashboard",
        icon: "layout-dashboard",
    },
    {
        key: "santri",
        title: "Data Santri",
        icon: "users",
    },
    {
        key: "kelas",
        title: "Data Kelas",
        icon: "school",
    },
    {
        key: "riwayat",
        title: "Riwayat",
        icon: "history",
    },
];

/**
 * ==========================================
 * STATUS
 * ==========================================
 */

export const SANTRI_STATUS = [
    {
        label: "Aktif",
        value: "Aktif",
    },
    {
        label: "Lulus",
        value: "Lulus",
    },
    {
        label: "Nonaktif",
        value: "Nonaktif",
    },
    {
        label: "Keluar",
        value: "Keluar",
    },
];

export const STATUS_COLOR = {
    Aktif: "success",
    Lulus: "primary",
    Nonaktif: "secondary",
    Keluar: "danger",
};

/**
 * ==========================================
 * PAGINATION
 * ==========================================
 */

export const PAGINATION = {
    DEFAULT_PAGE: 1,
    DEFAULT_LIMIT: 10,
};

/**
 * ==========================================
 * REQUEST
 * ==========================================
 */

export const REQUEST = {
    TIMEOUT: 10000,
};

/**
 * ==========================================
 * DATE FORMAT
 * ==========================================
 */

export const DATE = {
    LOCALE: "id-ID",

    DATE: {
        year: "numeric",
        month: "long",
        day: "numeric",
    },

    DATETIME: {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    },
};

/**
 * ==========================================
 * MESSAGE
 * ==========================================
 */

export const MESSAGE = {

    SUCCESS: {
        LOGIN: "Login berhasil.",

        SANTRI_CREATED: "Santri berhasil ditambahkan.",
        SANTRI_UPDATED: "Santri berhasil diperbarui.",
        SANTRI_DELETED: "Santri berhasil dihapus.",

        KELAS_CREATED: "Kelas berhasil ditambahkan.",
        KELAS_UPDATED: "Kelas berhasil diperbarui.",
        KELAS_DELETED: "Kelas berhasil dihapus.",
    },

    ERROR: {
        LOGIN: "Username atau password salah.",
        SERVER: "Server tidak dapat dihubungi.",
    },

    CONFIRM: {
        DELETE: "Apakah Anda yakin ingin menghapus data ini?",
    },
};

/**
 * ==========================================
 * TABLE
 * ==========================================
 */

export const TABLE = {

    SANTRI: [
        { key: "id", label: "ID" },
        { key: "nama", label: "Nama" },
        { key: "kelas", label: "Kelas" },
        { key: "status", label: "Status" },
    ],

    KELAS: [
        { key: "id", label: "ID" },
        { key: "nama", label: "Nama Kelas" },
        { key: "semester", label: "Semester" },
        { key: "jumlah_santri", label: "Jumlah Santri" },
    ],

    RIWAYAT: [
        { key: "aktivitas", label: "Aktivitas" },
        { key: "nama_santri", label: "Santri" },
        { key: "nama_kelas", label: "Kelas" },
        { key: "created_at", label: "Tanggal" },
    ],
};

/**
 * ==========================================
 * LOCAL STORAGE
 * ==========================================
 */

export const STORAGE = {
    TOKEN: "token",
    USER: "user",
    THEME: "theme",
};

/**
 * ==========================================
 * THEME
 * ==========================================
 */

export const THEME = {
    LIGHT: "light",
    DARK: "dark",
};

/**
 * ==========================================
 * DASHBOARD COLOR
 * ==========================================
 */

export const COLOR = {
    PRIMARY: "#2563eb",
    SUCCESS: "#16a34a",
    WARNING: "#eab308",
    DANGER: "#dc2626",
    INFO: "#0891b2",
};