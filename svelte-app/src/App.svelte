<script>
    import Something from "./Something.svelte";
    import { lifecycle, delayRender } from "./lifecycle";

    let done = delayRender();
    lifecycle();
</script>

{#if $done}
    <h1>Hello Lifecycle!</h1>
{/if}

<Something />
