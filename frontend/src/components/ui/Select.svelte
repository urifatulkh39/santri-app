<script>
    export let value = "";

    export let label = "";

    export let placeholder = "Pilih...";

    export let options = [];

    export let optionLabel = "label";

    export let optionValue = "value";

    export let disabled = false;

    export let required = false;

    export let error = "";

    export let helper = "";

    export let fullWidth = true;

    export let id = "";

    $: wrapperClass = [
        "select-wrapper",
        fullWidth ? "full" : ""
    ].join(" ");
</script>

<div class={wrapperClass}>

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
        class="select-container"
    >

        <select
            bind:value
            {id}
            {disabled}
            {required}
            {...$$restProps}
        >

            <option
                value=""
                disabled
            >

                {placeholder}

            </option>

            {#each options as option}

                <option
                    value={option[optionValue]}
                >

                    {option[optionLabel]}

                </option>

            {/each}

        </select>

        <span class="arrow">

            ▼

        </span>

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

.select-wrapper{

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

.select-container{

    position:relative;

    display:flex;

    align-items:center;

    min-height:48px;

    border-radius:14px;

    border:1px solid #e2e8f0;

    background:white;

    transition:
        border-color .22s,
        box-shadow .22s,
        transform .22s;

    box-shadow:
        0 2px 6px rgba(15,23,42,.04);

}

.select-container:hover{

    border-color:#cbd5e1;

    box-shadow:
        0 8px 20px rgba(15,23,42,.06);

}

.select-container:focus-within{

    border-color:#2563eb;

    box-shadow:
        0 0 0 4px rgba(37,99,235,.12),
        0 10px 24px rgba(37,99,235,.08);

    transform:translateY(-1px);

}

.select-container.error{

    border-color:#ef4444;

    background:#fffafa;

    box-shadow:
        0 0 0 4px rgba(239,68,68,.10);

}

/* ===================== */

select{

    width:100%;

    border:none;

    outline:none;

    background:transparent;

    appearance:none;

    -webkit-appearance:none;

    -moz-appearance:none;

    cursor:pointer;

    padding:14px 48px 14px 16px;

    font-size:15px;

    font-family:inherit;

    color:#0f172a;

}

select:disabled{

    cursor:not-allowed;

}

.select-container:has(select:disabled){

    opacity:.65;

    background:#f8fafc;

    cursor:not-allowed;

}

/* ===================== */

.arrow{

    position:absolute;

    right:16px;

    color:#64748b;

    pointer-events:none;

    transition:.2s;

    font-size:12px;

}

.select-container:focus-within .arrow{

    color:#2563eb;

    transform:rotate(180deg);

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

.select-container{

    min-height:46px;

}

select{

    font-size:14px;

    padding-left:14px;

}

}

</style>