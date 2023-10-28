<script>
    export let guess;
    export let properties;
    function switchVal(val) {
        switch (val) {
            case "TRUE":
            case "true":
                return "+";
                break;
            case "FALSE":
            case "FALSE":
                return "-"
                break;
            default:
                return val;
        }
    }
</script>

<style>
    .correct {
        background-color: #1e6b13
    }
    .incorrect {
        background-color: #962317
    }
    .somewhat {
        background-color: #ebc934;
        color: black
    }
</style>

<tr class={($$restProps.class || '')}>
    {#each properties as property}
        <td class="{guess[property]?.correct} {($$restProps.class || '')}">{switchVal(guess[property]?.answer || "")}</td>
    {/each}
</tr>