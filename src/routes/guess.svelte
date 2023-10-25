<script>
export let guess;
export let properties;
</script>

<style>
tr, td {
    border: 1px solid black;
}
</style>

<tr>
    {#each properties as property}
    <td>{guess[property] || ""}</td>
    {/each}
</tr>