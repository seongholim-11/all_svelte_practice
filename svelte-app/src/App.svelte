<script>
    import { tick } from "svelte";

    let count = 0;
    let double = 0;
    $: {
        double = count * 2;
        console.log("double!");
    }

    // 반응성 구문 내의 값이 변경된 후 대기 로직이 처리되고 화면이 갱신되어야
    // 그 때 '반응성 구문'이 실행됨
    // 즉, ssign 함수가 모두 실행되고나서 처리됨.
    // $: double = count * 2

    // count 증가 -> tick 실행 -> 화면이 갱신될 때까지 -> 
    // 화면이 갱신되면 반응성구문 실행 -> double 증가 -> double값 출력
    async function assign() {
        count += 1;
        console.time("timer");
        await tick();
        console.timeEnd("timer");
        console.log(double);
    }
</script>

<button on:click={assign}>Assign!</button>

<h2>{count}</h2>
<h2>{double}</h2>
