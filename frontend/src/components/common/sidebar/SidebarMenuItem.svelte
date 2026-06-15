<script>
    import { createEventDispatcher } from "svelte";

    export let menu;

    export let active = false;

    export let collapsed = false;

    const dispatch = createEventDispatcher();

    function select() {
        dispatch("select", menu);
    }
</script>

<button
    class="menu-item"
    class:active
    title={collapsed ? menu.title : ""}
    aria-label={menu.title}
    on:click={select}
>

    <span class="active-indicator"></span>

    <div class="icon-wrapper">

        <span class="icon">

            {menu.icon}

        </span>

    </div>

    {#if !collapsed}

        <div class="content">

            <div class="title-row">

                <span class="title">

                    {menu.title}

                </span>

                {#if menu.tag}

                    <span class="tag">

                        {menu.tag}

                    </span>

                {/if}

            </div>

            {#if menu.description}

                <small>

                    {menu.description}

                </small>

            {/if}

        </div>

        {#if menu.badge}

            <span class="badge">

                {menu.badge}

            </span>

        {/if}

    {/if}

</button>

<style>

.menu-item{

    position:relative;

    width:100%;

    min-height:64px;

    display:flex;

    align-items:center;

    gap:16px;

    padding:12px 16px;

    border:none;

    border-radius:18px;

    background:transparent;

    cursor:pointer;

    overflow:hidden;

    transition:
        background .25s ease,
        transform .25s ease,
        box-shadow .25s ease;

}

.menu-item:hover{

    background:#eff6ff;

    transform:translateX(4px);

}

.menu-item:focus-visible{

    outline:none;

    box-shadow:
        0 0 0 4px rgba(37,99,235,.18);

}

.menu-item.active{

    background:
        linear-gradient(
            135deg,
            #3b82f6,
            #2563eb
        );

    color:white;

    transform:translateX(6px);

    box-shadow:
        0 18px 36px rgba(37,99,235,.28);

}

/* ====================== */

.active-indicator{

    position:absolute;

    left:0;

    top:10px;

    bottom:10px;

    width:4px;

    border-radius:999px;

    background:transparent;

    transition:.25s;

}

.menu-item.active .active-indicator{

    background:white;

}

/* ====================== */

.icon-wrapper{

    width:46px;

    height:46px;

    flex-shrink:0;

    display:flex;

    justify-content:center;

    align-items:center;

    border-radius:14px;

    background:#f8fafc;

    transition:.25s;

}

.menu-item:hover .icon-wrapper{

    background:white;

}

.menu-item.active .icon-wrapper{

    background:rgba(255,255,255,.16);

}

.icon{

    font-size:22px;

    line-height:1;

}

/* ====================== */

.content{

    flex:1;

    min-width:0;

    display:flex;

    flex-direction:column;

    justify-content:center;

}

.title-row{

    display:flex;

    align-items:center;

    gap:8px;

}

.title{

    font-size:15px;

    font-weight:700;

    color:inherit;

    white-space:nowrap;

    overflow:hidden;

    text-overflow:ellipsis;

}

small{

    margin-top:4px;

    color:#64748b;

    font-size:12px;

    white-space:nowrap;

    overflow:hidden;

    text-overflow:ellipsis;

}

.menu-item.active small{

    color:rgba(255,255,255,.82);

}

/* ====================== */

.tag{

    padding:2px 8px;

    border-radius:999px;

    background:#f59e0b;

    color:white;

    font-size:10px;

    font-weight:700;

    letter-spacing:.3px;

}

.badge{

    min-width:24px;

    height:24px;

    padding:0 8px;

    display:flex;

    justify-content:center;

    align-items:center;

    border-radius:999px;

    background:#2563eb;

    color:white;

    font-size:11px;

    font-weight:700;

}

.menu-item.active .badge{

    background:white;

    color:#2563eb;

}

/* ====================== */

@media(max-width:768px){

.menu-item{

    min-height:58px;

    padding:10px 14px;

}

.icon-wrapper{

    width:42px;

    height:42px;

}

.icon{

    font-size:20px;

}

.title{

    font-size:14px;

}

}

</style>