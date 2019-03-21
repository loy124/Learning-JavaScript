import { isPrimitive } from "util";

typeof undefined // "undefined"
typeof null// object 원래라면 null은 원시값이여야하지만 이미 바꾸기엔 늦었다.
typeof {}// object
typeof true// boolean
typeof 1// number
typeof ""// string
typeof Symbol// symbol
typeof function() {} // function

const obj = { b: 2 , c: 3, d: 4}; //객체선언

//해체할당 객체를 해체할때에는 반드시 변수이름과 객체의 프로퍼티 이름이 일치해야한다. a는 프로퍼티가 없으므로 undefined
const {a, b, c } = obj;
a; // undefined 
b; // 2
c; // 3
d; // 참조 오류 d는 정의되지 않음

let a, b, c;

//에러
{a, b, c} = obj;

//동작
({a, b, c} = obj);
//배열 선언

const arr = {1, 2, 3};

//배열의 해체 할당
let[x, y] = arr;
x; //1
y; // 2
z;// 참조 오류

//확장 연산자를 사용해서 남은 배열에 할당해보기
const arr = [1, 2, 3 ,4, 5];

let[x, y, ...rest] = arr;
x; //1
y; // 2
rest; // [3, 4, 5]


//temp를 사용하지 않고서도 배열의 값을 바꿀 수 있다
let a = 5, b = 10;
[a, b] = [b, a];
a; //10
b; //5

if(isPrime(n) {
    label = 'prime';
} else {
    label = 'none-prime';
}
//if문을 3항 연산자로 바꾸기
label = isPrime(n) ? 'prime' : 'none-prime';

if(!options) options = {}; // options = options || {}; true면 뒷항 생략 false 면 options = {}
