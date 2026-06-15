<script>
    import { createEventDispatcher } from "svelte";

    export let title = "Tidak ada data";

    export let description =
        "Belum ada informasi yang dapat ditampilkan.";

    export let icon = "📭";

    export let actionText = "";

    export let fullHeight = false;

    const dispatch = createEventDispatcher();

    function handleAction() {
        dispatch("action");
    }
</script>

<div
    class="empty"
    class:full-height={fullHeight}
>

    <div class="icon-wrapper">

        <div class="icon">

            {icon}

        </div>

    </div>

    <h3>

        {title}

    </h3>

    <p>

        {description}

    </p>

    {#if actionText}

        <button
            class="action-button"
            on:click={handleAction}
        >

            {actionText}

        </button>

    {/if}

</div>

<style>

.empty{

    width:100%;

    display:flex;

    flex-direction:column;

    justify-content:center;

    align-items:center;

    text-align:center;

    padding:56px 32px;

    animation:fade .3s ease;

}

.full-height{

    min-height:420px;

}

/* ========================= */

.icon-wrapper{

    width:110px;

    height:110px;

    border-radius:999px;

    display:flex;

    align-items:center;

    justify-content:center;

    background:linear-gradient(
        180deg,
        #f8fbff,
        #eef5ff
    );

    border:1px solid #dbeafe;

    box-shadow:
        0 12px 30px rgba(37,99,235,.08);

    margin-bottom:28px;

}

.icon{

    font-size:54px;

    animation:float 3s ease-in-out infinite;

}

/* ========================= */

h3{

    margin:0;

    color:#0f172a;

    font-size:26px;

    font-weight:700;

}

p{

    margin-top:14px;

    max-width:460px;

    color:#64748b;

    line-height:1.8;

    font-size:15px;

}

/* ========================= */

.action-button{

    margin-top:30px;

    min-height:46px;

    padding:0 22px;

    border:none;

    border-radius:14px;

    cursor:pointer;

    background:linear-gradient(
        135deg,
        #3b82f6,
        #2563eb
    );

    color:white;

    font-size:14px;

    font-weight:600;

    transition:
        transform .22s,
        box-shadow .22s;

    box-shadow:
        0 10px 24px rgba(37,99,235,.22);

}

.action-button:hover{

    transform:translateY(-2px);

    box-shadow:
        0 18px 36px rgba(37,99,235,.30);

}

.action-button:active{

    transform:scale(.98);

}

/* ========================= */

@keyframes float{

    0%{

        transform:translateY(0);

    }

    50%{

        transform:translateY(-8px);

    }

    100%{

        transform:translateY(0);

    }

}

@keyframes fade{

    from{

        opacity:0;

        transform:translateY(10px);

    }

    to{

        opacity:1;

        transform:translateY(0);

    }

}

/* ========================= */

@media(max-width:768px){

.empty{

    padding:40px 20px;

}

.full-height{

    min-height:320px;

}

.icon-wrapper{

    width:90px;

    height:90px;

}

.icon{

    font-size:42px;

}

h3{

    font-size:22px;

}

p{

    font-size:14px;

}

.action-button{

    width:100%;

    max-width:260px;

}

}

</style>