// src/lib/utils.js

/**
 * ==========================================
 * STRING
 * ==========================================
 */

export function capitalize(text = "") {
    if (!text) return "";

    return text.charAt(0).toUpperCase() + text.slice(1);
}

export function titleCase(text = "") {
    return text
        .split(" ")
        .map(capitalize)
        .join(" ");
}

export function truncate(text = "", length = 30) {
    if (!text) return "";

    if (text.length <= length) {
        return text;
    }

    return `${text.slice(0, length)}...`;
}

/**
 * ==========================================
 * DATE
 * ==========================================
 */

// @ts-ignore
export function formatDate(date) {
    if (!date) return "-";

    return new Date(date).toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
}

// @ts-ignore
export function formatTime(date) {
    if (!date) return "-";

    return new Date(date).toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
    });
}

// @ts-ignore
export function formatDateTime(date) {
    if (!date) return "-";

    return `${formatDate(date)} ${formatTime(date)}`;
}

/**
 * ==========================================
 * OBJECT
 * ==========================================
 */

// @ts-ignore
export function clone(data) {
    return JSON.parse(JSON.stringify(data));
}

// @ts-ignore
export function isEmpty(value) {
    if (value === null || value === undefined) {
        return true;
    }

    if (typeof value === "string") {
        return value.trim() === "";
    }

    if (Array.isArray(value)) {
        return value.length === 0;
    }

    if (typeof value === "object") {
        return Object.keys(value).length === 0;
    }

    return false;
}

/**
 * ==========================================
 * ASYNC
 * ==========================================
 */

export function sleep(ms = 500) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

// @ts-ignore
export function debounce(callback, delay = 500) {
    // @ts-ignore
    let timeout;

    // @ts-ignore
    return (...args) => {
        // @ts-ignore
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}

/**
 * ==========================================
 * RANDOM
 * ==========================================
 */

export function generateId() {
    return crypto.randomUUID();
}

export function randomColor() {
    const colors = [
        "#2563EB",
        "#16A34A",
        "#F59E0B",
        "#DC2626",
        "#9333EA",
        "#0891B2",
        "#EA580C",
    ];

    return colors[
        Math.floor(Math.random() * colors.length)
    ];
}

/**
 * ==========================================
 * ARRAY
 * ==========================================
 */

// @ts-ignore
export function unique(array = []) {
    return [...new Set(array)];
}

/**
 * ==========================================
 * CSS
 * ==========================================
 */

// @ts-ignore
export function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

/**
 * ==========================================
 * STATUS
 * ==========================================
 */

export function formatStatus(status = "") {
    switch (status) {
        case "Aktif":
            return "🟢 Aktif";

        case "Lulus":
            return "🔵 Lulus";

        case "Keluar":
            return "🔴 Keluar";

        case "Nonaktif":
            return "⚪ Nonaktif";

        default:
            return status;
    }
}

/**
 * ==========================================
 * USER
 * ==========================================
 */

export function getInitial(name = "") {
    if (!name) return "?";

    return name
        .split(" ")
        .map((item) => item.charAt(0))
        .join("")
        .substring(0, 2)
        .toUpperCase();
}