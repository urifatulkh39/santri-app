<script>
    import DashboardCard from "./DashboardCard.svelte";
    import { dashboardStore } from "../../../stores/dashboard.store";

    $: dashboard = $dashboardStore;
</script>

<div class="dashboard-stats">

    <DashboardCard
        title="Total Santri"
        value={dashboard.stats.totalSantri}
        subtitle="Seluruh data santri"
        icon="👨‍🎓"
        color="primary"
        loading={dashboard.loading}
    />

    <DashboardCard
        title="Santri Aktif"
        value={dashboard.stats.aktif}
        subtitle="Masih aktif belajar"
        icon="✅"
        color="success"
        loading={dashboard.loading}
    />

    <DashboardCard
        title="Santri Lulus"
        value={dashboard.stats.lulus}
        subtitle="Sudah menyelesaikan pendidikan"
        icon="🎓"
        color="warning"
        loading={dashboard.loading}
    />

    <DashboardCard
        title="Santri Keluar"
        value={dashboard.stats.keluar}
        subtitle="Tidak aktif lagi"
        icon="🚪"
        color="danger"
        loading={dashboard.loading}
    />

    <DashboardCard
        title="Total Riwayat"
        value={dashboard.stats.totalRiwayat}
        subtitle="Data riwayat santri"
        icon="📄"
        color="info"
        loading={dashboard.loading}
    />

</div>

<style>

.dashboard-stats{

    display:grid;

    grid-template-columns:
        repeat(auto-fit,minmax(240px,1fr));

    gap:24px;

    width:100%;

}

@media(max-width:768px){

.dashboard-stats{

    grid-template-columns:1fr;

    gap:16px;

}

}

</style>