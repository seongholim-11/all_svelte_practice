<script>
    import { tick } from "svelte";
    let isShow = false;
    let inputEl

    async function toggle() {
        isShow = !isShow;
        await tick();
        // const inputEl = document.querySelector("input");
        // 검색보다는 직접 바인딩하는 것이 성능에 좋음
        inputEl && inputEl.focus();
    }
</script>

<button on:click={toggle}>Edit!</button>

{#if isShow}
    <!-- 요소 바인딩, 양방향 바인딩 -->
    <input bind:this={inputEl}/>
{/if}
