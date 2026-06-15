<script>
    import { createEventDispatcher } from "svelte";

    export let name = "Administrator";
    export let role = "Super Admin";
    export let avatar = "";
    export let online = true;

    const dispatch = createEventDispatcher();

    $: initials = name
        .trim()
        .split(/\s+/)
        .map((word) => word[0])
        .join("")
        .substring(0, 2)
        .toUpperCase();

    function handleClick() {
        dispatch("profile");
    }

    function handleLogout() {
        dispatch("logout");
    }

    function handleKeydown(event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            handleClick();
        }
    }
</script>

<div
    class="profile"
    role="button"
    tabindex="0"
    aria-label="Profile"
    on:click={handleClick}
    on:keydown={handleKeydown}
>
    <div class="avatar">
        {#if avatar}
            <img
                src={avatar}
                alt={name}
            />
        {:else}
            <span>{initials}</span>
        {/if}

        {#if online}
            <span class="status"></span>
        {/if}
    </div>

    <div class="info">
        <strong>{name}</strong>
        <small>{role}</small>
    </div>

    <button
        class="logout"
        type="button"
        aria-label="Logout"
        title="Logout"
        on:click|stopPropagation={handleLogout}
    >
        <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M15 3H9C7.9 3 7 3.9 7 5V19C7 20.1 7.9 21 9 21H15"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />

            <path
                d="M10 12H21"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
            />

            <path
                d="M18 9L21 12L18 15"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>

        <span>Logout</span>
    </button>
</div>

<style>
.profile{
    display:flex;
    align-items:center;
    gap:14px;

    padding:10px 14px;

    background:#ffffff;

    border:1px solid #e2e8f0;
    border-radius:16px;

    cursor:pointer;

    transition:
        background .25s ease,
        border-color .25s ease,
        box-shadow .25s ease,
        transform .25s ease;
}

.profile:hover{
    background:#f8fafc;
    border-color:#cbd5e1;
    box-shadow:0 10px 28px rgba(15,23,42,.08);
}

.profile:focus-visible{
    outline:3px solid rgba(59,130,246,.25);
    outline-offset:3px;
}

.avatar{
    position:relative;

    width:48px;
    height:48px;

    flex-shrink:0;

    display:flex;
    align-items:center;
    justify-content:center;

    overflow:hidden;

    border-radius:50%;

    background:linear-gradient(
        135deg,
        #3b82f6,
        #2563eb
    );

    color:#ffffff;

    font-size:16px;
    font-weight:700;
}

.avatar img{
    width:100%;
    height:100%;
    object-fit:cover;
}

.status{
    position:absolute;

    right:2px;
    bottom:2px;

    width:12px;
    height:12px;

    border-radius:50%;

    background:#22c55e;
    border:2px solid #ffffff;
}

.info{
    display:flex;
    flex-direction:column;

    min-width:0;
}

.info strong{
    color:#0f172a;

    font-size:14px;
    font-weight:700;

    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}

.info small{
    margin-top:3px;

    color:#64748b;

    font-size:12px;

    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}

.logout{
    margin-left:8px;

    display:flex;
    align-items:center;
    gap:8px;

    height:42px;
    padding:0 16px;

    flex-shrink:0;

    border:none;
    border-radius:12px;

    background:#ef4444;
    color:#ffffff;

    font-size:14px;
    font-weight:600;

    cursor:pointer;

    transition:
        background .2s ease,
        transform .2s ease,
        box-shadow .2s ease;
}

.logout:hover{
    background:#dc2626;
    transform:translateY(-1px);
    box-shadow:0 8px 20px rgba(239,68,68,.28);
}

.logout:active{
    transform:translateY(0);
}

.logout svg{
    width:18px;
    height:18px;

    flex-shrink:0;
}

@media (max-width:768px){

    .profile{
        padding:8px 10px;
        gap:10px;
    }

    .info{
        display:none;
    }

    .logout{
        width:40px;
        height:40px;

        padding:0;

        justify-content:center;
    }

    .logout span{
        display:none;
    }

}

@media (max-width:480px){

    .profile{
        padding:6px 8px;
    }

    .avatar{
        width:42px;
        height:42px;
    }

}
</style>