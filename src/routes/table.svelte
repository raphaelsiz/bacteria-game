<script>
    import Guess from './guess.svelte'
    export let properties;
    export let guesses;
</script>

<style>
    table, tr, .table :global(.testing) {
        border: 1px solid black;
    }
    table {
        border-collapse: collapse;
        background-color: #333;
        color: #eee;
        font-size: 24px
    }
    th {
        border: 1px solid #ddd;
        padding-left: 10px;
        padding-right: 10px
    }
    .table {
        border: 2px solid black;
        border-radius: 7px;
        overflow: hidden;
        margin: auto;
        width: fit-content;
    }

</style>


<div class="table">
    <table>
        <tr>
            {#each properties as property}
                <th class="{$$restProps.class || ''}">{property}</th>
            {/each}
        </tr>
        {#each guesses as guess}
            {#if guess}<Guess class="testing" guess={guess} properties={properties}/>{/if}
        {/each}
    </table>
</div>