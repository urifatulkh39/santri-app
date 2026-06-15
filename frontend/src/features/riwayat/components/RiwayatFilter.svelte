<script>
    import Input from "../../../components/ui/Input.svelte";
    import Select from "../../../components/ui/Select.svelte";

    import { riwayatStore } from "../../../stores/riwayat.store";

    const aktivitasOptions = [
        {
            label: "Semua Aktivitas",
            value: "Semua"
        },
        {
            label: "Tambah Santri",
            value: "Tambah Santri"
        },
        {
            label: "Update Santri",
            value: "Update Santri"
        },
        {
            label: "Masuk Kelas",
            value: "Masuk Kelas"
        },
        {
            label: "Pindah Kelas",
            value: "Pindah Kelas"
        },
        {
            label: "Keluar Kelas",
            value: "Keluar Kelas"
        },
        {
            label: "Naik Semester",
            value: "Naik Semester"
        },
        {
            label: "Turun Semester",
            value: "Turun Semester"
        },
        {
            label: "Lulus",
            value: "Lulus"
        },
        {
            label: "Nonaktif",
            value: "Nonaktif"
        },
        {
            label: "Hapus Santri",
            value: "Hapus Santri"
        }
    ];

    function handleSearch(event) {

        riwayatStore.setSearch(
            event.target.value
        );

    }

    function handleAktivitas(event) {

        riwayatStore.setFilterAktivitas(
            event.target.value
        );

    }
</script>

<div class="filter-wrapper">

    <div class="search">

        <Input
            label="Cari Riwayat"
            placeholder="Cari nama santri, aktivitas, atau keterangan..."
            value={$riwayatStore.search}
            on:input={handleSearch}
        />

    </div>

    <div class="filter">

        <Select
            label="Aktivitas"
            value={$riwayatStore.filterAktivitas}
            options={aktivitasOptions}
            on:change={handleAktivitas}
        />

    </div>

</div>

<style>

.filter-wrapper{

    display:grid;

    grid-template-columns:
        2fr
        1fr;

    gap:20px;

    margin-bottom:24px;

}

.search{

    width:100%;

}

.filter{

    width:100%;

}

@media(max-width:768px){

.filter-wrapper{

    grid-template-columns:1fr;

}

}

</style>