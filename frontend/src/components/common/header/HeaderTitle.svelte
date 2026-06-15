<script>
    export let title = "Dashboard";
    export let subtitle = "Selamat datang kembali";
    export let breadcrumb = "Dashboard";
</script>

<div class="header-title">
    <span class="breadcrumb">
        {breadcrumb}
    </span>

    <h1>
        {title}
    </h1>

    <p>
        {subtitle}
    </p>
</div>

<style>
.header-title{
    display:flex;
    flex-direction:column;
    justify-content:center;
    min-width:0;
}

.breadcrumb{
    display:inline-flex;
    align-items:center;
    width:max-content;
    padding:4px 12px;
    margin-bottom:8px;

    border-radius:999px;

    background:#eff6ff;
    color:#2563eb;

    font-size:12px;
    font-weight:600;
    letter-spacing:.02em;
}

h1{
    margin:0;

    color:#0f172a;

    font-size:28px;
    font-weight:700;
    line-height:1.2;

    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}

p{
    margin:6px 0 0;

    color:#64748b;

    font-size:14px;
    line-height:1.5;

    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}

@media (max-width:768px){

    .breadcrumb{
        font-size:11px;
        padding:4px 10px;
        margin-bottom:6px;
    }

    h1{
        font-size:22px;
    }

    p{
        font-size:13px;
    }

}

@media (max-width:480px){

    .breadcrumb{
        display:none;
    }

    h1{
        font-size:20px;
    }

    p{
        display:none;
    }

}
</style>