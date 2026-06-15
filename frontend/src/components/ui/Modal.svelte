<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let open = false;

    export let title = "";

    export let size = "md";

    export let closable = true;

    export let closeOnOverlay = true;

    export let closeOnEscape = true;

    export let persistent = false;

    $: modalClass = [
        "modal",
        `modal-${size}`
    ].join(" ");

    function close() {

        if (persistent) return;

        dispatch("close");

    }

    function handleOverlay(event) {

        if (!closeOnOverlay) return;

        if (event.target === event.currentTarget) {

            close();

        }

    }

    function handleEscape(event) {

        if (!closeOnEscape) return;

        if (event.key === "Escape") {

            close();

        }

    }
</script>

<svelte:window on:keydown={handleEscape} />

{#if open}

<div
    class="overlay"
    role="dialog"
    aria-modal="true"
    tabindex="-1"
    on:click={handleOverlay}
>

    <div class={modalClass}>

        <div class="modal-header">

            {#if $$slots.header}

                <slot name="header" />

            {:else}

                <div class="header-content">

                    <div class="header-accent"></div>

                    <div>

                        <h2>

                            {title}

                        </h2>

                    </div>

                </div>

            {/if}

            {#if closable}

                <button
                    class="close-button"
                    type="button"
                    on:click={close}
                >

                    ✕

                </button>

            {/if}

        </div>

        <div class="modal-body">

            <slot />

        </div>

        {#if $$slots.footer}

            <div class="modal-footer">

                <slot name="footer" />

            </div>

        {/if}

    </div>

</div>

{/if}

<style>

.overlay{

    position:fixed;

    inset:0;

    display:flex;

    justify-content:center;

    align-items:center;

    padding:24px;

    background:rgba(15,23,42,.45);

    backdrop-filter:blur(12px);

    animation:overlayFade .22s ease;

    z-index:9999;

}

/* ======================== */

.modal{

    width:100%;

    max-height:90vh;

    overflow:hidden;

    display:flex;

    flex-direction:column;

    background:rgba(255,255,255,.96);

    backdrop-filter:blur(18px);

    border:1px solid rgba(226,232,240,.8);

    border-radius:24px;

    box-shadow:

        0 30px 80px rgba(15,23,42,.18);

    animation:popup .28s cubic-bezier(.22,1,.36,1);

}

/* ======================== */

.modal-sm{

    max-width:430px;

}

.modal-md{

    max-width:650px;

}

.modal-lg{

    max-width:900px;

}

.modal-xl{

    max-width:1120px;

}

.modal-full{

    width:100%;

    height:100%;

    max-width:none;

    max-height:none;

    border-radius:0;

}

/* ======================== */

.modal-header{

    position:sticky;

    top:0;

    z-index:2;

    display:flex;

    justify-content:space-between;

    align-items:center;

    gap:20px;

    padding:24px 28px;

    background:rgba(255,255,255,.96);

    border-bottom:1px solid #eef2f7;

}

.header-content{

    display:flex;

    align-items:center;

    gap:16px;

}

.header-accent{

    width:5px;

    height:42px;

    border-radius:999px;

    background:linear-gradient(

        180deg,

        #3b82f6,

        #2563eb

    );

}

.modal-header h2{

    margin:0;

    font-size:24px;

    font-weight:700;

    color:#0f172a;

}

/* ======================== */

.close-button{

    width:42px;

    height:42px;

    border:none;

    border-radius:12px;

    background:#f8fafc;

    color:#64748b;

    cursor:pointer;

    font-size:18px;

    transition:

        transform .2s,

        background .2s,

        color .2s;

}

.close-button:hover{

    background:#eff6ff;

    color:#2563eb;

    transform:rotate(90deg);

}

/* ======================== */

.modal-body{

    flex:1;

    overflow:auto;

    padding:28px;

}

/* ======================== */

.modal-footer{

    position:sticky;

    bottom:0;

    display:flex;

    justify-content:flex-end;

    gap:12px;

    padding:20px 28px;

    border-top:1px solid #eef2f7;

    background:rgba(255,255,255,.96);

}

/* ======================== */

@keyframes overlayFade{

    from{

        opacity:0;

    }

    to{

        opacity:1;

    }

}

@keyframes popup{

    from{

        opacity:0;

        transform:

            translateY(24px)

            scale(.96);

    }

    to{

        opacity:1;

        transform:

            translateY(0)

            scale(1);

    }

}

/* ======================== */

@media(max-width:768px){

.overlay{

    padding:16px;

}

.modal{

    max-height:95vh;

    border-radius:20px;

}

.modal-header{

    padding:20px;

}

.modal-body{

    padding:20px;

}

.modal-footer{

    padding:20px;

}

.modal-header h2{

    font-size:20px;

}

.header-accent{

    height:34px;

}

}

</style>