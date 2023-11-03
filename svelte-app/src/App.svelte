<script>
    let name = "Heropy";
    let index = 0;
</script>

{@debug index, name}
<h1
    on:click={() => {
        index += 1;
    }}
>
    Hello {name}!~
</h1>
