<script>
    import { createEventDispatcher } from "svelte";

    import Modal from "../../../components/ui/Modal.svelte";
    import SantriForm from "./SantriForm.svelte";

    export let open = false;
    export let santri = null;
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
    title={isEdit ? "Edit Santri" : "Tambah Santri"}
    size="md"
    on:close={handleClose}
>
    <SantriForm
        {santri}
        {isEdit}
        on:success={handleSuccess}
    />
</Modal>