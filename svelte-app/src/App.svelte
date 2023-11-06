<script>
    let count = 0;

    // 선언
    $: double = count * 2;

    // 블록
    // 반응성 데이터가 있어야 함.
    $: {
        console.log(count);
        console.log(double);
    }

    // 함수 실행
    // count 변수가 변경되면 log()를 실행
    $: count, log();

    // 즉시 실행 함수(IIFE)
    $: count,
        (() => {
            console.log("iife: Heropy");
        })();

    // 조건문(if)
    $: if(count > 0) {
        console.log('if:', double)
    }

    // 반복문(for)
    $: for(let i = 0; i < 3; i += 1){
        count
        console.log('for:', i)
    }

    // 조건문(Switch)
    $: switch(count){
        case 1:
            console.log('switch: 1')
            break
        default:
            console.log('switch: default')
    }

    // 유효범위
    // 반응성 구문 내부에 반응성 변수가 어떤 방식이든 포함이 되어 있으면 실행
    $: {
        function scope1(){
            console.log('scope1')
            function scope2(){
                console.log('scope2')
                function scope3(){
                    console.log('scope3', count)
                }
                scope3()
            }
            scope2()
        }
        scope1()
    }

    function log() {
        console.log("fn: Heropy!");
    }
    function assign() {
        count += 1;
    }
</script>

<button on:click={assign}>Assign!</button>
