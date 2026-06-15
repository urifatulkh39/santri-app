<script>
    import { createEventDispatcher } from "svelte";

    export let open = false;

    export let title = "Konfirmasi";

    export let message =
        "Apakah Anda yakin ingin melanjutkan?";

    export let confirmText = "Ya";

    export let cancelText = "Batal";

    export let loading = false;

    export let danger = false;

    const dispatch = createEventDispatcher();

    function confirm() {

        if (loading) return;

        dispatch("confirm");

    }

    function cancel() {

        if (loading) return;

        dispatch("cancel");

    }

    function close() {

        if (loading) return;

        dispatch("close");

    }

    function handleOverlay(event) {

        if (event.target === event.currentTarget) {

            close();

        }

    }

    function handleKeydown(event) {

        if (event.key === "Escape") {

            close();

        }

    }
</script>

<svelte:window on:keydown={handleKeydown} />

{#if open}

<div
    class="overlay"
    role="dialog"
    aria-modal="true"
    tabindex="-1"
    on:click={handleOverlay}
>

    <div class="dialog">

        <div
            class="icon-wrapper"
            class:danger={danger}
        >

            <div class="icon">

                {#if danger}

                    ⚠️

                {:else}

                    ❓

                {/if}

            </div>

        </div>

        <h2>

            {title}

        </h2>

        <p>

            {message}

        </p>

        <div class="actions">

            <button
                type="button"
                class="cancel-button"
                disabled={loading}
                on:click={cancel}
            >

                {cancelText}

            </button>

            <button
                type="button"
                class="confirm-button"
                class:danger-button={danger}
                disabled={loading}
                on:click={confirm}
            >

                {#if loading}

                    <span class="spinner"></span>

                    Memproses...

                {:else}

                    {confirmText}

                {/if}

            </button>

        </div>

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

    backdrop-filter:blur(10px);

    animation:fade .25s ease;

    z-index:9999;

}

/* ======================= */

.dialog{

    width:100%;

    max-width:460px;

    padding:34px;

    text-align:center;

    background:rgba(255,255,255,.96);

    backdrop-filter:blur(14px);

    border:1px solid #e2e8f0;

    border-radius:24px;

    box-shadow:

        0 30px 70px rgba(15,23,42,.16);

    animation:popup .25s cubic-bezier(.22,1,.36,1);

}

/* ======================= */

.icon-wrapper{

    width:84px;

    height:84px;

    margin:0 auto 22px;

    border-radius:999px;

    display:flex;

    justify-content:center;

    align-items:center;

    background:linear-gradient(

        180deg,

        #eff6ff,

        #dbeafe

    );

    border:1px solid #bfdbfe;

}

.icon-wrapper.danger{

    background:linear-gradient(

        180deg,

        #fef2f2,

        #fee2e2

    );

    border-color:#fecaca;

}

.icon{

    font-size:42px;

    animation:float 3s ease-in-out infinite;

}

/* ======================= */

h2{

    margin:0;

    color:#0f172a;

    font-size:24px;

    font-weight:700;

}

p{

    margin:16px 0 0;

    color:#64748b;

    line-height:1.8;

    font-size:15px;

}

/* ======================= */

.actions{

    margin-top:34px;

    display:flex;

    gap:14px;

}

.actions button{

    flex:1;

    min-height:46px;

    border:none;

    border-radius:14px;

    cursor:pointer;

    font-weight:600;

    font-size:14px;

    transition:

        transform .2s,

        box-shadow .2s,

        background .2s;

}

.actions button:hover:not(:disabled){

    transform:translateY(-2px);

}

.actions button:active:not(:disabled){

    transform:scale(.98);

}

.actions button:disabled{

    opacity:.65;

    cursor:not-allowed;

}

/* ======================= */

.cancel-button{

    background:#f8fafc;

    color:#334155;

    border:1px solid #e2e8f0;

}

.cancel-button:hover:not(:disabled){

    background:#eef2f7;

}

/* ======================= */

.confirm-button{

    display:flex;

    justify-content:center;

    align-items:center;

    gap:10px;

    color:white;

    background:linear-gradient(

        135deg,

        #3b82f6,

        #2563eb

    );

    box-shadow:

        0 10px 24px rgba(37,99,235,.22);

}

.confirm-button:hover:not(:disabled){

    box-shadow:

        0 16px 34px rgba(37,99,235,.30);

}

.danger-button{

    background:linear-gradient(

        135deg,

        #ef4444,

        #dc2626

    );

    box-shadow:

        0 10px 24px rgba(239,68,68,.22);

}

.danger-button:hover:not(:disabled){

    box-shadow:

        0 16px 34px rgba(239,68,68,.30);

}

/* ======================= */

.spinner{

    width:16px;

    height:16px;

    border-radius:999px;

    border:2px solid rgba(255,255,255,.35);

    border-top-color:white;

    animation:spin .7s linear infinite;

}

/* ======================= */

@keyframes spin{

    to{

        transform:rotate(360deg);

    }

}

@keyframes popup{

    from{

        opacity:0;

        transform:translateY(20px) scale(.96);

    }

    to{

        opacity:1;

        transform:translateY(0) scale(1);

    }

}

@keyframes fade{

    from{

        opacity:0;

    }

    to{

        opacity:1;

    }

}

@keyframes float{

    0%{

        transform:translateY(0);

    }

    50%{

        transform:translateY(-6px);

    }

    100%{

        transform:translateY(0);

    }

}

/* ======================= */

@media(max-width:768px){

.overlay{

    padding:16px;

}

.dialog{

    padding:26px;

    border-radius:20px;

}

.icon-wrapper{

    width:72px;

    height:72px;

}

.icon{

    font-size:34px;

}

.actions{

    flex-direction:column;

}

.actions button{

    width:100%;

}

}

</style>