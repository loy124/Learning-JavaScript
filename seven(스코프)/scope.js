//정적 스코프 f1이 f2보다 먼저 정의됬지만 f2의 함수바디가 실행된다음 f1 f2순으로 넘어간다
//어떤 변수가 함수 스코프 안에 있는지 함수를 정의할 떄 알 수 있다.
function f1() {
    console.log('one');
}
function f2() {
    console.log('two');
}
f2();
f1();
f2();

const x = 3;
function f() {
    console.log(x);
    console.log(y);
}
{//새 스코프
const y = 5; //x는 함수 f를 정의할때 존재하지만 y는 그렇지 않습니다 y는 다른스코프에 존재한다
f();
} //f는 자신이 정의될때 접근할수 있었던 식별자에는 여전히 접근 가능하지만 호출할떄 스코프에있는 식별자에는 전급할수없다.

//전역스코프에 의존하는 예제
let name = 'irana'; //전역
let age = 25; //전역
//정보를 단일 객체에 보관하는것이 낫다 let user = { name ="" , age = ""}
function greet() {
    console.log(`hello, ${name}!`);
}
function getBirthYear() {
    return new Date().getFullYear() - age;
}
// 함수의 호출하는 스코프에 대단히 의존적이며 name값을 어디에서 든지 바꿀 수 있다. .

//함수 수정

let user = { name = "irana" , age = "25"}//정보를 단일객체에 보관
function greet(user) { //전역 스코프에 의존하지 않게 하기
    console.log(`hello, ${user.name}`);
}
function getBirthYear(user) {
    return new Date().getFullYear() - user.age;
}
//
//블록 스코프

console.log('before block');
{
    console.log('inside block');
    const x = 3;
    console.log(x); //3
}
console.log(`outside block : ${x}`)//reference error 독립블록을 사용한 예시

{ //block 1
const x = 'blue';
console.log(x); //blue
}
console.log(typeof x); //undefined x는 스코프밖에 있다
{
    //block 2 
    const x = 3;
    console.log(x); //3
}
console.log(typeof x); //undefined x는 스코프밖에 있다 

{
    //외부 블록
    let x = { color: "blue"};
    let y = x;
    let z = 3;
    {
        // 내부 블록 
        let x = 5;// 바깥의 x는 가려졌다
        console.log(x); // 5
        console.log(y.color);// blue 외부스코프의 x가 가리키는 객체는 스코프 안에있다
        y.color = "red";
        console.log(z); // 3
    }
    console.log(x.color); //red 객체는 내부스코프에서 수정
    console.log(y.color); //red x와 y는 같은 객체를 가리킨다
    console.log(z); // 3
}