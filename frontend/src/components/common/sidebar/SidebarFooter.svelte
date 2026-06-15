<script>
    import { createEventDispatcher } from "svelte";

    export let collapsed = false;

    const dispatch = createEventDispatcher();

    function toggleSidebar() {
        dispatch("toggle");
    }
</script>

<div class="sidebar-footer">

    <button
        class="collapse-button"
        on:click={toggleSidebar}
        aria-label="Toggle Sidebar"
    >

        <span class="icon">

            {#if collapsed}

                ➜

            {:else}

                ◀

            {/if}

        </span>

        {#if !collapsed}

            <span>

                Collapse Sidebar

            </span>

        {/if}

    </button>

</div>

<style>

.sidebar-footer{

    padding:20px;

    border-top:1px solid rgba(226,232,240,.8);

    background:rgba(255,255,255,.55);

    backdrop-filter:blur(18px);

}

/* ====================== */

.collapse-button{

    width:100%;

    height:52px;

    border:none;

    border-radius:16px;

    cursor:pointer;

    display:flex;

    align-items:center;

    justify-content:center;

    gap:12px;

    font-size:14px;

    font-weight:600;

    color:#334155;

    background:#f8fafc;

    transition:

        background .25s,

        transform .2s,

        box-shadow .25s;

}

.collapse-button:hover{

    background:#eff6ff;

    color:#2563eb;

    transform:translateY(-2px);

    box-shadow:

        0 10px 24px rgba(37,99,235,.12);

}

.collapse-button:active{

    transform:scale(.98);

}

/* ====================== */

.icon{

    width:34px;

    height:34px;

    border-radius:10px;

    display:flex;

    align-items:center;

    justify-content:center;

    background:white;

    box-shadow:

        inset 0 0 0 1px #e2e8f0;

    font-size:16px;

    flex-shrink:0;

}

/* ====================== */

@media(max-width:768px){

.sidebar-footer{

    padding:16px;

}

.collapse-button{

    height:48px;

}

}

</style>