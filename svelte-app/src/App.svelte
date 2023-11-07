<script>
    let fruits = [
        { id: 1, name: "Apple" },
        { id: 2, name: "Banana" },
        { id: 3, name: "Cherry" },
        { id: 4, name: "Apple" },
        { id: 5, name: "Orange" },
    ];
    let todos = [];
    let fruits2D = [
        [1, "Apple"],
        [2, "Banana"],
        [3, "Cherry"],
        [4, "Orange"],
    ];

    let user = {
        name: "Heropy",
        age: 85,
        email: "thesecon@gmail.com",
    };
</script>

<section>
    <h2>기본</h2>
    <!-- {#each 배열 as 속성} {/each} -->
    {#each fruits as fruit}
        <div>{fruit.name}</div>
    {/each}
</section>

<section>
    <h2>순서(index)</h2>
    <!-- {#each 배열 as 속성, 순서} {/each} -->
    {#each fruits as fruit, index}
        <div>{index} / {fruit.name}</div>
    {/each}
</section>

<!-- 반복 블럭을 작성할 때는 key를 사용하는 것을 권장 -->
<section>
    <h2>아이템 고유화(key)</h2>
    <!-- {#each fruits as fruit, index (fruit.id)} {/each} -->
    {#each fruits as fruit, index (fruit.id)}
        <div>{index} / {fruit.name}</div>
    {/each}
</section>

<section>
    <h2>빈 배열 처리(else)</h2>
    <!-- {#each} {:else} {/each} -->
    {#each todos as todo (todo.id)}
        <div>{todo.name}</div>
    {:else}
        <div>아이템이 없어요!</div>
    {/each}
</section>

<section>
    <h2>구조 분해(destructuring)</h2>
    <!-- {#each 배열 as {id, name}} {/each} -->
    {#each fruits as { id, name } (id)}
        <div>{name}</div>
    {/each}
</section>

<section>
    <h2>2차원 배열</h2>
    <!-- {#each 배열 as [id, name]} {/each} -->
    {#each fruits2D as [id, name] (id)}
        <div>{name}</div>
    {/each}
</section>

<section>
    <h2>나머지 연산자(rest)</h2>
    <!-- {#each 배열 as {id, ...rest}} {/each} -->
    {#each fruits as { id, ...rest } (id)}
        <div>{rest.name}</div>
    {/each}
</section>

<section>
    <h2>객체 데이터</h2>
    <!-- 객체를 배열 형식으로 변환 -->
    {#each Object.entries(user) as [key, value] (key)}
        <div>{key}: {value}</div>
    {/each}
</section>
