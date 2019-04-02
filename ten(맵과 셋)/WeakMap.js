//WeakMap
// key에 참조형 데이터만 올 수 있다
//가비지 컬렉션에 포함될 수있다.
//참조 카운트를 증가시키지 않는다
//itrable 하지 않는다
// for of 사용불가
// size 프로퍼티 및 keys(), values(), entries(), clear() 등 사용불가
//비공개 객체 멤버에 사용
const obj1 = { a: 1} //1
const map = new Map() 
map.set(obj1, 10) //2
obj1 = null//1

const obj2 = { b: 2} //1
const wmap =new WeakMap() 
wmap.set(obj2, 20) //1
obj2 = null //0 GC의 대상

const keysArray = [{a: 1}, [1, 2, 3], function () {}, Symbol('키'), 45, '문자열', false]
const wmap = new WeakMap()
keysArray.forEach((v, i) => {
    wmap.set(v, j)
    console.log(wmap.get(v))
})
// 사용 불가

//비공개 객체 멤버

const SecretHolder = (function() {
    const secrets = new WeakMap();
    return class {
        setSecret(secret) {
            secrets.set(this,secret);
        }
        getSecret() {
            return secrets.get(this);
        }
    }
})();

const a = new SecretHolder();
const b = new SecretHolder();

a.setSecret('secret A')
b.setSecret('secret B')

a.getSecret(); //'Secret A'
b.getSecret(); //'secret B'

//완벽한 은닉화
const weakmapValueAdder = (wmap, key, addValue) => {
    wmap.set(key, Object.assign{}, wmap.get(key), addValue)
}
const Person = (() => {
    const privateMembers = new WeakMap()
    return class {
        constructor(n, a) {
            privateMembers.set(this, {name: n, age: a}) //get set외에 접근이 불가
            console.log(privateMembers);
        }
        get name(){
            return privateMembers.get(this).name
        }
        set age(a) {
            weakmapValueAdder(privateMembers, this, {age: a})
        }
        get age() {
            return privateMembers.get(this).age
        }
    }
}) ();
const jn = new Person('재남', 30)
console.log(jn.name, jn.age, jn) // 재남 30 {}