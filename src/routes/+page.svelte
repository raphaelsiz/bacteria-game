<script>
    import Table from './table.svelte'
    export let data;
    export let form;
    let guesses = form?.guesses || [];
    console.log(guesses)
    let properties = data.properties;
    let answer = data.answer || {}
</script>

<style>
    form {
        display: inline-block;
        margin-left: auto;
        margin-right: auto;
        text-align: left;
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
        <input type="submit" value="Guess">
    </form>
    {#if form?.valid == false}
        <p class="err">Sorry, that species hasn't been documented yet. You can request your favorites <a href="https://github.com/raphaelSiz/bacteria-game/issues">here</a> or <a href="https://github.com/raphaelSiz/bacteria-game/CONTRIBUTING.md">create a pull request</a> with your edits!</p>
    {/if}
</div>