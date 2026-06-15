<script>
    import { onMount } from "svelte";
    import { createEventDispatcher } from "svelte";

    import Input from "../../../components/ui/Input.svelte";
    import Select from "../../../components/ui/Select.svelte";

    import { santriStore } from "../../../stores/santri.store";
    import { kelasStore } from "../../../stores/kelas.store";

    import { santriService } from "../services/santri.service";
    import { kelasService } from "../../kelas/services/kelas.service";

    export let santri = null;
    export let isEdit = false;

    const dispatch = createEventDispatcher();

    let nama = santri?.nama ?? "";
    let kelas_id = santri?.kelas_id ?? "";
    let domisili = santri?.domisili ?? "";
    let status = santri?.status ?? "Aktif";

    let error = "";

    const statusOptions = [
        {
            label: "Aktif",
            value: "Aktif"
        },
        {
            label: "Lulus",
            value: "Lulus"
        },
        {
            label: "Keluar",
            value: "Keluar"
        },
        {
            label: "Nonaktif",
            value: "Nonaktif"
        }
    ];

    $: kelasOptions = [
        {
            label: "-- Pilih Kelas --",
            value: ""
        },
        ...$kelasStore.kelas.map((item) => ({
            label: `${item.nama} (Semester ${item.semester})`,
            value: item.id
        }))
    ];

    onMount(async () => {

        try {

            if ($kelasStore.kelas.length === 0) {

                await kelasService.getAll();

            }

        } catch (err) {

            console.error(
                "Load Kelas Error:",
                err
            );

        }

    });

    async function handleSubmit(event) {

        event.preventDefault();

        error = "";

        if (!nama.trim()) {

            error = "Nama santri wajib diisi.";

            return;

        }

        if (!kelas_id) {

            error = "Kelas wajib dipilih.";

            return;

        }

        try {

            const payload = {
                nama,
                kelas_id,
                domisili,
                status
            };

            let result;

            if (isEdit) {

                result = await santriService.update(
                    santri.id,
                    payload
                );

            } else {

                result = await santriService.create(
                    payload
                );

                nama = "";
                kelas_id = "";
                domisili = "";
                status = "Aktif";

            }

            dispatch(
                "success",
                result
            );

        } catch (err) {

            console.error(err);

            error =
                err.response?.data?.message ??
                "Gagal menyimpan data santri.";

        }

    }
</script>

<form
    class="santri-form"
    on:submit={handleSubmit}
>

    <div class="form-header">

        <h2>

            {#if isEdit}
                ✏️ Edit Data Santri
            {:else}
                👨‍🎓 Tambah Santri Baru
            {/if}

        </h2>

        <p>
            Lengkapi data santri di bawah ini.
        </p>

    </div>

    <div class="form-body">

        <Input
            label="Nama Santri"
            placeholder="Masukkan nama santri..."
            bind:value={nama}
            required
        />

        <Select
            label="Kelas"
            bind:value={kelas_id}
            options={kelasOptions}
            required
        />

        <Input
            label="Domisili"
            placeholder="Masukkan domisili santri..."
            bind:value={domisili}
        />

        <Select
            label="Status"
            bind:value={status}
            options={statusOptions}
            required
        />

    </div>

    {#if error}

        <div class="error">

            <span>⚠️</span>

            <div>

                <strong>Terjadi Kesalahan</strong>

                <p>{error}</p>

            </div>

        </div>

    {/if}

    <div class="actions">

        <button
            type="submit"
            class="submit-btn"
            disabled={$santriStore.loading}
        >

            {#if $santriStore.loading}

                <span class="spinner"></span>

                Menyimpan...

            {:else if isEdit}

                💾 Simpan Perubahan

            {:else}

                ➕ Tambah Santri

            {/if}

        </button>

    </div>

</form>

<style>

.santri-form{

    display:flex;
    flex-direction:column;
    gap:24px;

}

.form-header{

    padding-bottom:18px;
    border-bottom:1px solid #e2e8f0;

}

.form-header h2{

    margin:0;
    font-size:24px;
    font-weight:700;
    color:#0f172a;

}

.form-header p{

    margin-top:8px;
    color:#64748b;
    font-size:14px;

}

.form-body{

    display:flex;
    flex-direction:column;
    gap:20px;

}

.error{

    display:flex;
    gap:14px;
    align-items:flex-start;

    padding:16px 18px;

    background:#fef2f2;

    border:1px solid #fecaca;

    border-left:5px solid #ef4444;

    border-radius:14px;

}

.error span{

    font-size:22px;

}

.error strong{

    color:#b91c1c;

}

.error p{

    margin:6px 0 0;
    color:#dc2626;
    font-size:14px;

}

.actions{

    display:flex;
    justify-content:flex-end;
    padding-top:8px;

}

.submit-btn{

    min-width:200px;

    height:48px;

    border:none;

    border-radius:12px;

    background:linear-gradient(
        135deg,
        #2563eb,
        #1d4ed8
    );

    color:white;

    font-size:15px;

    font-weight:600;

    cursor:pointer;

    display:flex;

    justify-content:center;

    align-items:center;

    gap:10px;

    transition:.25s;

    box-shadow:
        0 12px 30px
        rgba(37,99,235,.25);

}

.submit-btn:hover:not(:disabled){

    transform:translateY(-2px);

    box-shadow:
        0 18px 35px
        rgba(37,99,235,.35);

}

.submit-btn:active:not(:disabled){

    transform:scale(.98);

}

.submit-btn:disabled{

    opacity:.7;

    cursor:not-allowed;

}

.spinner{

    width:18px;

    height:18px;

    border-radius:50%;

    border:2px solid rgba(255,255,255,.35);

    border-top-color:white;

    animation:spin .7s linear infinite;

}

@keyframes spin{

    to{

        transform:rotate(360deg);

    }

}

@media(max-width:768px){

.actions{

    justify-content:stretch;

}

.submit-btn{

    width:100%;

}

.form-header h2{

    font-size:20px;

}

}

</style>