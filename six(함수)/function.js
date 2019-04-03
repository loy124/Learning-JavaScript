fucntion getGreeting() {
    return "hello world"
}
getGreeting(); //Hello world
getGreeting //function getGreeting();

const f = getGreeting;
f(); //Hello world //함수를 변수에 할당

//함수를 객체 프로퍼티에 할당
const o = {};
o.f = get.getGreeting;
o.f(); //hello world

//배열 요소에 할당하기
const arr = [1, 2, 3];
arr[1] = getGreeting; //arr은 이제 [1, function getGreetin(), 2] 0, 1  두번째 항이 바뀐다
arr[1](); //hello world

//매개변수 활용 a, b가 정해진 매개변수라고한다 
function avg(a, b) {
    return (a + b)/2;
}
avg(5, 10) //실제 매개변수 
// 함수를 호출하면 함수 매개 변수는 변수 자체가 아니라 그 값을 전달받습니다.

//값을 함수안ㅇ 할당하더라도 변수 x 에는 아무 영향도 없다
function f(x) {
    console.log(`f 내부: x=${x}`);
    x = 5;
    console.log (`f 내부 :: x = ${x} (할당후)`)
}
let x = 3;
console.log(`f를 호출하기 전 : x =${x}`); // x = 3  
f(x); // x = 3 (할당전) x = 5(할당후)
console.log(`f를 호출한다음: x=${x}`); // x = 3

//함수 내부의 매개변수 o와 함수 바깥의 변수 o는 다르다.  f를 호출하면 둘은 같은객체를 가르키지만 f내부에서 o에 할당한 객체는 새로운 객체이다.
function f(o) {
    o.message = "f에서 수정함";
    o = {
        message: "새로운 객체!"
    };
    console.log(`f내부 : o.message= "${o.message}" (할당후)`);

}
let o = {
    message: '초기값'
};

console.log(`f를 호출하기 전: o.message = "${o.messsage}"`); //o.message="초기값"
f(o);// f내부 : o.message +"새로운 객체!" (할당후)
console.log(`f를 호출한 다음: o.message="${o.message}"`); //f를 호출한 다음: o.message="f에서 수정함"

//매개변수도 해체와 할당이 가능하다
function getSentence({subject, verb, object}) {
    return `${subject} ${verb} ${object}`;
}

const o = {
    subject: "I",
    verb: "love",
    object: "JavaScript"
};

getSentence(o); //I love JavaScript

//배열 해체
// const arr = ["I", "LOVE","JAVASCRIPT"];
// getSentence(arr);  

//남는 매개변수 이용하기
function addPrefix(prefix, ...words) {
    const prefixedWords = [];
    for(let i =0; i<words.length; i++) {
        prefixedWords[i] = prefix + words[i];
    } 
    return prefixedWords
}

addPrefix("con", "verse", "vex");

//매개변수 기본 값 지정
function f (a, b = "default", c = 3) {
    return `${a} - ${b} - ${c}`;
}
f(5,6,7); //"5 -6 -7"
f(5); //"5 - default - 3"

const o = {
    name : 'wallace',   //원시 값 프로퍼티
    bark: function() {return: 'woof!';} // 함수 프로퍼티 (메소드)
}
//es6로 간편하게 메소드를 추가하는 문법
const w = {
    name: 'wallace',
    bark() { return 'woof!';} //함수 프로퍼티(메소드)
}

// 메소드 호출시  this는 호출한 메서드를 소유하는 객체가 됩니다
const o = {
    name: 'wallace',
    speak() { return `my name is ${this.name}`;}
}
o.speak(); //my name is wallace 호출시 this는 o에 묶인다.(speak가 o의 프로퍼티여서가 아닌 o에서 speak를 호출했기 때문이다.)

const speak = o.speak;
speak === o.speak; // true
speak(); //my name is undefined

//일급 객체
//무명의 리터럴로 표현이 가능하다
// 변수나 자료구조에 저장할 수 있다
// 함수의 매개변수에 전달 할 수있다
// 반환값으로 사용할 수있다

//무명의 리터럴로 표현이 가능하다
// 변수나 자료구조에 저장할 수 있다
var increase = function (num) {
    return ++num;
};

var decrease = function (num) {
    return --num;
};

var predicate = { increase, decrease};

// 함수의 매개변수에 전달 할 수있다
// 반환값으로 사용할 수있다

function makeCounter(predicate) {
    var num = 0;
    return function () {
        num = predicate(num);
        return num;
    };
}

var increaser = makeCounter(predicate.increase);
console.log(increaser()); //1
console.log(increaser()); //2

var decreaser = makeCounter(predicate.decrease);
console.log(decreaser()); //1
console.log(decreaser()); //2

//재귀 함수 (자기 자신을 가리키는 함수)
//자신을 무한히 연쇄 호출하므로 탈출조건을 만들어야한다.
//피보나치 수열 
function fibo(n) {
    if (n < 2) retrun n;
    return fibo(n - 1) + fibo(n - 2);
}
console.log(fibo(0)); // 0
console.log(fibo(1)); // 1
console.log(fibo(2)); // 1
console.log(fibo(3)); // 2
console.log(fibo(4)); // 3
console.log(fibo(5)); // 5
console.log(fibo(6)); // 8

//팩토리얼 
//n! = 1 * 2 * ... * (n-1) * n
fucntion facto(n) {
    if (n < 2) return 1;
    return facto(n - 1) * n;
}
console.log(facto(0)); // 1
console.log(facto(1)); // 1
console.log(facto(2)); // 2
console.log(facto(3)); // 6
console.log(facto(4)); // 24
console.log(facto(5)); // 120
console.log(facto(6)); // 720

//콜백 함수
//특정 이벤트가 발생하였을때 호출하는 함수, 비동기식 처리 모델에 사용된다
var button = document.getElementById('myButton');
    button.addEventListener('click', function() {
      console.log('콜백button clicked!');
    });

//화살표 함수
//(매개변수) => {본문}
// 매개변수가 하나일 경우 괄호 생략가능
// 매개변수가 없을 경우에는 괄호 필수
// return 식 or 값 뿐일 경우 { } 와 return 생략가능
//실행컨텍스트 생성시 this 바인딩을 하지 않음
//arrow function은 함수스코퍼를 생성한다, 다만 실행컨텍스트 생성시 this 바인딩 x
//call등으로 this 바인딩이 불가능하다( 하지만 역활은 수행한다)
var b = _ => 10;
var b = () => 10;

var e = function(x) {
    return {
        x : x
    }
}
//변환

var e = x => ({
    x : x //x (단축 프로터피)
})

var f = function(a) {
    return function(b) {
        return a + b;
    }
}

//변환
 
var f = a => b => a + b;

//this 바인딩 관련
const obj = {
    a () {
        console.log(this) 

        const b = () => {
            console.log(this) // obj의 this와 같다 그래서 외부 스코프에서 탐색,
        }
        b()
    }
}
obj.a()

var total = 0;
const obj = {
    grades : [80, 90 , 100],
    getTotal : function() {
        this.total = 0
        this.grades.forEach(funciton(v) {
            this.total += v //this : window
        } ,//this를 넣음으로 obj.total해결)
        //this. grades.forEach(v => {
        // this.total += v} 로도 가능
        })
    }
}
obj.getTotal()
total //270
obj.total // 0 


