const n = 5;
const s = "5";

n === s; //false 타입이 다르다
n === Number(s); //숫자형이므로 true
n == s; //true이지만 권장되지 않는다

const a = { name: "object"};
const b = { name: "object"};

a === b //false 객체는 항상 다르다
a == b //false

NaN === NaN //false

//아래 식은 무한루프다
let n = 0;
while(true) {
    n += 0.1;
    if (n === 0.3) break;
}
console.log(`stopped at ${n}`);

//EPSILON + 관계연산을 통해 무한루프에서 빠져나갈수 있다
while(true) {
    n += 0.1;
    if (Math.abs(n - 0.3)< Number.EPSILON) break;
}
console.log(`stopped at ${n}`);

3 + 5 + "8"  //문자열 88

"3" + 5 + 8 //문자열 358

//공백만 있는 문자열 "  ", 빈 배열도 참이다