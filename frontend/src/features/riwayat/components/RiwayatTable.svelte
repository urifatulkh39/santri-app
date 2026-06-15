<script>
    import Table from "../../../components/ui/Table.svelte";
    import Badge from "../../../components/ui/Badge.svelte";
    import Empty from "../../../components/ui/Empty.svelte";

    export let data = [];
    export let loading = false;

    const columns = [
        {
            key: "created_at",
            label: "Waktu"
        },
        {
            key: "nama_santri",
            label: "Santri"
        },
        {
            key: "aktivitas",
            label: "Aktivitas"
        },
        {
            key: "nama_kelas",
            label: "Kelas"
        },
        {
            key: "semester",
            label: "Semester"
        },
        {
            key: "keterangan",
            label: "Keterangan"
        }
    ];

    function getVariant(aktivitas) {

        switch (aktivitas) {

            case "Tambah Santri":
                return "success";

            case "Update Santri":
                return "primary";

            case "Masuk Kelas":
                return "info";

            case "Pindah Kelas":
                return "warning";

            case "Keluar Kelas":
                return "danger";

            case "Naik Semester":
                return "success";

            case "Turun Semester":
                return "warning";

            case "Lulus":
                return "success";

            case "Nonaktif":
                return "secondary";

            case "Hapus Santri":
                return "danger";

            default:
                return "gray";

        }

    }

    function formatTanggal(value) {

        if (!value) return "-";

        return new Date(value).toLocaleString(
            "id-ID",
            {
                dateStyle: "medium",
                timeStyle: "short"
            }
        );

    }
</script>

{#if !loading && data.length === 0}

<Empty
    icon="📜"
    title="Belum ada riwayat"
    description="Aktivitas santri akan muncul di sini."
/>

{:else}

<Table
    {loading}
    {columns}
    data={data}
>

<svelte:fragment
    slot="cell"
    let:row
    let:column
>

{#if column.key === "created_at"}

    {formatTanggal(row.created_at)}

{:else if column.key === "aktivitas"}

    <Badge variant={getVariant(row.aktivitas)}>
        {row.aktivitas}
    </Badge>

{:else if column.key === "nama_kelas"}

    {#if row.nama_kelas}

        <span class="kelas">
            {row.nama_kelas}
        </span>

    {:else}

        <span class="muted">
            -
        </span>

    {/if}

{:else if column.key === "semester"}

    {#if row.semester}

        <span class="semester">
            Semester {row.semester}
        </span>

    {:else}

        <span class="muted">
            -
        </span>

    {/if}

{:else if column.key === "nama_santri"}

    {row.nama_santri ?? "-"}

{:else if column.key === "keterangan"}

    <span class="keterangan">
        {row.keterangan ?? "-"}
    </span>

{:else}

    {row[column.key]}

{/if}

</svelte:fragment>

</Table>

{/if}

<style>

.kelas{

    font-weight:600;

    color:#2563eb;

}

.semester{

    font-weight:600;

    color:#059669;

}

.keterangan{

    color:#475569;

}

.muted{

    color:#94a3b8;

    font-style:italic;

}

</style>