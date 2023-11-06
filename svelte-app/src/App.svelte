<script>
    let name = 'Heropy'
    let fruits = ['Apple', 'Banana', 'Cherry']
    let user = {
        name: 'Heropy',
        depth: {
            a: 'b'
        },
        numbers: [1, 2]
    }
    // assign 함수 내부에서 할당연산자를 사용하지 않았기 때문에 반응성을 가지지 못함
    let numbers = user.numbers
    // 보간법을 사용할 때는 스크립트 태그의 최상위에서만 변수를 선언
    let hello = 'world'

    function assign() {
        // svelte는 할당 연산자를 통한 변화만 반응성을 가짐
        name = 'Neo'
        // fruits.push('Orange')
        // fruits = fruits
        fruits = [...fruits, 'Orange']
        // $$invalidate(2(실행순서), user.name="Neo"(갱신 코드), user(갱신 데이터))
        // $$incalidate(2, user.depth.a ='c', user)
        // 객체 내부의 데이터가 갱신되더라도 user 전체가 갱신됨.
        // await tick() 반응성을 가지는 데이터가 갱신되면 실제 화면이 갱신될 때까지 기다림
        user.name = 'Neo'
        user.depth.a = 'c'
        // 아래 코드는 할당 연산자가 없기 때문에 위 코드들이 없으면 갱신되지 않음
        user.numbers.push(3)
        numbers = numbers
    }
</script>

<button on:click={assign}>Assign!</button>

<h2>name: {name}</h2>
<h2>fruits: {fruits}</h2>
<h2>user name: {user.name}</h2>
<h2>user depth a: {user.depth.a}</h2>
<h2>user numbers: {user.numbers}</h2>
<h2>numbers: {numbers}</h2>
<h2>{hello}</h2>