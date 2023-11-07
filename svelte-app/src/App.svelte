<script>
    import Count from "./Count.svelte";

    let reset = false;
</script>

<!-- 연결된 데이터의 값이 변경될 때마다 내용을 파괴하고 다시 생성합니다. -->
{#key reset}
    <Count />
{/key}

<button
    on:click={() => {
        reset = !reset;
    }}>reset</button
>
