//상속 흉내
fucntion Square (width) {
    this.width = width
}

function Rectangle (width, height) {
    Square.call(this.width)
    this.height = height
}

Square.prototype.getArea = function () {
    return this.width * (this.height || this.width)
}
function F() { }

F.prototype = Rectangle.prototype
Rectangle.prototype = new F()
Rectangle.prototype.constructor = Rectangle

const square = Square(3)
const rect = new Rectangle(3, 4)

console.log(rect.getArea())
console.log(rect instanceof Rectangle)
console.log(rect instanceof Square)
//class를 통한 상속

class Square {
    constructor (width) {
        this.width = width
    }
    getArea () {
        return this.width * (this.height || this.width)
    }
}
class Rectangle extends Square {
    constructor(width, height) {
        super(width) //상위 클래스의 constructor을 호출하는 함수 오직 constructor만 호출가능
        this.height = height;
    }
}
const rect = new Rectangle(10, 20);

rect.getArea(); //200
// class 서브클래스명 extends 슈퍼클래스명 { 서브클래스 본문 }
//변수 만이 아닌 클래스 식이 와도 된다
 
class Employee extends class Pesron {
    constructor (name) { this.name = name } 
} {
    constructor (name, posisiton) {
        super(name)
        this.posisiton = posisiton
    }
}
const jn = new Employee('재남', 'worker')

//함수도 상속 가능하다
function Person (name) { this.name = name}
class Employee extends Person {
    constructor { name, posisiton} {
        super{name}
        this.posisiton = posisiton
    }
}
const jn = new Employee('재남', 'worker')

//내장 타입 상속 가능
class NewArray extends Array {
    toString() {
        return `[${super.toString()}]`
    }
}
const arr = new NewArray(1, 2, 3)
console.log(arr)
console.log(arr.toString()); // "[1, 2, 3]"

//super(내부키워드로써,허용된 동작 외엔 활용 불가)
//호출시 this보다 먼저 호출
// constructor 내부에서 
// 슈퍼 클래스의 호출하는 함수개념, 내부에서 this에 접근하려할때 super함수를 호출
//  constructor를 사용하지 않는다면 무관하다

// 메소드 내부에서
// 슈퍼클래스의 프로토타입 객체 개념, 메소드 오버라이드 또는 상위 메소드 호출 목적

