<script>
    import "./app.css";

    import { onMount } from "svelte";

    import { authStore } from "./stores/auth.store";

    import DashboardLayout from "./layouts/DashboardLayout.svelte";

    import LoginPage from "./features/auth/pages/LoginPage.svelte";

    import DashboardPage from "./features/dashboard/pages/DashboardPage.svelte";
    import SantriPage from "./features/santri/pages/SantriPage.svelte";
    import KelasPage from "./features/kelas/pages/KelasPage.svelte";
    import RiwayatPage from "./features/riwayat/pages/RiwayatPage.svelte";

    let menu = "dashboard";

    const menus = [
        {
            key: "dashboard",
            title: "Dashboard"
        },
        {
            key: "santri",
            title: "Data Santri"
        },
        {
            key: "kelas",
            title: "Data Kelas"
        },
        {
            key: "riwayat",
            title: "Riwayat"
        }
    ];

    function handleNavigate(event) {

        menu = event.detail;

    }

    function handleLogout() {

        authStore.logout();

        menu = "dashboard";

    }

    onMount(() => {

        menu = "dashboard";

    });
</script>

{#if !$authStore.isAuthenticated}

    <LoginPage />

{:else}

    <DashboardLayout

        currentMenu={menu}

        menus={menus}

        on:navigate={handleNavigate}

        on:logout={handleLogout}

    >

        {#if menu === "dashboard"}

            <DashboardPage />

        {:else if menu === "santri"}

            <SantriPage />

        {:else if menu === "kelas"}

            <KelasPage />

        {:else if menu === "riwayat"}

            <RiwayatPage />

        {:else}

            <DashboardPage />

        {/if}

    </DashboardLayout>

{/if}