<script>
    import {user} from './store'
    console.log($user)
</script>

<button on:click={()=>{
    $user.name = 'Neo'
}}>
Click!</button>

<h2>{$user.name}</h2>