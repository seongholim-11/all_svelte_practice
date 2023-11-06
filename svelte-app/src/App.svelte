<script>
    let innerHTML = ''
    let textContent = 'Hello World!'
</script>

<div contenteditable bind:innerHTML bind:textContent>
    
</div>

<div>{innerHTML}</div>
<div>{textContent}</div>
<div>{@html innerHTML}</div>

<style>
    div{
        border: 1px solid black;
        margin-bottom: 10px;
    }
</style>