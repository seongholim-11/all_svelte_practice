// JS 데이터 불변성

let a = 1;
let b = a;

console.log(a); // 1
console.log(b); // 1

a = 2;

console.log(a); // 1
console.log(b); // 1

// JS 데이터 가변성

let c = { k: 1 };
let d = c;

console.log(c); // {k:1}
console.log(d); // {k:1}

c.k = 2;

console.log(c); // {k:2}
console.log(d); // {k:2}

// JS 전개연산자

let e = { k: 1 };
let f = { ...a };

console.log(e); // {k:1}
console.log(f); // {k:1}

e.k = 2;

console.log(e); // {K:2}
console.log(f); // {K:1}

// 얕은 복사, 깊은 복사

let g = { k: 1, o: { p: 2 } };
let h = { ...g };

console.log(g) // { k: 1, o: { p: 2 } }
console.log(h) // { k: 1, o: { p: 2 } }

g.k = 9

console.log(g) // { k: 9, o: { p: 2 } }
console.log(h) // { k: 1, o: { p: 2 } }

g.o.p = 7

console.log(g) // { k: 9, o: { p: 7 } }
console.log(h) // { k: 1, o: { p: 2 } }