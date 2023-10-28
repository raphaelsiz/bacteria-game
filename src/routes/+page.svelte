<script>
    import Table from './table.svelte'
    export let data;
    export let form;
    let guesses = form?.guesses || [];
    let properties = data.properties;
</script>

<style>
    :global(html) {
        height: 100%;
        background-color: #ddd
    }
    form {
        display: inline-block;
        margin-left: auto;
        margin-right: auto;
        text-align: left;
        font-size: 24px;
    }
    input {
        font-size: 24px
    }
    div.container {
        display: block;
        text-align: center;
    }
    .err {
        color: red;
    }
</style>

<div class="container">
    <Table guesses={guesses} properties={properties}/>
    <form method="POST">
        <input name="guess">
        <input type="hidden" name="guesses" value={JSON.stringify(guesses)}>
        <input type="submit" value="Guess">
    </form>
    {#if form?.valid == false}
        <p class="err">Sorry, that species hasn't been documented yet. You can request your favorites <a href="https://github.com/raphaelSiz/bacteria-game/issues">here</a> or <a href="https://github.com/raphaelSiz/bacteria-game/CONTRIBUTING.md">create a pull request</a> with your edits!</p>
    {/if}
    {#if form?.correct}
        <p>Good job! You guessed correctly!</p>
    {/if}
</div>