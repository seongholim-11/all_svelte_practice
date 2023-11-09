<script>
    import TextField from "./TextField.svelte";

    let id = "";
    let pw = "";
</script>

<TextField bind:value={id} type="email" placeholder="ID!" maxlength="10" required color="yellow"/>
<TextField bind:value={pw} type="password" placeholder="PW!" required color="red"/>
