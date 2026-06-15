<script>
    import { createEventDispatcher } from "svelte";

    import Sidebar from "../components/common/Sidebar.svelte";
    import Header from "../components/common/Header.svelte";

    export let currentMenu = "dashboard";
    export let pageTitle = "Dashboard";
    export let pageSubtitle = "Selamat datang kembali";

    let sidebarCollapsed = false;

    const dispatch = createEventDispatcher();

    function handleToggleSidebar() {
        sidebarCollapsed = !sidebarCollapsed;
    }

    function handleMenuChange(event) {
        dispatch("navigate", event.detail);
    }

    function handleLogout() {
        dispatch("logout");
    }
</script>

<div class="dashboard-layout">
    <Sidebar
        active={currentMenu}
        collapsed={sidebarCollapsed}
        on:toggle={handleToggleSidebar}
        on:change={handleMenuChange}
        on:logout={handleLogout}
    />

    <div class="dashboard-content">
        <Header
            title={pageTitle}
            subtitle={pageSubtitle}
            on:toggle={handleToggleSidebar}
            on:logout={handleLogout}
        />

        <main class="page-content">
            <slot />
        </main>
    </div>
</div>

<style>
:global(html),
:global(body),
:global(#app) {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

:global(*) {
    box-sizing: border-box;
}

:global(body) {
    overflow: hidden;
    font-family: Inter, system-ui, sans-serif;
    background: #f8fafc;
}

.dashboard-layout {
    position: fixed;
    inset: 0;
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: #f8fafc;
}

.dashboard-content {
    flex: 1;
    min-width: 0;
    min-height: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.page-content {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 32px;
    width: 100%;
}

@media (max-width: 768px) {
    .page-content {
        padding: 20px;
    }
}
</style>