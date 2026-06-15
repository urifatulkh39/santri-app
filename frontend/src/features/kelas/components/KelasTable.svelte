<script>
    import { createEventDispatcher } from "svelte";

    import Table from "../../../components/ui/Table.svelte";
    import Empty from "../../../components/ui/Empty.svelte";

    export let data = [];
    export let loading = false;

    const dispatch = createEventDispatcher();

    const columns = [
        {
            key: "id",
            label: "ID"
        },
        {
            key: "nama",
            label: "Nama Kelas"
        },
        {
            key: "semester",
            label: "Semester"
        },
        {
            key: "action",
            label: "Aksi"
        }
    ];

    function handleEdit(row) {

        dispatch("edit", row);

    }

    function handleDelete(row) {

        dispatch("delete", row);

    }
</script>

{#if !loading && data.length === 0}

    <Empty
        icon="🏫"
        title="Belum ada data kelas"
        description="Silakan tambahkan data kelas terlebih dahulu."
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

{#if column.key === "semester"}

    Semester {row.semester}

{:else if column.key === "action"}

<div class="actions">

    <button
        class="btn btn-edit"
        on:click={() => handleEdit(row)}
    >

        ✏️

        <span>Edit</span>

    </button>

    <button
        class="btn btn-delete"
        on:click={() => handleDelete(row)}
    >

        🗑️

        <span>Hapus</span>

    </button>

</div>

{:else}

    {row[column.key]}

{/if}

</svelte:fragment>

</Table>

{/if}

<style>

.actions{

    display:flex;
    align-items:center;
    gap:10px;

}

.btn{

    border:none;
    outline:none;
    cursor:pointer;

    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:8px;

    min-width:90px;
    height:38px;
    padding:0 16px;

    border-radius:10px;

    font-size:13px;
    font-weight:600;

    transition:.25s;

    color:white;

}

.btn:hover{

    transform:translateY(-2px);

}

.btn:active{

    transform:scale(.96);

}

.btn-edit{

    background:linear-gradient(
        135deg,
        #2563eb,
        #1d4ed8
    );

    box-shadow:
        0 8px 18px rgba(37,99,235,.25);

}

.btn-edit:hover{

    box-shadow:
        0 12px 24px rgba(37,99,235,.35);

}

.btn-delete{

    background:linear-gradient(
        135deg,
        #ef4444,
        #dc2626
    );

    box-shadow:
        0 8px 18px rgba(239,68,68,.25);

}

.btn-delete:hover{

    box-shadow:
        0 12px 24px rgba(239,68,68,.35);

}

.btn span{

    white-space:nowrap;

}

@media(max-width:768px){

.actions{

    flex-direction:column;
    align-items:stretch;

}

.btn{

    width:100%;

}

}

</style>