// @ts-nocheck
// src/features/santri/services/santri.service.js

import api from "../../../lib/api";
import { API } from "../../../lib/constants";
import { santriStore } from "../../../stores/santri.store";

/**
 * ==========================================
 * SANTRI SERVICE
 * ==========================================
 */

class SantriService {

    /**
     * Get All Santri
     */
    async getAll() {

        santriStore.setLoading(true);

        try {

            const response = await api.get(
                API.SANTRI.BASE
            );

            const santri = response.data ?? [];

            santriStore.setSantri(santri);

            return santri;

        } catch (error) {

            console.error(
                "Get Santri Error:",
                error
            );

            throw error;

        } finally {

            santriStore.setLoading(false);

        }

    }

    /**
     * Get Detail Santri
     */
    async getById(id) {

        santriStore.setLoading(true);

        try {

            const response = await api.get(
                `${API.SANTRI.BASE}/${id}`
            );

            return response.data;

        } catch (error) {

            console.error(
                "Get Detail Santri Error:",
                error
            );

            throw error;

        } finally {

            santriStore.setLoading(false);

        }

    }

    /**
     * Create Santri
     */
    async create(payload) {

        santriStore.setLoading(true);

        try {

            const response = await api.post(
                API.SANTRI.BASE,
                payload
            );

            // Backend V2 hanya mengembalikan
            // success + message + id,
            // maka refresh data agar store sinkron.
            await this.refresh();

            return response.data;

        } catch (error) {

            console.error(
                "Create Santri Error:",
                error
            );

            throw error;

        } finally {

            santriStore.setLoading(false);

        }

    }

    /**
     * Update Santri
     */
    async update(id, payload) {

        santriStore.setLoading(true);

        try {

            const response = await api.put(
                `${API.SANTRI.BASE}/${id}`,
                payload
            );

            // Backend V2 tidak mengembalikan object santri.
            await this.refresh();

            return response.data;

        } catch (error) {

            console.error(
                "Update Santri Error:",
                error
            );

            throw error;

        } finally {

            santriStore.setLoading(false);

        }

    }

    /**
     * Delete Santri
     */
    async delete(id) {

        santriStore.setLoading(true);

        try {

            await api.delete(
                `${API.SANTRI.BASE}/${id}`
            );

            // Refresh agar sinkron dengan database.
            await this.refresh();

            return true;

        } catch (error) {

            console.error(
                "Delete Santri Error:",
                error
            );

            throw error;

        } finally {

            santriStore.setLoading(false);

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

        santriStore.reset();

    }

}

export const santriService = new SantriService();

export default santriService;