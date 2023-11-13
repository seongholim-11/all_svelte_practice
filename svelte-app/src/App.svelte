<script>
    let toggle = true;
    let width = 200;

    function hello(node, options = {}) {
        const { width = "100px", height = "100px", color = "tomato" } = options;
        console.log(node);
        node.style.width = width;
        node.style.height = height;
        node.style.background = color || "tomato";

        return {
            update: (opts) => {
                console.log("update!", opts);
                node.style.width = opts.width;
            },
            destroy: () => {
                console.log("destroy!");
            },
        };
    }
</script>

<button on:click={() => (toggle = !toggle)}>Toggle</button>
<button on:click={() => (width += 20)}>SizeUp</button>

<div use:hello />
{#if toggle}<div
        use:hello={{
            width: `${width}px`,
            height: "70px",
            color: "royalblue",
        }}
    />{/if}
