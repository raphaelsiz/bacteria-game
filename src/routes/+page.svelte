<script>
import Guess from './guess.svelte'
export let data;
export let form;
let guesses = form?.guesses || data.guesses;
console.log(guesses)
let properties = form?.properties || data.properties;
let answer = data.answer || {}
</script>

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