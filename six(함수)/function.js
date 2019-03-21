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

// 다른변수에 this를 할당해서 정확한 this  호출하기
const o = {
    name: 'Julie',
    greetBackWards: function() {
        const self = this;
        function getReverseName() {
            let nameBackwards= '';
            for(let i =self.name.length-1; i >=0; i--) {
                nameBackwards += self.name[i];
            }
            return nameBackwards
        }
        return `${getReverseName()} si eman ym, olleH`;
    }
};
o.greetBackWards();