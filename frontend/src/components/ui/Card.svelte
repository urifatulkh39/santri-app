<script>
    export let title = "";
    export let subtitle = "";

    export let padding = "md";
    export let shadow = "md";

    export let bordered = true;
    export let hover = false;

    export let fullHeight = false;

    $: classes = [
        "card",
        `padding-${padding}`,
        `shadow-${shadow}`,
        bordered ? "bordered" : "",
        hover ? "hover" : "",
        fullHeight ? "full-height" : ""
    ]
        .filter(Boolean)
        .join(" ");
</script>

<div class={classes}>

    {#if $$slots.header || title}

        <div class="card-header">

            {#if $$slots.header}

                <slot name="header" />

            {:else}

                <div class="header-content">

                    <div class="header-line"></div>

                    <div>

                        <h3>

                            {title}

                        </h3>

                        {#if subtitle}

                            <p>

                                {subtitle}

                            </p>

                        {/if}

                    </div>

                </div>

            {/if}

        </div>

    {/if}

    <div class="card-body">

        <slot />

    </div>

    {#if $$slots.footer}

        <div class="card-footer">

            <slot name="footer" />

        </div>

    {/if}

</div>

<style>

.card{

    position:relative;

    display:flex;

    flex-direction:column;

    overflow:hidden;

    background:rgba(255,255,255,.96);

    backdrop-filter:blur(12px);

    border-radius:20px;

    transition:
        transform .25s ease,
        box-shadow .25s ease,
        border-color .25s ease;

}

/* ========================= */

.bordered{

    border:1px solid #e2e8f0;

}

/* ========================= */

.hover:hover{

    transform:translateY(-4px);

    border-color:#dbeafe;

    box-shadow:
        0 18px 40px rgba(15,23,42,.08);

}

/* ========================= */

.full-height{

    height:100%;

}

/* ========================= */

.padding-sm{

    padding:18px;

}

.padding-md{

    padding:24px;

}

.padding-lg{

    padding:32px;

}

/* ========================= */

.shadow-none{

    box-shadow:none;

}

.shadow-sm{

    box-shadow:
        0 4px 12px rgba(15,23,42,.05);

}

.shadow-md{

    box-shadow:
        0 10px 28px rgba(15,23,42,.06);

}

.shadow-lg{

    box-shadow:
        0 20px 48px rgba(15,23,42,.10);

}

/* ========================= */

.card-header{

    display:flex;

    align-items:center;

    justify-content:space-between;

    margin-bottom:22px;

}

.header-content{

    display:flex;

    align-items:flex-start;

    gap:14px;

}

.header-line{

    width:5px;

    height:42px;

    border-radius:999px;

    background:linear-gradient(
        180deg,
        #3b82f6,
        #2563eb
    );

    flex-shrink:0;

}

.card-header h3{

    margin:0;

    font-size:20px;

    font-weight:700;

    color:#0f172a;

    line-height:1.2;

}

.card-header p{

    margin-top:6px;

    color:#64748b;

    font-size:14px;

    line-height:1.5;

}

/* ========================= */

.card-body{

    flex:1;

}

/* ========================= */

.card-footer{

    margin-top:24px;

    padding-top:18px;

    border-top:1px solid #f1f5f9;

}

/* ========================= */

@media(max-width:768px){

.padding-md{

    padding:20px;

}

.padding-lg{

    padding:24px;

}

.card-header{

    margin-bottom:18px;

}

.header-line{

    height:34px;

}

.card-header h3{

    font-size:18px;

}

.card-header p{

    font-size:13px;

}

}

</style>