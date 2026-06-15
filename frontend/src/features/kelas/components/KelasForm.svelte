<script>
    import { createEventDispatcher } from "svelte";

    import Input from "../../../components/ui/Input.svelte";
    import Select from "../../../components/ui/Select.svelte";

    import { kelasStore } from "../../../stores/kelas.store";
    import { kelasService } from "../services/kelas.service";

    export let kelas = null;
    export let isEdit = false;

    const dispatch = createEventDispatcher();

    let nama = kelas?.nama ?? "";
    let semester = kelas?.semester ?? "";

    let error = "";

    const semesterOptions = [
        { label: "Semester 1", value: 1 },
        { label: "Semester 2", value: 2 },
        { label: "Semester 3", value: 3 },
        { label: "Semester 4", value: 4 },
        { label: "Semester 5", value: 5 },
        { label: "Semester 6", value: 6 },
        { label: "Semester 7", value: 7 },
        { label: "Semester 8", value: 8 },
    ];

    async function handleSubmit(event) {

        event.preventDefault();

        error = "";

        if (!nama.trim()) {

            error = "Nama kelas wajib diisi.";

            return;

        }

        if (!semester) {

            error = "Semester wajib dipilih.";

            return;

        }

        try {

            let result;

            const payload = {
                nama,
                semester: Number(semester),
            };

            if (isEdit) {

                result = await kelasService.update(
                    kelas.id,
                    payload
                );

            } else {

                result = await kelasService.create(
                    payload
                );

                nama = "";
                semester = "";

            }

            dispatch("success", result);

        } catch (err) {

            console.error(err);

            error =
                err.response?.data?.message ??
                "Gagal menyimpan data kelas.";

        }

    }
</script>

<form
    class="kelas-form"
    on:submit={handleSubmit}
>

    <div class="form-header">

        <h2>

            {#if isEdit}

                ✏️ Edit Data Kelas

            {:else}

                🏫 Tambah Kelas Baru

            {/if}

        </h2>

        <p>

            Lengkapi data kelas di bawah ini.

        </p>

    </div>

    <div class="form-body">

        <Input
            label="Nama Kelas"
            placeholder="Contoh: Kelas A"
            bind:value={nama}
            required
        />

        <Select
            label="Semester"
            placeholder="Pilih Semester"
            bind:value={semester}
            options={semesterOptions}
            required
        />

    </div>

    {#if error}

        <div class="error">

            <span>⚠️</span>

            <div>

                <strong>

                    Terjadi Kesalahan

                </strong>

                <p>

                    {error}

                </p>

            </div>

        </div>

    {/if}

    <div class="actions">

        <button
            type="submit"
            class="submit-btn"
            disabled={$kelasStore.loading}
        >

            {#if $kelasStore.loading}

                <span class="spinner"></span>

                Menyimpan...

            {:else if isEdit}

                💾 Simpan Perubahan

            {:else}

                ➕ Tambah Kelas

            {/if}

        </button>

    </div>

</form>

<style>

.kelas-form{

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