<script>
export let guess;
export let properties;
</script>
<tr>
    {#each properties as property}
    <td>{guess[property] || ""}</td>
    {/each}
</tr>