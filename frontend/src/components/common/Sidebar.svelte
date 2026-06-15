<script>
    import { createEventDispatcher } from "svelte";

    import SidebarLogo from "./sidebar/SidebarLogo.svelte";
    import SidebarMenu from "./sidebar/SidebarMenu.svelte";
    import SidebarFooter from "./sidebar/SidebarFooter.svelte";

    export let active = "dashboard";
    export let collapsed = false;

    const dispatch = createEventDispatcher();

    function handleMenuChange(event) {
        dispatch("change", event.detail);
    }

    function handleToggle() {
        dispatch("toggle");
    }
</script>

<aside
    class="sidebar"
    class:collapsed
>
    <SidebarLogo
        {collapsed}
    />

    <SidebarMenu
        {active}
        {collapsed}
        on:change={handleMenuChange}
    />

    <SidebarFooter
        {collapsed}
        on:toggle={handleToggle}
    />
</aside>

<style>
.sidebar{
    width:320px;
    height:100vh;
    display:flex;
    flex-direction:column;
    flex-shrink:0;
    overflow:hidden;
    background:#ffffff;
    border-right:1px solid #e2e8f0;
    transition:
        width .3s ease,
        box-shadow .3s ease;
    box-shadow:
        8px 0 32px rgba(15,23,42,.05);
}

.sidebar.collapsed{
    width:96px;
}

.sidebar :global(.sidebar-menu){
    flex:1;
    overflow-y:auto;
    overflow-x:hidden;
}

.sidebar :global(.sidebar-menu::-webkit-scrollbar){
    width:6px;
}

.sidebar :global(.sidebar-menu::-webkit-scrollbar-thumb){
    background:#cbd5e1;
    border-radius:999px;
}

@media(max-width:1024px){
.sidebar{
    position:fixed;
    inset:0 auto 0 0;
    z-index:1000;
}
}

@media(max-width:768px){
.sidebar{
    width:300px;
}

.sidebar.collapsed{
    width:80px;
}
}
</style>