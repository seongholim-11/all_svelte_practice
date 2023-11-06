<script>
    import Fruits from './Fruits.svelte'
</script>

<h2>App.svelte</h2>
<ul class="fruits">
    <li>Apple</li>
    <li>Banana</li>
    <li>Cherry</li>
</ul>

<Fruits/>

<style>
    .fruits{
        color: red;
    }

    /*
        사용하지 않은 style은 svelte bundle에서 제외되지만,
        global를 사용하면 제외되지 않음
    */
    :global(.heropy){
        color: orange
    }
</style>