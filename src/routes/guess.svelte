<script>
export let guess;
export let properties;
</script>

<style>
tr, td {
    border: 1px solid black;
}
.correct {
    background-color: green
}
.incorrect {
    background-color: red
}
.somewhat {
    background-color: yellow
}
</style>

<tr>
    {#each properties as property}
    <td class={guess[property]?.correct}>{guess[property]?.answer || ""}</td>
    {/each}
</tr>