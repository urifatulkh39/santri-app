<script>
    import Card from "../../../components/ui/Card.svelte";
    import Loader from "../../../components/ui/Loader.svelte";

    export let title = "";

    export let value = 0;

    export let subtitle = "";

    export let icon = "📊";

    export let color = "primary";

    export let loading = false;

    $: colorClass = `color-${color}`;
</script>

<Card
    hover
    fullHeight
>

    {#if loading}

        <Loader
            size="sm"
            text=""
        />

    {:else}

        <div class="dashboard-card">

            <div class="card-header">

                <div>

                    <p class="title">

                        {title}

                    </p>

                    <h2>

                        {value}

                    </h2>

                    {#if subtitle}

                        <small>

                            {subtitle}

                        </small>

                    {/if}

                </div>

                <div class={`icon ${colorClass}`}>

                    {icon}

                </div>

            </div>

        </div>

    {/if}

</Card>

<style>

.dashboard-card{

    display:flex;

    flex-direction:column;

    justify-content:center;

    min-height:120px;

}

.card-header{

    display:flex;

    justify-content:space-between;

    align-items:center;

}

.title{

    margin:0;

    font-size:14px;

    color:#64748b;

}

h2{

    margin:10px 0 6px;

    font-size:34px;

    color:#0f172a;

    font-weight:700;

}

small{

    color:#94a3b8;

    font-size:13px;

}

.icon{

    width:64px;

    height:64px;

    border-radius:18px;

    display:flex;

    justify-content:center;

    align-items:center;

    font-size:30px;

}

/* ======================== */

.color-primary{

    background:#dbeafe;

    color:#2563eb;

}

.color-success{

    background:#dcfce7;

    color:#16a34a;

}

.color-warning{

    background:#fef3c7;

    color:#d97706;

}

.color-danger{

    background:#fee2e2;

    color:#dc2626;

}

.color-info{

    background:#cffafe;

    color:#0891b2;

}

</style>