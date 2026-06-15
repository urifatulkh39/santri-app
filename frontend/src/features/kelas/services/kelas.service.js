// @ts-nocheck
// src/features/kelas/services/kelas.service.js

import api from "../../../lib/api";
import { API } from "../../../lib/constants";
import { kelasStore } from "../../../stores/kelas.store";

/**
 * ==========================================
 * KELAS SERVICE
 * ==========================================
 */

class KelasService {

    /**
     * Get All Kelas
     */
    async getAll() {

        kelasStore.setLoading(true);

        try {

            const response = await api.get(
                API.KELAS.BASE
            );

            const kelas = response.data ?? [];

            kelasStore.setKelas(kelas);

            return kelas;

        } catch (error) {

            console.error(
                "Get Kelas Error:",
                error
            );

            throw error;

        } finally {

            kelasStore.setLoading(false);

        }

    }

    /**
     * Get Detail Kelas
     */
    async getById(id) {

        kelasStore.setLoading(true);

        try {

            const response = await api.get(
                `${API.KELAS.BASE}/${id}`
            );

            return response.data;

        } catch (error) {

            console.error(
                "Get Detail Kelas Error:",
                error
            );

            throw error;

        } finally {

            kelasStore.setLoading(false);

        }

    }

    /**
     * Create Kelas
     */
    async create(payload) {

        kelasStore.setLoading(true);

        try {

            const response = await api.post(
                API.KELAS.BASE,
                payload
            );

            // Refresh data agar store sinkron dengan database
            await this.refresh();

            return response.data;

        } catch (error) {

            console.error(
                "Create Kelas Error:",
                error
            );

            throw error;

        } finally {

            kelasStore.setLoading(false);

        }

    }

    /**
     * Update Kelas
     */
    async update(id, payload) {

        kelasStore.setLoading(true);

        try {

            const response = await api.put(
                `${API.KELAS.BASE}/${id}`,
                payload
            );

            // Refresh data agar store sinkron
            await this.refresh();

            return response.data;

        } catch (error) {

            console.error(
                "Update Kelas Error:",
                error
            );

            throw error;

        } finally {

            kelasStore.setLoading(false);

        }

    }

    /**
     * Delete Kelas
     */
    async delete(id) {

        kelasStore.setLoading(true);

        try {

            await api.delete(
                `${API.KELAS.BASE}/${id}`
            );

            // Refresh data agar store sinkron
            await this.refresh();

            return true;

        } catch (error) {

            console.error(
                "Delete Kelas Error:",
                error
            );

            throw error;

        } finally {

            kelasStore.setLoading(false);

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

        kelasStore.reset();

    }

}

export const kelasService = new KelasService();

export default kelasService;