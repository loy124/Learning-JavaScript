//클래스이의 인스턴스는 클래스의 기증을 모두 상속한다
class Vehicle { 
    constructor() {
        this.passengers = [];
    console.log('vehicle created');
    }
    addPassenger(p) {
        this.passengers.push(p);
    }
}

class Car extends Vehicle {
    constructor() {
        super();
        console.log('car created');
    }
    deployAirbags() {
        console.log('BWOOSH!');
    }
}
//extends 키워드는 Car을 Vehicle의 서브클래스로 만든다 
//super()는 슈퍼클래스의 생성자를 호출하는 특별한 함수이며 서브클래스에서는 반드시 호출해야한다

const v = new Vehicle();
v.addPassenger('Frank');
v.addPassenger('Judy');
v.passengers; // ['Frank', 'Judy']
const c = new Car();
c.addPassenger('alice');
c.addPassenger('cameron');
c.passengers // ['alice', 'cameron']
v.deployAirbags(); //error
c.deployAirbags(); // 'BWOOSH!'
//c에서는 deplouAirbags를 호출할 수 있지만 v에서는 불가능하다
//상속은 단방향이며 Car클래스의 인스턴스는 Vehicle 클래스의 모든 메서드에 접근가능

//다형성
//객체지향 언어에서 여러슈퍼클래스의 멤버인 인스턴스
class Motorcycle extends Vehicle {}
const c = new Car();
const m = new Motorcycle();
c instanceof Car; //true
c instanceof Vehicle; //true
m instanceof Car; //false
m instanceof Motorcycle; //true
m instanceof Vehicle; // true

//hasOwnProperty
//객체 obj와 프로퍼티x에서 obj.hasOwnProperty(x)는 obj에 프로퍼티 x가 있다면 true반환
//확실히 사용하려면 항상 hasOwnProperty 사용

//다중 상속 믹스인
//보험 가입 믹스인 만들기
class InsurancePolicy {}
function makeInsureable(o) {
    o.addInsurancePolicy = function(p) {this.InsurancePolicy = p;}
    o.getInsurancePolicy = function() {return this.InsurancePolicy;}
    o.isInsured = function () {return !!this.InsurancePolicy;}
}
//어떤 객체든 보험 가입이 가능하다
makeInsureable(car);

const car1 = new Car();
car1.addInsurancePolicy(new InsurancePolicy()); //error
//자동차를 추상화한 개념을 보험에 가입할 수 없다.
const car1 = new Car();
makeInsureable(car1);
car1.addInsurancePolicy(new InsurancePolicy()); //works
//동작하나 모든 자동차에서 makeInsurable을 호출해야한다
makeInsureable(Car.prototype);
const car1 = new Car();
car1.addInsurancePolicy(new InsurancePolicy()); //works