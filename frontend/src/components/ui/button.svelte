<script>
    export let variant = "primary";
    export let size = "md";
    export let type = "button";

    export let disabled = false;
    export let loading = false;

    export let fullWidth = false;

    export let rounded = "md";

    export let icon = "";

    export let onclick;
    export let onfocus;
    export let onblur;

    $: classes = [
        "btn",
        `btn-${variant}`,
        `btn-${size}`,
        `rounded-${rounded}`,
        fullWidth ? "full" : ""
    ]
        .filter(Boolean)
        .join(" ");
</script>

<button
    {type}
    class={classes}
    disabled={disabled || loading}
    onclick={onclick}
    onfocus={onfocus}
    onblur={onblur}
>

    {#if loading}

        <span class="spinner"></span>

    {:else if icon}

        <span class="icon">

            {icon}

        </span>

    {/if}

    <span class="label">

        <slot />

    </span>

</button>

<style>

.btn{

    position:relative;

    overflow:hidden;

    display:inline-flex;

    align-items:center;

    justify-content:center;

    gap:10px;

    border:none;

    cursor:pointer;

    font-family:inherit;

    font-weight:600;

    letter-spacing:.2px;

    transition:
        transform .22s ease,
        box-shadow .22s ease,
        background .22s ease,
        color .22s ease;

    user-select:none;

    -webkit-tap-highlight-color:transparent;

}

.btn:hover:not(:disabled){

    transform:translateY(-2px);

}

.btn:active:not(:disabled){

    transform:translateY(0) scale(.98);

}

.btn:focus-visible{

    outline:none;

    box-shadow:
        0 0 0 4px rgba(37,99,235,.18);

}

.btn:disabled{

    cursor:not-allowed;

    opacity:.65;

    transform:none;

    box-shadow:none;

}

/* ===================== */

.full{

    width:100%;

}

/* ===================== */

.btn-sm{

    height:36px;

    padding:0 14px;

    font-size:13px;

}

.btn-md{

    height:44px;

    padding:0 20px;

    font-size:14px;

}

.btn-lg{

    height:52px;

    padding:0 28px;

    font-size:16px;

}

/* ===================== */

.rounded-sm{

    border-radius:10px;

}

.rounded-md{

    border-radius:14px;

}

.rounded-lg{

    border-radius:18px;

}

.rounded-full{

    border-radius:999px;

}

/* ===================== */

.btn-primary{

    color:white;

    background:linear-gradient(
        135deg,
        #3b82f6,
        #2563eb
    );

    box-shadow:
        0 10px 24px rgba(37,99,235,.22);

}

.btn-primary:hover:not(:disabled){

    box-shadow:
        0 16px 34px rgba(37,99,235,.30);

}

/* ===================== */

.btn-success{

    color:white;

    background:linear-gradient(
        135deg,
        #22c55e,
        #16a34a
    );

    box-shadow:
        0 10px 24px rgba(34,197,94,.22);

}

/* ===================== */

.btn-danger{

    color:white;

    background:linear-gradient(
        135deg,
        #ef4444,
        #dc2626
    );

    box-shadow:
        0 10px 24px rgba(239,68,68,.22);

}

/* ===================== */

.btn-warning{

    color:white;

    background:linear-gradient(
        135deg,
        #f59e0b,
        #d97706
    );

    box-shadow:
        0 10px 24px rgba(245,158,11,.22);

}

/* ===================== */

.btn-secondary{

    color:white;

    background:linear-gradient(
        135deg,
        #64748b,
        #475569
    );

    box-shadow:
        0 10px 24px rgba(100,116,139,.20);

}

/* ===================== */

.btn-outline{

    background:white;

    color:#2563eb;

    border:1px solid #dbeafe;

    box-shadow:
        inset 0 0 0 1px rgba(37,99,235,.08);

}

.btn-outline:hover:not(:disabled){

    background:#eff6ff;

}

/* ===================== */

.btn-ghost{

    background:transparent;

    color:#334155;

}

.btn-ghost:hover:not(:disabled){

    background:#f8fafc;

}

/* ===================== */

.icon{

    display:flex;

    align-items:center;

    justify-content:center;

    font-size:16px;

}

.label{

    white-space:nowrap;

}

/* ===================== */

.spinner{

    width:18px;

    height:18px;

    border-radius:50%;

    border:2px solid rgba(255,255,255,.35);

    border-top-color:white;

    animation:spin .65s linear infinite;

}

@keyframes spin{

    to{

        transform:rotate(360deg);

    }

}

</style>