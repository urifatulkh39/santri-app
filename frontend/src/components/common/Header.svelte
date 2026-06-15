<script>
    import { createEventDispatcher } from "svelte";

    import HeaderTitle from "./header/HeaderTitle.svelte";
    import HeaderActions from "./header/HeaderActions.svelte";

    export let title = "Dashboard";
    export let subtitle = "Selamat datang kembali";
    export let breadcrumb = "Dashboard";

    export let user = {
        name: "Administrator",
        role: "Super Admin",
        avatar: "",
        online: true,
    };

    const dispatch = createEventDispatcher();

    function handleProfile() {
        dispatch("profile");
    }

    function handleLogout() {
        dispatch("logout");
    }
</script>

<header class="header">
    <HeaderTitle
        {title}
        {subtitle}
        {breadcrumb}
    />

    <HeaderActions
        {user}
        on:profile={handleProfile}
        on:logout={handleLogout}
    />
</header>

<style>
.header{
    position:sticky;
    top:0;
    z-index:100;

    display:flex;
    justify-content:space-between;
    align-items:center;

    gap:24px;

    min-height:76px;
    padding:18px 28px;

    background:rgba(255,255,255,.88);
    backdrop-filter:blur(18px);

    border-bottom:1px solid #e2e8f0;
}

@media (max-width:900px){
    .header{
        padding:16px 20px;
    }
}

@media (max-width:640px){
    .header{
        gap:16px;
        padding:14px 16px;
        flex-direction:column;
        align-items:flex-start;
    }

    :global(.header-actions){
        width:100%;
        justify-content:flex-end;
    }
}
</style>