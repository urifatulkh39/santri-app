<script>
    export let columns = [];
    export let data = [];

    export let loading = false;

    export let hover = true;

    export let striped = false;

    export let bordered = true;

    $: tableClass = [
        "table",
        hover ? "hover" : "",
        striped ? "striped" : "",
        bordered ? "bordered" : ""
    ]
        .filter(Boolean)
        .join(" ");
</script>

<div class="table-wrapper">

    <table class={tableClass}>

        <thead>

            <tr>

                {#each columns as column}

                    <th>

                        {column.label}

                    </th>

                {/each}

            </tr>

        </thead>

        <tbody>

            {#if loading}

                <tr>

                    <td colspan={columns.length}>

                        <div class="state loading">

                            <div class="loader"></div>

                            <span>

                                Memuat data...

                            </span>

                        </div>

                    </td>

                </tr>

            {:else if data.length === 0}

                <tr>

                    <td colspan={columns.length}>

                        <div class="state empty">

                            <div class="empty-icon">

                                📂

                            </div>

                            <h4>

                                Tidak ada data

                            </h4>

                            <p>

                                Data akan muncul di sini.

                            </p>

                        </div>

                    </td>

                </tr>

            {:else}

                {#each data as row}

                    <tr>

                        {#each columns as column}

                            <td>

                                {#if $$slots.cell}

                                    <slot
                                        name="cell"
                                        row={row}
                                        column={column}
                                    />

                                {:else}

                                    {row[column.key]}

                                {/if}

                            </td>

                        {/each}

                    </tr>

                {/each}

            {/if}

        </tbody>

    </table>

</div>

<style>

.table-wrapper{

    width:100%;

    overflow:auto;

    border-radius:18px;

    background:white;

    border:1px solid #e2e8f0;

    box-shadow:
        0 8px 24px rgba(15,23,42,.05);

}

table{

    width:100%;

    border-collapse:separate;

    border-spacing:0;

}

/* ======================= */

thead{

    position:sticky;

    top:0;

    z-index:10;

    background:#f8fafc;

}

th{

    padding:18px 20px;

    font-size:13px;

    font-weight:700;

    text-transform:uppercase;

    letter-spacing:.04em;

    color:#475569;

    white-space:nowrap;

    border-bottom:1px solid #e2e8f0;

}

th:first-child{

    border-top-left-radius:18px;

}

th:last-child{

    border-top-right-radius:18px;

}

/* ======================= */

td{

    padding:18px 20px;

    font-size:14px;

    color:#334155;

    border-bottom:1px solid #f1f5f9;

    transition:.2s;

}

/* ======================= */

.hover tbody tr:hover{

    background:#f8fbff;

}

.hover tbody tr:hover td{

    color:#0f172a;

}

.striped tbody tr:nth-child(even){

    background:#fafcff;

}

/* ======================= */

.bordered td{

    border-right:1px solid #f1f5f9;

}

.bordered td:last-child{

    border-right:none;

}

/* ======================= */

tbody tr:last-child td{

    border-bottom:none;

}

/* ======================= */

.state{

    min-height:220px;

    display:flex;

    flex-direction:column;

    justify-content:center;

    align-items:center;

    gap:14px;

    color:#64748b;

}

.state h4{

    margin:0;

    color:#334155;

    font-size:18px;

}

.state p{

    margin:0;

    font-size:14px;

}

.empty-icon{

    font-size:46px;

}

/* ======================= */

.loading{

    gap:18px;

}

.loader{

    width:36px;

    height:36px;

    border-radius:50%;

    border:3px solid #dbeafe;

    border-top-color:#2563eb;

    animation:spin .8s linear infinite;

}

/* ======================= */

@keyframes spin{

    to{

        transform:rotate(360deg);

    }

}

/* ======================= */

@media(max-width:768px){

th{

    padding:14px;

    font-size:12px;

}

td{

    padding:14px;

    font-size:13px;

}

.state{

    min-height:180px;

}

.empty-icon{

    font-size:36px;

}

}

</style>