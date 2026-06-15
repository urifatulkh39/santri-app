// @ts-nocheck
// src/features/riwayat/services/riwayat.service.js

import api from "../../../lib/api";
import { API } from "../../../lib/constants";
import { riwayatStore } from "../../../stores/riwayat.store";

/**
 * ==========================================
 * RIWAYAT SERVICE
 * ==========================================
 */

class RiwayatService {

    /**
     * Get All Riwayat
     */
    async getAll() {

        riwayatStore.setLoading(true);

        try {

            const response = await api.get(
                API.SANTRI.RIWAYAT
            );

            const riwayat = response.data ?? [];

            riwayatStore.setRiwayat(riwayat);

            return riwayat;

        } catch (error) {

            console.error(
                "Get Riwayat Error:",
                error
            );

            throw error;

        } finally {

            riwayatStore.setLoading(false);

        }

    }

    /**
     * Get Riwayat By Santri
     */
    async getBySantri(id) {

        riwayatStore.setLoading(true);

        try {

            const response = await api.get(
                `${API.SANTRI.RIWAYAT}/santri/${id}`
            );

            const riwayat = response.data ?? [];

            riwayatStore.setRiwayat(riwayat);

            return riwayat;

        } catch (error) {

            console.error(
                "Get Riwayat Santri Error:",
                error
            );

            throw error;

        } finally {

            riwayatStore.setLoading(false);

        }

    }

    /**
     * Refresh
     */
    async refresh() {

        return await this.getAll();

    }

    /**
     * Reset Store
     */
    reset() {

        riwayatStore.reset();

    }

}

export const riwayatService = new RiwayatService();

export default riwayatService;