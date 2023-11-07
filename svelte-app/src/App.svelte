<script>
    // let promise = new Promise(resolve => resolve('Hmm...'));
    let promise = Promise.resolve("Hmm...");
    let isError = true;

    function fetchName() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Heropy");
            }, 0);
        });
    }
</script>

<button
    on:click={() => {
        promise = fetchName();
    }}
>
    Fetch name!</button
>

{#await promise then name}
    <!-- 이행(Fulfilled) -->
    <h1>{name}</h1>
{/await}
