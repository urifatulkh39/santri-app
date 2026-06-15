<script>
    import { APP } from "../../../lib/constants";

    export let collapsed = false;
</script>

<div class="sidebar-logo">

    <div class="logo-box">

        <div class="logo-circle">

            🎓

        </div>

        <span class="status-dot"></span>

    </div>

    {#if !collapsed}

        <div class="brand">

            <span class="brand-tag">

                MANAGEMENT SYSTEM

            </span>

            <h2>

                {APP.NAME}

            </h2>

            <p>

                Admin Dashboard

            </p>

        </div>

    {/if}

</div>

<style>

.sidebar-logo{

    display:flex;

    align-items:center;

    gap:18px;

    padding:28px 24px;

    border-bottom:1px solid rgba(226,232,240,.75);

}

/* ========================= */

.logo-box{

    position:relative;

    flex-shrink:0;

}

.logo-circle{

    width:64px;

    height:64px;

    border-radius:22px;

    display:flex;

    justify-content:center;

    align-items:center;

    font-size:30px;

    background:

        linear-gradient(
            135deg,
            #3b82f6,
            #2563eb
        );

    color:white;

    box-shadow:

        0 16px 35px
        rgba(37,99,235,.28);

    transition:.3s;

}

.logo-circle:hover{

    transform:rotate(-6deg) scale(1.05);

}

/* ========================= */

.status-dot{

    position:absolute;

    right:-2px;

    bottom:-2px;

    width:16px;

    height:16px;

    border-radius:50%;

    background:#22c55e;

    border:3px solid white;

    box-shadow:

        0 0 0 3px
        rgba(34,197,94,.15);

}

/* ========================= */

.brand{

    display:flex;

    flex-direction:column;

    min-width:0;

    animation:fade .25s ease;

}

.brand-tag{

    width:max-content;

    padding:5px 10px;

    border-radius:999px;

    background:#eff6ff;

    color:#2563eb;

    font-size:10px;

    font-weight:700;

    letter-spacing:1px;

    margin-bottom:10px;

}

.brand h2{

    margin:0;

    font-size:22px;

    font-weight:800;

    color:#0f172a;

    line-height:1.2;

}

.brand p{

    margin-top:6px;

    color:#64748b;

    font-size:13px;

    line-height:1.5;

}

/* ========================= */

@keyframes fade{

    from{

        opacity:0;

        transform:translateX(-8px);

    }

    to{

        opacity:1;

        transform:translateX(0);

    }

}

/* ========================= */

@media(max-width:768px){

.sidebar-logo{

    padding:22px 18px;

}

.logo-circle{

    width:56px;

    height:56px;

    font-size:26px;

    border-radius:18px;

}

.brand h2{

    font-size:20px;

}

}

</style>