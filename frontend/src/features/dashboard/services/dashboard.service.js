// src/features/dashboard/services/dashboard.service.js

import api from "../../../lib/api";
import { API } from "../../../lib/constants";
import { dashboardStore } from "../../../stores/dashboard.store";

/**
 * ==========================================
 * DASHBOARD SERVICE
 * ==========================================
 */

class DashboardService {
    /**
     * Load Dashboard
     */
    async loadDashboard() {
        dashboardStore.setLoading(true);

        try {
            const [santriResponse, riwayatResponse] =
                await Promise.all([
                    api.get(API.SANTRI.BASE),
                    api.get(API.SANTRI.RIWAYAT),
                ]);

            const santri = santriResponse.data ?? [];
            const riwayat = riwayatResponse.data ?? [];

            const aktif = santri.filter(
                // @ts-ignore
                (item) => item.status === "Aktif"
            ).length;

            const lulus = santri.filter(
                // @ts-ignore
                (item) => item.status === "Lulus"
            ).length;

            const keluar = santri.filter(
                // @ts-ignore
                (item) => item.status === "Keluar"
            ).length;

            const nonaktif = santri.filter(
                // @ts-ignore
                (item) => item.status === "Nonaktif"
            ).length;

            dashboardStore.setStats({
                totalSantri: santri.length,
                totalRiwayat: riwayat.length,
                aktif,
                lulus,
                keluar,
                nonaktif,
            });

            return {
                success: true,
                santri,
                riwayat,
            };
        } catch (error) {
            console.error(
                "Dashboard Error:",
                error
            );

            throw error;
        } finally {
            dashboardStore.setLoading(false);
        }
    }

    /**
     * Refresh Dashboard
     */
    async refresh() {
        dashboardStore.setRefreshing(true);

        try {
            return await this.loadDashboard();
        } finally {
            dashboardStore.setRefreshing(false);
        }
    }

    /**
     * Reset Dashboard
     */
    reset() {
        dashboardStore.reset();
    }
}

export const dashboardService =
    new DashboardService();

export default dashboardService;