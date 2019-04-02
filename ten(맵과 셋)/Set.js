//중복제거
//전체 순회할 필요성이 있을경우
// 값의 유무 판단

//특정요소에 접근및 인덱스가 필요한경우에는 적합하지 않다.
//중복을 배제하는법
const a = [1, 2, 3, 5, 4, 3, 2, 5, 4]
const b = a.reduce((a, v) => {
    if(a.incluces(v)) return a;
    a.push(v);
    return a;
}, []);

b //[1, 2, 3, 5, 4]
//Set을 활용한 중복을 배제하는 법
const c = new Set(a)
c // {1, 2, 3, 5, 4}
//배열만들기
const newArr = [...new Set(a)]

const set = new Set()
set.add(5)
set.add('5')
set.add(-0)
set.add(+0)
set //{5, '5', 0}
console.log(set.size); //3, length프로퍼티 역활

console.log(set.has(5)) //true 5를 가지고있는지
console.log(set.has(6)) //false

set.delete(5) //삭제
console.log(set.has(5)) //false

set.clear()
console.log(set.size) //0
console.log(set)//0

set.entries()//setIterator
set.keys()//setIterator
set.values()//setIterator

const s = new Set([1, 2, 3, '1', '3', 2, 5, 6, '6', 6])

s // {1, 2, 3, '1', '3',...}
const ss = new Set([...s])
//itreable Object : array, string, map, set

set.forEach(function(key, value, ownerSet) {
    console.log(key, value, this)
}, {})
//1 1 {}
//2 2 {}
//3 3 {}
//4 4 {}
//5 5 {}

console.log(set[1]) //undefined

//WeakSet
const s = new WeakSet() //참조 카운트를 증가시키지 않음

let o = {}; //o라는 변수가 {} 요런 객체를 참조합니다 -> 참조카운트 1
// let o2 = o; o2라는 변수도 o를 통해서 {} 객체를 참조합니다 -> 참조 카운트 2

// o2 = null;  o2에 null이 들어가면서 {} 객체의 참조카운트는 1이됩니다
// o = null;  {} 참조카운트 : 0 -> Garbage collector의 수거 대상

s.add(o); //o라는 변수가 가리키는 {} 를 s에 추가했지만 참조카운트는 여전히 1이다
o = null; // {}의 참조카운트가 0이된다 -> GC 되고 나면 s에는 아무것도 없게 된다
//참조형 데이터만 요소로 삼을 수 있다.
//iterable이 아니다
//has는 가능
// WeakSet은 .keys() .values() .entries() .size .forEach for ... of 모두 사용불가
