<script>
    import { get } from "svelte/store";

    import Card from "../../../components/ui/Card.svelte";
    import Input from "../../../components/ui/Input.svelte";
    import Button from "../../../components/ui/button.svelte";

    import { Eye, EyeOff, ShieldCheck } from "lucide-svelte";

    import { authStore } from "../../../stores/auth.store";
    import { authService } from "../services/auth.service";

    let username = "";
    let password = "";

    let error = "";

    let showPassword = false;

    async function handleLogin() {

        error = "";

        if (!username.trim()) {

            error = "Username wajib diisi.";

            return;

        }

        if (!password.trim()) {

            error = "Password wajib diisi.";

            return;

        }

        try {

            const result = await authService.login({

                username,

                password,

            });

            if (!result.success) {

                error =
                    result.message ||
                    "Username atau password salah.";

            }

        } catch (err) {

            console.error(err);

            error =
                err.response?.data?.message ||
                "Tidak dapat terhubung ke server.";

        }

    }

    function handleSubmit(event) {

        event.preventDefault();

        handleLogin();

    }
</script>

<Card
    shadow="xl"
    padding="lg"
    class="login-card"
>

    <div slot="header">

        <div class="header">

            <div class="logo">
    <ShieldCheck size={30}/>
</div>

<h2>Welcome Back</h2>

<p>
    Login untuk mengakses dashboard
    Santri Management System.
</p>

        </div>

    </div>

    <form on:submit={handleSubmit}>

        <Input
            label="Username"
            icon="👤"
            placeholder="Masukkan username"
            bind:value={username}
            autocomplete="username"
        />

        <div class="password-wrapper">

            <Input
                type={showPassword ? "text" : "password"}
                label="Password"
                icon="🔒"
                placeholder="Masukkan password"
                bind:value={password}
                autocomplete="current-password"
            />
            
            <button
                type="button"
                class="toggle-password"
                aria-label={showPassword ? "Hide password" : "Show password"}
                on:click={() => showPassword = !showPassword}
            >

                {#if showPassword}

                    <EyeOff
                        size={18}
                        strokeWidth={2}
                    />

                {:else}

                    <Eye
                        size={18}
                        strokeWidth={2}
                    />

                {/if}

            </button>

        </div>

        {#if error}

            <div class="error">

                <div class="error-title">

                    Login Failed

                </div>

                <div class="error-message">

                    {error}

                </div>

            </div>

        {/if}

        <Button
            type="submit"
            fullWidth
            loading={get(authStore).loading}
        >

            Sign In

        </Button>

    </form>

    <div class="footer">

        <span>

            © 2026 Santri Management System

        </span>

    </div>

</Card>

<style>

:global(body){

    background:
        radial-gradient(
            circle at top,
            #f8fbff,
            #eef4ff 45%,
            #f8fafc 100%
        );

}

:global(.login-card){

    animation:fade .45s ease;

}

.header{

    text-align:center;

    margin-bottom:8px;

}

.logo{

    width:84px;

    height:84px;

    margin:0 auto 22px;

    display:flex;

    align-items:center;

    justify-content:center;

    border-radius:24px;

    color:white;

    background:
        linear-gradient(
            135deg,
            #2563eb,
            #1d4ed8
        );

    box-shadow:
        0 20px 45px
        rgba(37,99,235,.22);

}

.badge{

    display:inline-flex;

    align-items:center;

    justify-content:center;

    padding:7px 18px;

    margin-bottom:16px;

    border-radius:999px;

    background:#eff6ff;

    color:#2563eb;

    font-size:12px;

    font-weight:700;

    letter-spacing:.08em;

}

.header h2{

    margin:0;

    color:#0f172a;

    font-size:30px;

    font-weight:700;

    letter-spacing:-.03em;

}

.header p{

    margin:12px auto 0;

    max-width:280px;

    color:#64748b;

    line-height:1.7;

    font-size:15px;

}

form{

    display:flex;

    flex-direction:column;

    gap:22px;

    margin-top:30px;

}

.password-wrapper{

    position:relative;

}

.toggle-password{

    position:absolute;

    top:44px;

    right:10px;

    width:38px;

    height:38px;

    display:flex;

    align-items:center;

    justify-content:center;

    border:none;

    border-radius:12px;

    background:transparent;

    color:#64748b;

    cursor:pointer;

    transition:
        .25s;

}

.toggle-password:hover{

    background:#f1f5f9;

    color:#2563eb;

}

.toggle-password:focus-visible{

    outline:none;

    background:#dbeafe;

    color:#2563eb;

}

.error{

    padding:15px 18px;

    border-radius:14px;

    border:1px solid #fecaca;

    background:#fff5f5;

}

.error-title{

    font-size:14px;

    font-weight:700;

    color:#dc2626;

    margin-bottom:6px;

}

.error-message{

    font-size:14px;

    color:#b91c1c;

    line-height:1.6;

}

button{

    transition:
        background-color .25s ease,
        color .25s ease,
        border-color .25s ease,
        box-shadow .25s ease,
        transform .18s ease;

}

button:hover{

    transform:translateY(-1px);

}

button:active{

    transform:translateY(0);

}

:global(input){

    transition:
        border-color .25s ease,
        box-shadow .25s ease,
        background-color .25s ease;

}

:global(input:hover){

    border-color:#cbd5e1;

}

:global(input:focus){

    outline:none;

    border-color:#2563eb;

    box-shadow:
        0 0 0 4px
        rgba(37,99,235,.12);

}

.footer{

    margin-top:32px;

    padding-top:22px;

    border-top:1px solid #f1f5f9;

    text-align:center;

}

.footer span{

    font-size:13px;

    color:#94a3b8;

    letter-spacing:.03em;

}

:global(.card){

    position:relative;

    overflow:hidden;

    border:1px solid rgba(226,232,240,.9);

    border-radius:26px;

    background:rgba(255,255,255,.92);

    backdrop-filter:blur(16px);

    -webkit-backdrop-filter:blur(16px);

    box-shadow:
        0 10px 40px rgba(15,23,42,.06),
        0 2px 10px rgba(15,23,42,.04);

}

:global(.card)::before{

    content:"";

    position:absolute;

    inset:0;

    pointer-events:none;

    background:
        linear-gradient(
            180deg,
            rgba(255,255,255,.45),
            transparent 40%
        );

}

.logo{

    position:relative;

    overflow:hidden;

}

.logo::after{

    content:"";

    position:absolute;

    inset:-30%;

    background:
        linear-gradient(
            120deg,
            transparent,
            rgba(255,255,255,.35),
            transparent
        );

    transform:translateX(-140%) rotate(20deg);

    animation:shine 6s infinite;

}

.badge{

    box-shadow:
        inset 0 0 0 1px rgba(37,99,235,.08);

}

.error{

    animation:shake .28s ease;

}

@keyframes fade{

    from{

        opacity:0;

        transform:
            translateY(18px)
            scale(.985);

    }

    to{

        opacity:1;

        transform:
            translateY(0)
            scale(1);

    }

}

@keyframes shine{

    0%{

        transform:
            translateX(-150%)
            rotate(20deg);

    }

    20%{

        transform:
            translateX(150%)
            rotate(20deg);

    }

    100%{

        transform:
            translateX(150%)
            rotate(20deg);

    }

}

@keyframes shake{

    0%{

        transform:translateX(0);

    }

    25%{

        transform:translateX(-4px);

    }

    50%{

        transform:translateX(4px);

    }

    75%{

        transform:translateX(-2px);

    }

    100%{

        transform:translateX(0);

    }

}

@media (max-width:768px){

    .logo{

        width:72px;

        height:72px;

        border-radius:20px;

    }

    .header h2{

        font-size:28px;

    }

    .header p{

        font-size:14px;

        max-width:260px;

    }

    form{

        gap:18px;

    }

}

@media (max-width:480px){

    .logo{

        width:64px;

        height:64px;

    }

    .badge{

        font-size:11px;

        padding:6px 14px;

    }

    .header h2{

        font-size:24px;

    }

    .toggle-password{

        width:34px;

        height:34px;

        top:42px;

    }

    .footer{

        margin-top:26px;

    }

}

</style>