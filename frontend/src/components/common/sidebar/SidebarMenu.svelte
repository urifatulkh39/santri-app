<script>
    import { createEventDispatcher } from "svelte";
    import { SIDEBAR_MENU } from "../../../lib/constants";

    export let active = "dashboard";
    export let collapsed = false;

    const dispatch = createEventDispatcher();

    function selectMenu(key) {

        dispatch("change", key);

    }

    function getIcon(key) {

        switch (key) {

            case "dashboard":

                return "🏠";

            case "santri":

                return "👨‍🎓";

            case "riwayat":

                return "📄";

            case "grafik":

                return "📊";

            case "setting":

                return "⚙️";

            default:

                return "📁";

        }

    }
</script>

<nav class="sidebar-menu">

    {#if !collapsed}

        <span class="menu-title">

            MAIN MENU

        </span>

    {/if}

    {#each SIDEBAR_MENU as menu}

        <button
            class="menu-item"
            class:active={active === menu.key}
            on:click={() => selectMenu(menu.key)}
            title={collapsed ? menu.title : ""}
        >

            <div class="icon">

                {getIcon(menu.key)}

            </div>

            {#if !collapsed}

                <div class="content">

                    <span>

                        {menu.title}

                    </span>

                </div>

            {/if}

            {#if active === menu.key}

                <div class="indicator"></div>

            {/if}

        </button>

    {/each}

</nav>

<style>

.sidebar-menu{

    flex:1;

    padding:28px 18px;

    display:flex;

    flex-direction:column;

    gap:10px;

}

/* ====================== */

.menu-title{

    margin:0 16px 10px;

    font-size:11px;

    font-weight:700;

    letter-spacing:1.5px;

    color:#94a3b8;

}

/* ====================== */

.menu-item{

    position:relative;

    display:flex;

    align-items:center;

    gap:16px;

    width:100%;

    height:58px;

    padding:0 18px;

    border:none;

    border-radius:18px;

    cursor:pointer;

    background:transparent;

    color:#475569;

    transition:

        background .25s,

        transform .2s,

        color .2s;

    overflow:hidden;

}

.menu-item:hover{

    background:#eff6ff;

    color:#2563eb;

    transform:translateX(4px);

}

/* ====================== */

.menu-item.active{

    background:

        linear-gradient(
            135deg,
            #3b82f6,
            #2563eb
        );

    color:white;

    box-shadow:

        0 12px 26px rgba(37,99,235,.25);

}

/* ====================== */

.indicator{

    position:absolute;

    left:0;

    top:10px;

    bottom:10px;

    width:4px;

    border-radius:999px;

    background:white;

}

/* ====================== */

.icon{

    width:40px;

    height:40px;

    border-radius:12px;

    display:flex;

    align-items:center;

    justify-content:center;

    background:rgba(255,255,255,.08);

    font-size:20px;

    flex-shrink:0;

}

.menu-item:not(.active) .icon{

    background:#f8fafc;

}

/* ====================== */

.content{

    display:flex;

    flex-direction:column;

    align-items:flex-start;

}

.content span{

    font-size:15px;

    font-weight:600;

}

/* ====================== */

@media(max-width:768px){

.sidebar-menu{

    padding:22px 14px;

}

.menu-item{

    height:54px;

    border-radius:16px;

}

}

</style>