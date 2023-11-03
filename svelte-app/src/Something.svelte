<script>
    import { onMount, onDestroy } from "svelte";

    onMount(() => {
        console.log("Mounted!");
        return () => {
            console.log('Destroy in mount')
        }
    });

    onDestroy(()=>{
        console.log("Destroy!");
        
    })
</script>

<h1>Something</h1>
