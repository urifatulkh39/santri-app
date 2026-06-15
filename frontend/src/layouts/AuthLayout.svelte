<script>
    import { APP } from "../lib/constants";
</script>

<svelte:head>

    <title>

        {APP.NAME}

    </title>

</svelte:head>

<div class="auth-layout">

    <div class="background">

        <div class="blob blob-1"></div>

        <div class="blob blob-2"></div>

        <div class="blob blob-3"></div>

    </div>

    <div class="auth-container">

<section class="auth-brand">

    <div class="brand">

        <div class="brand-logo">
            🎓
        </div>

        <span class="brand-tag">
            Modern Islamic School
        </span>

        <h1>
            {APP.NAME}
        </h1>

        <p>
            Sistem manajemen data santri modern untuk
            mengelola informasi, riwayat, dan aktivitas
            pondok secara cepat, aman, dan efisien.
        </p>

    </div>

</section>

<section class="auth-content">

    <div class="auth-card">

        <slot />

    </div>

</section>

    </div>

</div>

<style>

:global(body){

    margin:0;

    font-family:

        Inter,

        system-ui,

        sans-serif;

    background:#0f172a;

}

/* ========================= */

.auth-layout{

    position:relative;

    min-height:100vh;

    overflow:hidden;

    display:flex;

    justify-content:center;

    align-items:center;

    padding:48px;

    background:

        linear-gradient(

            135deg,

            #0f172a,

            #1e3a8a,

            #2563eb

        );

}

/* ========================= */

.background{

    position:absolute;

    inset:0;

    overflow:hidden;

}

.blob{

    position:absolute;

    border-radius:999px;

    filter:blur(80px);

    opacity:.35;

    animation:float 16s ease-in-out infinite;

}

.blob-1{

    width:420px;

    height:420px;

    background:#60a5fa;

    top:-80px;

    left:-100px;

}

.blob-2{

    width:340px;

    height:340px;

    background:#3b82f6;

    bottom:-120px;

    right:-80px;

    animation-delay:3s;

}

.blob-3{

    width:220px;

    height:220px;

    background:#93c5fd;

    top:40%;

    left:45%;

    animation-delay:6s;

}

/* ========================= */

.auth-container{

    position:relative;

    z-index:2;

    width:100%;

    max-width:1280px;

    display:grid;

    grid-template-columns:

        1fr

        480px;

    overflow:hidden;

    border-radius:28px;

    background:

        rgba(255,255,255,.08);

    backdrop-filter:blur(20px);

    border:1px solid rgba(255,255,255,.15);

    box-shadow:

        0 40px 80px rgba(0,0,0,.25);

}

/* ========================= */

.auth-brand{

    padding:70px;

    color:white;

    display:flex;

    justify-content:flex-start;

    align-items:flex-start;

}

.brand{

    display:flex;

    flex-direction:column;

    align-items:flex-start;

    width:100%;

}

.brand-logo{

    width:92px;

    height:92px;

    display:flex;

    align-items:center;

    justify-content:center;

    border-radius:24px;

    font-size:46px;

    color:#fff;

    background:rgba(255,255,255,.15);

    backdrop-filter:blur(12px);

    -webkit-backdrop-filter:blur(12px);

    box-shadow:
        inset 0 1px 1px rgba(255,255,255,.18),
        0 12px 30px rgba(0,0,0,.15);

    margin-bottom:28px;

}

.brand-tag{

    display:inline-flex;

    align-items:center;

    justify-content:center;

    padding:8px 16px;

    border-radius:999px;

    background:rgba(255,255,255,.12);

    border:1px solid rgba(255,255,255,.15);

    color:rgba(255,255,255,.9);

    font-size:13px;

    font-weight:500;

    margin-bottom:20px;

}

.auth-brand h1{

    margin:0;

    font-size:44px;

    font-weight:800;

    line-height:1.2;

}

.auth-brand p{

    margin-top:18px;

    line-height:1.9;

    font-size:17px;

    color:rgba(255,255,255,.86);

}

/* ========================= */

.feature-list{

    display:grid;

    grid-template-columns:repeat(2,1fr);

    gap:16px;

    margin-top:40px;

}

.feature-list div{

    padding:14px 18px;

    border-radius:16px;

    background:rgba(255,255,255,.08);

    backdrop-filter:blur(8px);

}

/* ========================= */

.auth-content{

    display:flex;

    justify-content:center;

    align-items:center;

    padding:52px;

    background:rgba(255,255,255,.96);

}

.auth-card{

    width:100%;

    max-width:420px;

}

/* ========================= */

@keyframes float{

    0%{

        transform:

            translate(0,0);

    }

    50%{

        transform:

            translate(40px,-30px);

    }

    100%{

        transform:

            translate(0,0);

    }

}

/* ========================= */

@media(max-width:900px){

.auth-layout{

    padding:20px;

}

.auth-container{

    grid-template-columns:1fr;

}

.auth-brand{

    display:none;

}

.auth-content{

    padding:28px;

}

}

</style>