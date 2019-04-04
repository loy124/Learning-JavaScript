//es5
function Person1 (name) {
    this.name = name
  }
  Person1.prototype.getName = function () {
    return this.name
  }
  Person1.isPerson = function (obj) {
    return obj instanceof this
  }
  const jn1 = new Person1('재남')
  console.log(jn1.getName())
  console.log(Person1.isPerson(jn1))

//es6
//class 사용
  class Person2 {
    constructor (name) { this.name = name }
    getName () { return this.name }
    static isPerson (obj) { return obj instanceof this }
  }
  const jn2 = new Person2('재남2')
  console.log(jn2.getName())
  console.log(Person2.isPerson(jn2))

//클래스 리터럴
class Person1{ }

//기명 클래스 표현식
const Person2 = class Peson2 {}

//익명 클래스 표현식
let Person3 = class { }
//클래스는 블록스코프에 갇힌다
//Strict mode가 강제된다
//열거 불가 console 시 흐릿하게 나온다
//constructor을 제외한 모든 메소드는 new 명령어로 호출 할 수없다
/
if(true) {
    class A {}

    const a = new A() //ok

    if (true) {
        const b = new A() // TDZ
        class A {} 
    }
}
const c = new A() //참조 오류

//생성자 함수로써만 존재한다
class a {} A()//error

let B =class {
    constructor () { A = 'A'}
}
const a = new A()
console.log(A)

//내부에서는 const 외부에서는 let 
class C {
    constructor () { C = 'C'}
}
const c = new C()
//ERROR 
//외부에서는 변경 가능하다
C = '10'; // '10'
//문이 아닌 식이다

//값이자 식
const instanceGenerator = (className, ...params) => new className(...params)

class Person {
    constructor (name) { this.name = name }
    sayName() {console.log(this.name) }
}
const jn = instanceGenerator(Person, '재나') // === new Person('재나')
const sn = instanceGenerator(class {
    constructor (name) { this.name =name}
    sayName () {console.log(this.name)}
}, '성후')
jn.sayName()
sh.sayName()

//대괄호 표기법
const a = {
    ['abc' + 123] : 1
}
a['123' + 234] = 10;

//a 123234: 10, abc123:1
const method1 = 'sayName'
const fullNameGetter = 'fullname'
class Person {
    constructor ( name ) {this.name = name}
    [method1] () {console.log(this.name)}
    get [fullNameGetter + 123] () { return this.name + '정'} 
}
const jn = new Person('재나')
jn.sayName()
//재나
//재나 정

//Generator
 class A {
     *gene () {}
 }

 class Products {
     constructor () {
         this.items = new Set()
     }
     addItem (name) {
         this.items.add(name)
     }
     [Symbol.iterator] () {
         let count = 0
         const items = [...this.items]
         return {
             next ( {
                 return {
                     done: count >= items.length,
                     value: items[count++]
                 }
             })
         }
     }
 }
 const a = new Products();
 a.addItem('밥')
 a.addItem('밥밥')
 a.addItem('밥밥밥')
 [...a] // ['밥', '밥밥', '밥밥밥']
 const iter = a[Symbol.iterator](); 
 iter.next(); //done: false, value: '밥'

 //제네레이터 사용
 class Products {
     constructor () {
         this.items = new Set()
     }
     addItem(name){
         this.items.add(name)
     }
     *[Symbol.iterator] () {
         yield* this.items
     }
 }
 const a = new Products()
 a.addItem('밥')
 a.addItem('밥밥')
 a.addItem('밥밥밥')
 for ( let x of a) {
     console.log(a);
 }