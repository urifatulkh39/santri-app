<script>
    import { onMount } from "svelte";

    import Card from "../../../components/ui/Card.svelte";
    import ConfirmDialog from "../../../components/ui/ConfirmDialog.svelte";

    import KelasTable from "../components/KelasTable.svelte";
    import KelasModal from "../components/KelasModal.svelte";

    import { kelasStore } from "../../../stores/kelas.store";
    import { kelasService } from "../services/kelas.service";

    let modalOpen = false;
    let deleteDialog = false;

    let isEdit = false;

    let selected = null;

    let error = "";

    async function loadData() {

        error = "";

        try {

            await kelasService.getAll();

        } catch (err) {

            console.error(err);

            error =
                err.response?.data?.message ??
                "Gagal memuat data kelas.";

        }

    }

    function tambahData() {

        selected = null;

        isEdit = false;

        modalOpen = true;

    }

    function editData(event) {

        selected = event.detail;

        isEdit = true;

        modalOpen = true;

    }

    function hapusData(event) {

        selected = event.detail;

        deleteDialog = true;

    }

    async function confirmDelete() {

        if (!selected) return;

        try {

            await kelasService.delete(selected.id);

            deleteDialog = false;

            selected = null;

            await loadData();

        } catch (err) {

            console.error(err);

            alert(
                err.response?.data?.message ??
                "Gagal menghapus data."
            );

        }

    }

    async function handleSuccess() {

        modalOpen = false;

        await loadData();

    }

    onMount(loadData);

</script>

<div class="page">

    <div class="page-header">

        <div class="header-left">

            <span class="page-icon">

                🏫

            </span>

            <div>

                <h1>

                    Data Kelas

                </h1>

                <p>

                    Kelola seluruh data kelas dengan mudah.

                </p>

            </div>

        </div>

        <div class="header-right">

            <div class="total-card">

                <small>Total</small>

                <strong>

                    {$kelasStore.kelas.length}

                </strong>

            </div>

            <button
                class="add-button"
                on:click={tambahData}
            >

                ➕ Tambah Kelas

            </button>

        </div>

    </div>

    {#if error}

        <div class="error-card">

            <span>

                ⚠️

            </span>

            <div>

                <strong>

                    Gagal Memuat Data

                </strong>

                <p>

                    {error}

                </p>

            </div>

        </div>

    {/if}

    <Card title="Daftar Kelas">

        <KelasTable
            data={$kelasStore.kelas}
            loading={$kelasStore.loading}
            on:edit={editData}
            on:delete={hapusData}
        />

    </Card>

    <KelasModal
        open={modalOpen}
        kelas={selected}
        isEdit={isEdit}
        on:close={() => modalOpen = false}
        on:success={handleSuccess}
    />

    <ConfirmDialog
        open={deleteDialog}
        danger
        title="Hapus Kelas"
        message="Data yang dihapus tidak dapat dikembalikan."
        confirmText="Hapus"
        cancelText="Batal"
        loading={$kelasStore.loading}
        on:confirm={confirmDelete}
        on:cancel={() => deleteDialog = false}
        on:close={() => deleteDialog = false}
    />

</div>

<style>

.page{

    display:flex;
    flex-direction:column;
    gap:28px;

}

/* ===================== */

.page-header{

    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:24px;

    padding:28px;

    border-radius:20px;

    background:linear-gradient(
        135deg,
        #2563eb,
        #1d4ed8
    );

    color:white;

    box-shadow:
        0 20px 40px
        rgba(37,99,235,.20);

}

.header-left{

    display:flex;
    align-items:center;
    gap:18px;

}

.page-icon{

    width:64px;
    height:64px;

    border-radius:18px;

    background:rgba(255,255,255,.15);

    display:flex;
    align-items:center;
    justify-content:center;

    font-size:30px;

}

.page-header h1{

    margin:0;

    font-size:32px;

    font-weight:700;

}

.page-header p{

    margin-top:6px;

    color:rgba(255,255,255,.85);

}

.header-right{

    display:flex;
    align-items:center;
    gap:18px;

}

/* ===================== */

.total-card{

    background:rgba(255,255,255,.12);

    backdrop-filter:blur(10px);

    border-radius:16px;

    padding:12px 20px;

    min-width:90px;

    text-align:center;

}

.total-card small{

    display:block;

    opacity:.8;

}

.total-card strong{

    font-size:28px;

}

/* ===================== */

.add-button{

    height:50px;

    padding:0 24px;

    border:none;

    border-radius:12px;

    background:white;

    color:#2563eb;

    font-weight:700;

    cursor:pointer;

    transition:.25s;

    box-shadow:
        0 10px 20px
        rgba(0,0,0,.15);

}

.add-button:hover{

    transform:translateY(-2px);

    box-shadow:
        0 15px 28px
        rgba(0,0,0,.22);

}

.add-button:active{

    transform:scale(.97);

}

/* ===================== */

.error-card{

    display:flex;

    gap:16px;

    align-items:flex-start;

    padding:18px;

    border-radius:16px;

    background:#fef2f2;

    border-left:5px solid #ef4444;

    border:1px solid #fecaca;

}

.error-card span{

    font-size:26px;

}

.error-card strong{

    color:#b91c1c;

}

.error-card p{

    margin-top:6px;

    color:#dc2626;

}

/* ===================== */

@media(max-width:768px){

.page-header{

    flex-direction:column;

    align-items:flex-start;

}

.header-right{

    width:100%;

    flex-direction:column;

    align-items:stretch;

}

.total-card{

    width:100%;

}

.add-button{

    width:100%;

}

.page-header h1{

    font-size:26px;

}

}

</style>