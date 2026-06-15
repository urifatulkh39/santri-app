<script>
    import { onMount } from "svelte";

    let date = "";
    let time = "";

    function updateClock() {
        const now = new Date();

        date = now.toLocaleDateString("id-ID", {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric",
        });

        time = now.toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
        });
    }

    onMount(() => {
        updateClock();

        const interval = setInterval(updateClock, 1000);

        return () => clearInterval(interval);
    });
</script>

<div class="clock">
    <span class="date">
        {date}
    </span>

    <strong class="time">
        {time}
    </strong>
</div>

<style>
.clock{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-end;

    min-width:180px;

    padding:8px 16px;

    border:1px solid #e2e8f0;
    border-radius:14px;

    background:#ffffff;

    transition:
        border-color .2s ease,
        box-shadow .2s ease;
}

.clock:hover{
    border-color:#cbd5e1;
    box-shadow:0 8px 24px rgba(15,23,42,.06);
}

.date{
    color:#64748b;
    font-size:12px;
    font-weight:500;
    line-height:1.3;

    white-space:nowrap;
}

.time{
    margin-top:2px;

    color:#0f172a;
    font-size:20px;
    font-weight:700;
    line-height:1.2;

    font-variant-numeric:tabular-nums;
    letter-spacing:.04em;
}

@media (max-width:900px){
    .clock{
        display:none;
    }
}
</style>