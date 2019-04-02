import { format } from "util";

//객체의 단점 
//itreable하지 않다 
//키를 문자열로 취급한다
//프로퍼티 개수를 직접 파악할수없다 
//순회하면서 수행
//오브젝트는 배열로 반환 map과 set은 이터레이터로 반환

const o = { a:1, b:2, c:3}

const obj2arr = obj => {
    const arr = []
for (let key in o) {
    if(o.hasOwnProperty(key)) {
        console.log(key, o[key]);
    }
}
    return arr
}

const oArr = obj2Arr(i)
oArr.forEach(v => console.log(v))
// ['a', 1]
// ['b', 2]
// ['c', 3]
const oArr2 = Object.keys(o).map(l => [k, o[k]])
oArr.forEach(v => console.log(v))
// ['a', 1]
// ['b', 2]
// ['c', 3]

//Map
// [key, value] 쌍으로 이루어진 요소들의 집합
// 순서를 보장하며 iterable하다
// 키에는 어떤 데이터타입도 저장 할 수 있으며 문자열로 취급하지않는다.
const u1 = {name: 'cynthia'};
const u2 = {name: 'jackson'};
const u3 = {name: 'olive'};
const u4 = {name: 'james'};

//set은 사용자 역할을 할당
const userRoles = new Map();
userRoles.set(u1, 'User');
userRoles.set(u2, 'User');
userRoles.set(u3, 'Admin');
// UserRoles 체인으로 연결 가능
//     .set(u1, 'User')
//     .set(u2, 'User')
//     .set(u3, 'Admin')
//생성자에 배열의 배열을 넘기는 형태로도 가능

//u2의 역할을 알아볼때는 get()

userRoles.get(u2); //'User'

//이미 존재하는 키에 set을 호출하면 값이 교체된다
userRoles.get(u1); //'User/..
userRoles.set(u1, 'Admin');
userRoles.get(u1); //Admin
//이들 모두 for of 루프를 사용가능하다
for(let u of userRoles.keys())
    console.log(u.name);
for(let r of userRoles.values())
    console.log(r);
for(let ur of userRoles.entries())
    console.log(`${ur[0].name}: ${ur[1]}`);
//맵도 분해 할 수있다

for (let [u, r] of userRoles.entries())
    console.log(`${u.name}: ${r}`);
//entries 메소드는 맵의 기본 이터레이터
//단축법
for(let [u, r] of userRoles)
    console.log(`${u.name}: ${r}`);

    
const map = new Map()
map.set(1, 10)
map.set(01, 20)
map.set('01', 30)
map// {1 => 20, '01' => 30}
map.set({}, 40)
map.set(function() {}, () => {})
map// {1 => 20, '01'=> 30, {..}=> 40, f => f}

const map = new Map()
map.set('name', '재남')
map.set('age', 30)
//map(2) {'name' => '재남', age => 30}

console.log(map.size) // 2, length프로퍼티 역활  

//키 가져오기
console.log(map.get('name')) 
console.log(map.get('age'))
map.delete('name') 
console.log(map.has('name')) //false
console.log(map.has('age')) //true

//초기값 설정
const arr = [[10, 10], ['10', '10'], [false, true]];

const map1 = new Map(arr)
console.log(map1)
//Map(3) {10 => 10, '10' => '10', false => true}

map1.keys() //  {10, '10', false}
map1.values() // {10, '10', true}
map1.entries() //{10 => 10, '10' => '10', false => true}}

const keys = map1.keys()

keys//MapIterator {10, '10', false}
keys.next().value //10
keys.next().value // '10'
keys.next().value // false
keys.next().value // undefined

//이터러블 순회
const values = map.values()
values.next() //{value: 10, done:false}
values.next() //{value: '10', done:false}
values.next() //{value: true, done:false}
values.next() //{value: undefined, done:true}
//배열로 전환하기

const map = new Map ([[10, 10], ['10', '10'], [false, true], ['name', '재남'])

//Map(4) {10 => 10 , '10' => '10', false => true, 'name' => '재남'}
const mapArray1 = [...map] 
const mapArray2 = [...map.keys()] // [10, '10', false, 'name'] 
const mapArray3 = [...map.values()]// [10, '10', true, '재남']
const mapArray4 = [...map.entries()] // ...map과 같다

