<script>
    export let text = "Loading...";

    export let size = "md";

    export let fullscreen = false;

    export let overlay = false;

    export let color = "primary";

    $: wrapperClass = [
        "loader-wrapper",
        fullscreen ? "fullscreen" : "",
        overlay ? "overlay" : ""
    ]
        .filter(Boolean)
        .join(" ");

    $: spinnerClass = [
        "spinner",
        `spinner-${size}`,
        `spinner-${color}`
    ]
        .filter(Boolean)
        .join(" ");
</script>

<div class={wrapperClass}>

    <div class="loader">

        <div class={spinnerClass}></div>

        {#if text}

            <p>

                {text}

            </p>

        {/if}

    </div>

</div>

<style>

.loader-wrapper{

    width:100%;

    display:flex;

    justify-content:center;

    align-items:center;

    padding:40px;

    animation:fade .25s ease;

}

.fullscreen{

    position:fixed;

    inset:0;

    z-index:9999;

}

.overlay{

    background:rgba(255,255,255,.72);

    backdrop-filter:blur(10px);

}

/* ===================== */

.loader{

    display:flex;

    flex-direction:column;

    align-items:center;

    gap:18px;

    padding:28px 36px;

    border-radius:22px;

    background:rgba(255,255,255,.92);

    border:1px solid #e2e8f0;

    box-shadow:
        0 20px 40px rgba(15,23,42,.08);

}

/* ===================== */

.loader p{

    margin:0;

    color:#64748b;

    font-size:14px;

    font-weight:600;

    letter-spacing:.2px;

}

/* ===================== */

.spinner{

    position:relative;

    border-radius:999px;

    border-style:solid;

    border-top-color:transparent !important;

    animation:
        spin .75s linear infinite,
        pulse 1.4s ease infinite;

}

/* ===================== */

.spinner-sm{

    width:28px;

    height:28px;

    border-width:3px;

}

.spinner-md{

    width:46px;

    height:46px;

    border-width:4px;

}

.spinner-lg{

    width:66px;

    height:66px;

    border-width:5px;

}

/* ===================== */

.spinner-primary{

    border-color:#2563eb;

    box-shadow:
        0 0 18px rgba(37,99,235,.25);

}

.spinner-success{

    border-color:#22c55e;

    box-shadow:
        0 0 18px rgba(34,197,94,.25);

}

.spinner-danger{

    border-color:#ef4444;

    box-shadow:
        0 0 18px rgba(239,68,68,.25);

}

.spinner-warning{

    border-color:#f59e0b;

    box-shadow:
        0 0 18px rgba(245,158,11,.25);

}

.spinner-gray{

    border-color:#94a3b8;

    box-shadow:
        0 0 18px rgba(148,163,184,.20);

}

/* ===================== */

@keyframes spin{

    to{

        transform:rotate(360deg);

    }

}

@keyframes pulse{

    0%{

        opacity:1;

        transform:scale(1);

    }

    50%{

        opacity:.8;

        transform:scale(1.06);

    }

    100%{

        opacity:1;

        transform:scale(1);

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

/* ===================== */

@media(max-width:768px){

.loader{

    padding:22px;

    border-radius:18px;

}

.spinner-md{

    width:40px;

    height:40px;

}

.spinner-lg{

    width:56px;

    height:56px;

}

.loader p{

    font-size:13px;

}

}

</style>