<script>
    import { createEventDispatcher } from "svelte";

    import HeaderClock from "./HeaderClock.svelte";
    import HeaderProfile from "./HeaderProfile.svelte";

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

<div class="header-actions">
    <HeaderClock />

    <HeaderProfile
        name={user.name}
        role={user.role}
        avatar={user.avatar}
        online={user.online}
        on:profile={handleProfile}
        on:logout={handleLogout}
    />
</div>

<style>
.header-actions{
    display:flex;
    align-items:center;
    justify-content:flex-end;
    gap:16px;

    flex-shrink:0;
}

@media (max-width:900px){
    .header-actions{
        gap:12px;
    }
}

@media (max-width:640px){
    .header-actions{
        margin-left:auto;
    }
}
</style>