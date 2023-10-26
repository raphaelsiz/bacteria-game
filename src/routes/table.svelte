<script>
    import Guess from './guess.svelte'
    export let properties;
    export let guesses;
</script>

<style>
    table, tr, th {
        border: 1px solid black;
    }
    table {
        border-collapse: collapse;
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
                <th>{property}</th>
            {/each}
        </tr>
        {#each guesses as guess}
            {#if guess}<Guess guess={guess} properties={properties}/>{/if}
        {/each}
    </table>
</div>