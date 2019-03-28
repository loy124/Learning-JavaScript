//배열은 값을 가지며 숫자형 인덱스가 있습니다, 객체는 프로퍼티를 가지며 각프로퍼티에는 문자열이나 심볼인덱스가 있다
// 배열에는 순서가 있습니다. arr[0]은 항상 arr[1]보다 앞에있다. 반면 객체는 순서가 보장되어있지 않다.
// 객체는 키를 통해 프로퍼티에 접근 할 수 있다.

//객체의 프로퍼티 나열하기
//for..in
const SYM = Symbol();

const o = { a: 1, b: 2, c: 3, [SYM]: 4};

for(let prop in o) {
    if(!o.hasOwnProperty(prop)) continue;
    console.log(`${prop}: ${o[prop]}`);
} //a: 1 b:2 c:3
//Object.keys 메소드를 사용해 객체에서 나열가능한 문자열 프로퍼티를 배열로 반환한다.
// 객체의 프로퍼티키를 배열로 가져와야 할때는 Object.keys가 편리하다.
Object.keys(o).forEach(prop => console.log(`${prop}: ${o[prop]}`));

//x로 시작하는 모든 프로퍼티를 가져오기
const o = { apple: 1, xochit1: 2, balloon: 3, guitar: 4, xylophone: 5 };

Object.keys(o)
.filter(prop => prop.match(/^x/))
.forEach(prop => console.log(`${prop}: ${o[prop]}`)); //xochit: 2 xylophone : 5

//클래스와 인스턴스 생성
//클래스는 함수 선언과 달리 호이스팅 되지 않습니다
//모든 코드는 strict모드로 자동 실행된다
//출처:https://infoscis.github.io/2018/02/13/ecmascript-6-introducing-javascript-classes/
//class 이전의 생성 방법
function PersonType(name) {
    this.name = name;
}
PersonType.prototype.sayName = function() {
    console.log(this.name);
};
let person = new PersonType("Nicholas");
person.sayName();   // outputs "Nicholas"
console.log(person instanceof PersonType);  // true
console.log(person instanceof Object);      // true
//

class PersonClass {
    //personType 생성자와 동일합니다.
    constructor(name) {
        this.name = name;
    }

    //PersonYpe.prototype.sayName과 동일합니다
    sayName() {
        console.log(this.name);
    }
}

let person = new PersonClass('nicholas');
person.sayName(); // outputs 'nicholas'

console.log(person instanceof PersonClass); //true
console.log(person instanceof object); //true

console.log(typeof PersonClass);//function
console.log(typeof PersonClass.prototype.sayName);//function

// PersonClass와 동일합니다.
let PersonType2 = (function() {
    "use strict";
    const PersonType2 = function(name) {
        // new를 이용하여 호출이 되었는지 확인
        if (typeof new.target === "undefined") {
            throw new Error("Constructor must be called with new.");
        }
        this.name = name;
    }
    Object.defineProperty(PersonType2.prototype, "sayName", {
        value: function() {
            // new를 이용하여 호출하지 않도록 함.
            if (typeof new.target !== "undefined") {
                throw new Error("Method cannot be called with new.");
            }
            console.log(this.name);
        },
        enumerable: false,
        writable: true,
        configurable: true
    });
    return PersonType2;
}());
    //
