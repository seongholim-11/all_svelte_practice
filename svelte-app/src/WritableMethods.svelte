<script>
    import { count, name } from "./store";

    function increase() {
        $count += 1
    }

    function chageName() {
        $name = 'Neo'
    }
</script>

<button on:click={increase} on:click={chageName}> Click me!</button>

<h2>{$count}</h2>
<h2>{$name}</h2>
