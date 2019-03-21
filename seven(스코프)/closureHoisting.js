//클로져
let globalFunc;//정의 되지 않은 전역 함수
{
    let blockVar = 'a'// 블록 스코프에 있는 변수
    globalFunc =function() {
        console.log(blockVar);
    }
}
globalFunc(); //"a" 블록안에서 값을 할당받았다. 블록스코프와 부모인 전역스코프가 서로 클로저를 형성한다.

//즉시 호출하는 함수 표현식
(function() {
    //IIFE 바디
})();
//익명함수를 만들고 그함수를 즉시 호출한다 내부에 있는 것들이 자신만의 스코프를 가지지만 IIFE자체는 함수이므로
// 스코프 밖으로 무언가를 내보낼 수 있다.
const message = (function(){
    const secret = 'im a secret'; //IIFE의 스코프안에서 보호되며 외부에서 접근할 수 없다
    return `the secret is ${secret.length} characters long.`;
})();
console.log(message);

//몇번 호출됬는지 저장된 값을 외부에서 건들 수 없다
const f = (function() { 
    let count= 0;
    return function() {
        return `i gave been called ${++count} times.`;
    }
})();
f(); // i have been called 1 times
f(); // i have been called 2 times


var2; //undefined
undefinedVar; //reference error

x; //reference error x는 정의되지 않앗다
let x = 3;
x; //3

//원래코드
if(x ! ==3) {
    console.log(y);
    var y = 5;
    if(y === 5) {
        var x = 3;
    }
    console.log(y);
}
if(x === 3){
    console.log(y);
}
//자바스크립트가 해석한 코드
var x;
var y;
if (x!== 3) {
    console.log(y);
    y = 5;
    if(y ===5) {
        x= 3;
    }
    console.log(y);
}
if ( x === 3) {
    console.log(y);
}

//함수 호이스팅
//var과 마찬가지로 함수 선언도 스코프 맨 위로 끌어올려집니다
f();//'f'
function f() {
    console.log('f');
}
//변수에 할당한 함수 표현식은 끌어올려지지 않으며 변수의 스코프 규칙을 그대로 따릅니다.

f();//reference error f는 정의되지 않앗습니다
let f = function() {
    console.log('f');
}

//스트릭트 모드 
(fucntion() {
    'use strict';
    //코드를 전부 이 안에 작성합니다
    //코드와 함께 동작하는 다른 스크립트는 스트릭트 모드에 영향을 받지 않는다.
})();