<script>
    import { createEventDispatcher } from "svelte";

    import Modal from "../../../components/ui/Modal.svelte";
    import KelasForm from "./KelasForm.svelte";

    export let open = false;
    export let kelas = null;
    export let isEdit = false;

    const dispatch = createEventDispatcher();

    function handleClose() {
        dispatch("close");
    }

    function handleSuccess(event) {
        dispatch("success", event.detail);
    }
</script>

<Modal
    open={open}
    title={isEdit ? "Edit Kelas" : "Tambah Kelas"}
    size="md"
    on:close={handleClose}
>
    <KelasForm
        {kelas}
        {isEdit}
        on:success={handleSuccess}
    />
</Modal>