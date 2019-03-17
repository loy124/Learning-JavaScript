let a = 1; 
let b = a; // b=1 a에 저장된 주소값을 불러오는것 이기 때문에 a가아니다
a = 2;
console.log(b); //1 a를 가져오는것이 아닌 a의 값 1을 가져오는것이기 때문에 1이 된다
a === 2 // true

function change(b) {
    b = 5;
}
b = 3;
change(a);
console.log(a);  //3 함수안에서 값이 바뀌어도 외부의 값은 바뀌지 않은 상태로 남는다 

let o = {b: 3};
let p = o; //p는 o가 가리키고 있는 프로퍼티를 가르킨다
o.b = 2;
console.log(p); // {b:2}

let x = {a : 1};
let y = o;
y === x  //true

x = {a : 2};
y === x //false 객체를 가리키는 변수는 객체만을 가르키고 있을뿐 객체 자체는 아니다

let q = {a:1};
q === {a:1}; //false q는 객체를 가리키고 있을뿐 객체 자체는 아니다

