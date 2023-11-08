<script>
    import { onMount } from "svelte";
    import Heropy from "./Heropy.svelte";

    let heropy;

    onMount(() => {
        console.log(heropy);
        console.log(heropy.title);
    });
</script>

<Heropy title="Good~" bind:this={heropy} />
