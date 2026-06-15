<script>
    export let variant = "primary";
    export let size = "md";
    export let rounded = "full";
    export let outlined = false;
    export let dot = false;

    $: classes = [
        "badge",
        `badge-${variant}`,
        `badge-${size}`,
        `rounded-${rounded}`,
        outlined ? "outlined" : ""
    ]
        .filter(Boolean)
        .join(" ");
</script>

<span class={classes}>

    {#if dot}

        <span class="badge-dot"></span>

    {/if}

    <slot />

</span>

<style>

.badge{

    display:inline-flex;

    align-items:center;

    justify-content:center;

    gap:8px;

    font-weight:600;

    letter-spacing:.2px;

    white-space:nowrap;

    user-select:none;

    transition:
        transform .2s ease,
        box-shadow .2s ease,
        background .2s ease;

    border:1px solid transparent;

}

.badge:hover{

    transform:translateY(-1px);

}

/* ========================= */

.badge-sm{

    min-height:24px;

    padding:0 10px;

    font-size:11px;

}

.badge-md{

    min-height:30px;

    padding:0 14px;

    font-size:12px;

}

.badge-lg{

    min-height:36px;

    padding:0 18px;

    font-size:13px;

}

/* ========================= */

.rounded-sm{

    border-radius:8px;

}

.rounded-md{

    border-radius:12px;

}

.rounded-lg{

    border-radius:16px;

}

.rounded-full{

    border-radius:999px;

}

/* ========================= */

.badge-primary{

    color:#1d4ed8;

    background:linear-gradient(
        180deg,
        #eff6ff,
        #dbeafe
    );

    border-color:#bfdbfe;

}

.badge-secondary{

    color:#475569;

    background:linear-gradient(
        180deg,
        #f8fafc,
        #e2e8f0
    );

    border-color:#cbd5e1;

}

.badge-success{

    color:#15803d;

    background:linear-gradient(
        180deg,
        #f0fdf4,
        #dcfce7
    );

    border-color:#bbf7d0;

}

.badge-danger{

    color:#dc2626;

    background:linear-gradient(
        180deg,
        #fef2f2,
        #fee2e2
    );

    border-color:#fecaca;

}

.badge-warning{

    color:#b45309;

    background:linear-gradient(
        180deg,
        #fffbeb,
        #fef3c7
    );

    border-color:#fde68a;

}

.badge-info{

    color:#0f766e;

    background:linear-gradient(
        180deg,
        #ecfeff,
        #cffafe
    );

    border-color:#a5f3fc;

}

.badge-gray{

    color:#64748b;

    background:linear-gradient(
        180deg,
        #f8fafc,
        #f1f5f9
    );

    border-color:#e2e8f0;

}

/* ========================= */

.outlined{

    background:white;

    border:1px solid currentColor;

    box-shadow:none;

}

/* ========================= */

.badge-dot{

    width:8px;

    height:8px;

    border-radius:999px;

    background:currentColor;

    box-shadow:
        0 0 0 3px rgba(255,255,255,.65);

    animation:pulse 2s infinite;

}

/* ========================= */

@keyframes pulse{

    0%{

        transform:scale(1);

        opacity:1;

    }

    50%{

        transform:scale(1.25);

        opacity:.75;

    }

    100%{

        transform:scale(1);

        opacity:1;

    }

}

</style>