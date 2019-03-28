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
