<script>
    import { onDestroy } from "svelte";
    import { count, name } from "./store";

    let number;
    let userName;

    const unsubscribeCount = count.subscribe((c) => {
        number = c;
    });

    const unsubscribeCount2 = count.subscribe(() => {});
    const unsubscribeName = name.subscribe((n) => {
        userName = n;
    });

    function increase() {
        count.update((c) => {
            return c + 1;
        });
    }

    function chageName() {
        name.update(() => {
            return "Neo";
        });
        name.set("Neo");
    }

    onDestroy(() => {
        unsubscribeCount();
        unsubscribeCount2();
        unsubscribeName();
    });
</script>

<button on:click={increase} on:click={chageName}> Click me!</button>

<h2>{number}</h2>
<h2>{userName}</h2>
