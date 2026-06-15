<script>
    import { onMount } from "svelte";

    import Card from "../../../components/ui/Card.svelte";
    import Loader from "../../../components/ui/Loader.svelte";

    import DashboardStats from "../components/DashboardStats.svelte";
    import DashboardChart from "../components/DashboardChart.svelte";

    import { dashboardStore } from "../../../stores/dashboard.store";
    import { dashboardService } from "../services/dashboard.service";

    let error = "";

    async function loadDashboard() {
        error = "";

        try {
            await dashboardService.loadDashboard();
        } catch (err) {
            console.error(err);

            error =
                err.response?.data?.message ??
                "Gagal memuat dashboard.";
        }
    }

    onMount(() => {
        loadDashboard();
    });

    $: dashboard = $dashboardStore;
</script>

<div class="dashboard-page">

    <div class="page-header">

        <div>

            <h1>
                Dashboard
            </h1>

            <p>
                Ringkasan data sistem manajemen santri.
            </p>

        </div>

        <button
            class="refresh-button"
            on:click={loadDashboard}
            disabled={dashboard.loading}
        >

            🔄 Refresh

        </button>

    </div>

    {#if error}

        <Card>

            <div class="error">

                {error}

            </div>

        </Card>

    {/if}

    <DashboardStats />

    <div class="dashboard-grid">

        <DashboardChart />

        <Card
            title="Aktivitas Terbaru"
            subtitle="Placeholder untuk modul riwayat"
            fullHeight
        >

            {#if dashboard.loading}

                <Loader
                    text="Memuat aktivitas..."
                    size="sm"
                />

            {:else}

                <div class="placeholder">

                    <div class="placeholder-icon">
                        📋
                    </div>

                    <h3>
                        Belum ada aktivitas
                    </h3>

                    <p>
                        Modul riwayat akan ditampilkan di sini
                        setelah fitur Riwayat selesai dibuat.
                    </p>

                </div>

            {/if}

        </Card>

    </div>

    <div class="footer-info">

        {#if dashboard.lastUpdated}

            Terakhir diperbarui :
            {new Date(dashboard.lastUpdated).toLocaleString("id-ID")}

        {:else}

            Dashboard belum pernah dimuat.

        {/if}

    </div>

</div>

<style>

.dashboard-page{

    display:flex;

    flex-direction:column;

    gap:24px;

}

.page-header{

    display:flex;

    justify-content:space-between;

    align-items:center;

    gap:20px;

}

.page-header h1{

    margin:0;

    font-size:32px;

    color:#0f172a;

}

.page-header p{

    margin-top:8px;

    color:#64748b;

}

.refresh-button{

    border:none;

    border-radius:12px;

    padding:12px 20px;

    background:#2563eb;

    color:white;

    cursor:pointer;

    font-weight:600;

    transition:.2s;

}

.refresh-button:hover{

    background:#1d4ed8;

}

.refresh-button:disabled{

    opacity:.6;

    cursor:not-allowed;

}

.dashboard-grid{

    display:grid;

    grid-template-columns:2fr 1fr;

    gap:24px;

}

.placeholder{

    min-height:320px;

    display:flex;

    flex-direction:column;

    justify-content:center;

    align-items:center;

    text-align:center;

}

.placeholder-icon{

    font-size:64px;

    margin-bottom:16px;

}

.placeholder h3{

    margin:0;

    color:#0f172a;

}

.placeholder p{

    margin-top:12px;

    color:#64748b;

    max-width:280px;

    line-height:1.7;

}

.footer-info{

    text-align:right;

    color:#94a3b8;

    font-size:13px;

}

.error{

    padding:16px;

    border-radius:12px;

    background:#fee2e2;

    color:#dc2626;

    border:1px solid #fecaca;

}

@media(max-width:992px){

.dashboard-grid{

    grid-template-columns:1fr;

}

}

@media(max-width:768px){

.page-header{

    flex-direction:column;

    align-items:flex-start;

}

.refresh-button{

    width:100%;

}

}

</style>