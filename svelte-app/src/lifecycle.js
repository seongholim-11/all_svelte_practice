import { onMount, onDestroy, beforeUpdate, afterUpdate } from "svelte";
import { Writable, writable } from "svelte/store";

export function lifecycle() {
    onMount(() => {
        console.log("Mounted!");
    });
    onDestroy(() => {
        console.log("Destroy!");
    });
    beforeUpdate(() => {
        console.log("Before Update!");
    });
    afterUpdate(() => {
        console.log("After Update!");
    });
}

export function delayRender(delay = 3000) { // ms
    let render = writable(false);
    onMount(() => {
        setTimeout(() => {
            // $render = true;
            console.log(render) // set, update, subscribe
            render.set(true)
        }, delay);
    });
    return render;
}
