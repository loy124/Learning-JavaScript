function Person(n, a) {
    this.name = n;
    this.age = a;
}
var gomu = new Person('고무곰', 30);

var gomuClone1 = new gomu.__proto__.constructor('고무곰_클론1', 10);

var gomuClone2 = new gomu.constructor('고무곰_클론2', 25);

var gomuProto = Object.getPrototypeOf(gomu);
var gomuClone3 = new gomuProto.constructor('고무곰_클론3', 20);
var gomuClone4 = new Person.prototype.constructor('고무곰_클론4', 15);
//생성자 함수의 프로토타입에 접근하는법
//[CONSTRUCTOR].prototype
//[instance].__proto__
// [instance]
//object.getPrototypeOf([instamce])

//생성자 함수에 접근하는법
//[CONSTRUCTOR]
//[CONSTRUCTOR].prototype.constructor 
// (Object.getPrototypeOf([instance])).constructor
// [instance].__proto__.constructor 
// [instance].constructor

function Person(n, a) {
    this.name = n;
    this.age = a;
}

// gomu.setOlder = function() {
//     this.age += 1;
// }
// gomu.getAge = function {
//     return this.age;
// }
// iu.setOlder = function() {
//     this.age += 1;
// }
// iu.getAge = function {
//     return this.age;
// }

Person.prototype.setOlder = function () {
    this.age += 1;
}
person.prototype.getAge = function() {
    return this.age;
}

var gomu = new Person('고무곰', 30);
var iu = new Person('아이유', 25);

Person.prototype.age = 100;// 값이 선언될 경우 바뀐다
gomu.__proto__.getAge(); //101

gomu.setOlder(); //gomu.__proto__.setOlder();일 경우 NAN이 나오나 __proto__는 생략이 가능해서 gomu사용가능
gomu.getAge(); // 31

//프로토타입 체이닝
//어려우니 다시 공부....
var arr= [1, 2, 3];
console.log(arr.toString()); // 1, 2, 3

Array.prototype.toString = function() {
    return '[' + this.join(', ') + ']';
}

console.log(arr.toString()); // [1, 2, 3]
console.log(arr.__proto__.toString.call(arr)); //[1, 2, 3]
console.log(arr.__proto__.__proto__.toString.call(arr)); //[object Array]

var obj = {
    a: 1,
    b: {
        c: 'c'
    },
// console.log(obj.toString()); //[object Object]
toString: function() {
    var res = [];
    for (var key in this) {
        res.push(key + ': ' + this[key].toString()); 
    }
    return '{' + res.join(', ') + '}';
}
};
console.log(obj.toString()); //{a: 1, b: [object Objcet], toString: function() {
//ar res = [];
// for (var key in this) {
//     res.push(key + ': ' + this[key].toString()); 
// }
// return '{' + res.join(', ') + '}';
// }
// }
// //}}
Object.prototype.toString = function() {
    var res = [];
    for (var key in this) {
        res.push(key + ': ' + this[key].toString()); 
    }
    return '{' + res.join(', ') + '}';
}
console.log(obj.toString()); //{a: 1, b: {c: c}}

//프토토타입 상속예시
function Person(name, age) {
    this._name = name;
    this._age = age;
}
//static method
Person.getInformations = function(instance) {
    return { 
        name: instance._name,
        age: instance._age
    };
}

// (prototype) method
Person.prototype.getName = function () {
    return this._name;
}
Person.prototype.getAge = function () {
    return this._age;
}

var gomu = new Person('고무', 30);

console.log(gomu.getName());//고무
console.log(gomu.getAge());//30

console.log(gomu.getInformations(gomu)); //error 프로토타입 체이닝은 대각선으로 일어난다
console.log(Person.getInformations(gomu)); //고무, 30

//class 상속 구현

function Person(name, age) {
    this.name = name || '이름없음';
    this.name = age || '나이모름';
}

Person.prototype.getName = function() {
    return this.name;
}
Person.prototype.getAge = function() {
    return this.age;
}

function Employee(name, age, position) {
    this.name = name || '이름없음';
    this.age = age || '나이모름';
    this.position = position || '직책모름';
}
Employee.prototype.getName = function() {
    return this.name;
}
Employee.prototype.getAge = function() {
    return this.age;
}
Employee.prototype.getPosition = function() {
    return this.position;
}
//위 내용을 상속으로 구현해보기 

function Person(name, age) {
    this.name = name || '이름없음';
    this.name = age || '나이모름';
}
Person.prototype.getName = function() {
    return this.name;
}
Person.prototype.getAge = function() {
    return this.age;
}

function Employee(name, age, position) {
    this.name = name || '이름없음';
    this.age = age || '나이모름';
    this.position = position || '직책모름';
}
Employee.prototype = new Person(); //Employee의 프로토타입에 Person의 인스턴스할당
Employee.prototype.constructor = Employee; // constructor 생성자 = Employee 설정
Employee.prototype.getPosition = fucntion() { //프로토타입을 덮어씌운 후
    return this.position;
}
var gomu = new Employee('고무', 30, 'CEO');
console.dir(gomu);//상속을 확인해보기 

// 비어있는 브릿지를 빈객체를 사용해서 필요없는부분 없애기
function Person(name, age) {
    this.name = name || '이름없음';
    this.name = age || '나이모름';
}
Person.prototype.getName = function() {
    return this.name;
}
Person.prototype.getAge = function() {
    return this.age;
}

function Employee(name, age, position) {
    // this.name = name || '이름없음';
    // this.age = age || '나이모름';
    this.superClass(name, age);
    this.position = position || '직책모름';
}
//비어있는 브릿지 사용해서 Person의 instance연결관계 끊기
//프로토타입 체이닝상 불필요한 프로퍼티 등장 안하도록
var extendClass = (function() {
    function Bridge() {}
    retrun function(Parent, Child) {
    Bridge.prototype = Parent.prototype;
    Child.prototype = new Bridge();
    Child.prototype.constructor = Child;
    Child.prototype.superClass = Parent;
    }
})(); //영향을 주는 경우가 아니기때문에 한번만 실행
extendClass(Person, Employee);
Employee.prototype.getPosition = function() {
    return this.position;
} 
var gomu = new Employee('고무', 30, 'CEO');
console.dir.(gomu);

//Class를 사용해서 구현하기
class Person {
    constructor (name, age) {
        this.name = name || '이름없음';
        this.age = age || '나이모름';
    }
    getName () {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
class Employee extends Person {
    constructor (name, age, position) {
        super(name, age);
        this.position = position || '직책모름';
    }
    getPosition() {
        return this.position
    }
}