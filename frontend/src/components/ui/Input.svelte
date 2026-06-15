<script>
    export let value = "";

    export let label = "";

    export let placeholder = "";

    export let type = "text";

    export let disabled = false;

    export let readonly = false;

    export let required = false;

    export let error = "";

    export let helper = "";

    export let icon = "";

    export let fullWidth = true;

    export let id = "";

    $: classes = [
        "input-wrapper",
        fullWidth ? "full" : ""
    ].join(" ");
</script>

<div class={classes}>

    {#if label}

        <label for={id}>

            {label}

            {#if required}

                <span class="required">

                    *

                </span>

            {/if}

        </label>

    {/if}

    <div
        class:error={!!error}
        class="input-container"
    >

        {#if icon}

            <span class="icon">

                {icon}

            </span>

        {/if}

        <input
            bind:value
            {id}
            {type}
            {placeholder}
            {disabled}
            {readonly}
            {required}
            {...$$restProps}
        />

    </div>

    {#if error}

        <small class="error-text">

            ⚠ {error}

        </small>

    {:else if helper}

        <small class="helper-text">

            {helper}

        </small>

    {/if}

</div>

<style>

.input-wrapper{

    display:flex;

    flex-direction:column;

    gap:10px;

}

.full{

    width:100%;

}

/* ===================== */

label{

    font-size:14px;

    font-weight:600;

    color:#334155;

    letter-spacing:.2px;

}

.required{

    margin-left:4px;

    color:#ef4444;

}

/* ===================== */

.input-container{

    display:flex;

    align-items:center;

    gap:12px;

    min-height:48px;

    padding:0 16px;

    border-radius:14px;

    border:1px solid #e2e8f0;

    background:white;

    transition:

        border-color .22s,

        box-shadow .22s,

        transform .22s,

        background .22s;

    box-shadow:

        0 2px 6px rgba(15,23,42,.04);

}

.input-container:hover{

    border-color:#cbd5e1;

    box-shadow:

        0 8px 20px rgba(15,23,42,.06);

}

.input-container:focus-within{

    border-color:#2563eb;

    box-shadow:

        0 0 0 4px rgba(37,99,235,.12),

        0 10px 24px rgba(37,99,235,.08);

    transform:translateY(-1px);

}

/* ===================== */

.input-container.error{

    border-color:#ef4444;

    background:#fffafa;

    box-shadow:

        0 0 0 4px rgba(239,68,68,.10);

}

/* ===================== */

.icon{

    display:flex;

    align-items:center;

    justify-content:center;

    color:#64748b;

    font-size:18px;

    flex-shrink:0;

    transition:.2s;

}

.input-container:focus-within .icon{

    color:#2563eb;

}

/* ===================== */

input{

    width:100%;

    border:none;

    outline:none;

    background:transparent;

    font-size:15px;

    font-family:inherit;

    color:#0f172a;

    padding:14px 0;

}

input::placeholder{

    color:#94a3b8;

}

input:disabled{

    cursor:not-allowed;

}

.input-container:has(input:disabled){

    opacity:.65;

    background:#f8fafc;

    cursor:not-allowed;

}

/* ===================== */

.helper-text{

    font-size:13px;

    color:#64748b;

}

.error-text{

    font-size:13px;

    color:#dc2626;

    font-weight:500;

}

/* ===================== */

@media(max-width:768px){

.input-container{

    min-height:46px;

    padding:0 14px;

}

input{

    font-size:14px;

}

}

</style>