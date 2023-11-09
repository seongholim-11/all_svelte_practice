<script>
    export let value;
    export let color;
    // $$props
    // export 처럼 명시한 프롭스도 포함
    // $$restProps
    // export 처럼 명시한 프롭스도 불포함
</script>

<div class="my-custom-input">
    <input bind:value {...$$props} style="color: {color}"/>
</div>

<style>
    .my-custom-input input {
        border-radius: 100px;
        padding: 10px 20px;
    }
</style>