<script>
    import { onMount, onDestroy } from "svelte";
    import { Chart, registerables } from "chart.js";

    import Card from "../../../components/ui/Card.svelte";
    import { dashboardStore } from "../../../stores/dashboard.store";

    Chart.register(...registerables);

    let canvas;
    let chart;

    $: stats = $dashboardStore.stats;

    function renderChart() {
        if (!canvas) return;

        if (chart) {
            chart.destroy();
        }

        chart = new Chart(canvas, {
            type: "bar",
            data: {
                labels: [
                    "Aktif",
                    "Lulus",
                    "Keluar",
                    "Nonaktif"
                ],
                datasets: [
                    {
                        label: "Jumlah Santri",
                        data: [
                            stats.aktif,
                            stats.lulus,
                            stats.keluar,
                            stats.nonaktif
                        ],
                        backgroundColor: [
                            "#22C55E",
                            "#2563EB",
                            "#EF4444",
                            "#94A3B8"
                        ],
                        borderRadius: 10,
                        borderSkipped: false
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,

                plugins: {
                    legend: {
                        display: false
                    }
                },

                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            precision: 0
                        }
                    }
                }
            }
        });
    }

    onMount(() => {
        renderChart();
    });

    $: if (canvas) {
        renderChart();
    }

    onDestroy(() => {
        chart?.destroy();
    });
</script>

<Card
    title="Statistik Santri"
    subtitle="Distribusi status santri"
    fullHeight
>

    <div class="chart-container">

        <canvas bind:this={canvas}></canvas>

    </div>

</Card>

<style>

.chart-container{

    width:100%;

    height:360px;

    position:relative;

}

</style>