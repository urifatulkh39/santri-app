<script>
    import { onMount } from "svelte";

    import Card from "../../../components/ui/Card.svelte";

    import RiwayatTable from "../components/RiwayatTable.svelte";
    import RiwayatFilter from "../components/RiwayatFilter.svelte";

    import { riwayatStore } from "../../../stores/riwayat.store";
    import { riwayatService } from "../services/riwayat.service";

    let error = "";

    async function loadData() {

        error = "";

        try {

            await riwayatService.getAll();

        } catch (err) {

            console.error(err);

            error =
                err.response?.data?.message ??
                "Gagal memuat data riwayat.";

        }

    }

    onMount(loadData);

    // derived filter (simple client-side filter)
    $: filteredData = $riwayatStore.riwayat.filter((item) => {

        const search = $riwayatStore.search.toLowerCase();

        const matchSearch =
            item.nama_santri?.toLowerCase().includes(search) ||
            item.aktivitas?.toLowerCase().includes(search) ||
            item.keterangan?.toLowerCase().includes(search);

        const matchAktivitas =
            $riwayatStore.filterAktivitas === "Semua" ||
            item.aktivitas === $riwayatStore.filterAktivitas;

        return matchSearch && matchAktivitas;

    });

</script>

<div class="page">

    <div class="page-header">

        <div>

            <h1>
                📜 Riwayat Aktivitas
            </h1>

            <p>
                Semua aktivitas santri, kelas, dan perubahan sistem tercatat di sini.
            </p>

        </div>

        <div class="stat">

            <div class="stat-box">
                <small>Total</small>
                <strong>{$riwayatStore.statistik.total}</strong>
            </div>

            <div class="stat-box">
                <small>Hari Ini</small>
                <strong>{$riwayatStore.statistik.hariIni}</strong>
            </div>

            <div class="stat-box">
                <small>Minggu</small>
                <strong>{$riwayatStore.statistik.mingguIni}</strong>
            </div>

            <div class="stat-box">
                <small>Bulan</small>
                <strong>{$riwayatStore.statistik.bulanIni}</strong>
            </div>

        </div>

    </div>

    {#if error}

        <div class="error">

            ⚠️ {error}

        </div>

    {/if}

    <Card title="Filter Riwayat">

        <RiwayatFilter />

    </Card>

    <Card title="Data Riwayat">

        <RiwayatTable
            data={filteredData}
            loading={$riwayatStore.loading}
        />

    </Card>

</div>

<style>

.page{

    display:flex;
    flex-direction:column;
    gap:24px;

}

.page-header{

    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:20px;

    padding:24px;

    border-radius:18px;

    background:linear-gradient(
        135deg,
        #1d4ed8,
        #2563eb
    );

    color:white;

}

.page-header h1{

    margin:0;

}

.page-header p{

    margin-top:6px;

    opacity:.85;

}

.stat{

    display:flex;

    gap:12px;

    flex-wrap:wrap;

}

.stat-box{

    background:rgba(255,255,255,.12);

    padding:10px 14px;

    border-radius:12px;

    text-align:center;

    min-width:90px;

}

.stat-box small{

    display:block;

    font-size:11px;

    opacity:.8;

}

.stat-box strong{

    font-size:18px;

}

.error{

    padding:14px;

    border-radius:12px;

    background:#fef2f2;

    border-left:4px solid #ef4444;

    color:#b91c1c;

}

@media(max-width:768px){

.page-header{

    flex-direction:column;

    align-items:flex-start;

}

.stat{

    width:100%;

}

.stat-box{

    flex:1;

}

}

</style>