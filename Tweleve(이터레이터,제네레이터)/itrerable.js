//itrerable
//내부 요소들을 공개적으로 탐색(반복) 할 수 있는 데이터 구조
//[Symbol.iterator] 메소드를 가지고있다
const arr = ['a', 'b', 'c']
const set = new Set(['a', 'b', 'c'])
const map = new Map([false, 'no'], [true, 'yes'], ['well', 'soso'])
const str = '문자열도 이터러블하다'
const gene = (function* () {
    yield 1
    yield 2
    yield 3
})()
//이터러블한 객체를 배열로 만들어준다
Array.from(arr) //[1, 2, 3]
Array.from(gene) //[1, 2, 3]

//spread operator 로 배열 전환가능
const arrFrommArr2 = [...arr]

//해체 할당 가능
const [arrA, , arrC] = arr

for(let x of [1, 2, 3]) {
    console.log(x);
}
// 1
// 2
// 3
const makeGeneraotor = iterable => function* () {
    yield * [1, 2, 3] // yield 1 yield2 yield 3
}
const aGen = makeGeneraotor(arr)();
aGen.next() // {value: 1, done:false}
aGen.next() // {value: 2, done:false}
aGen.next() // {value: 3, done:false}
aGen.next() // {value: undefined done:true}
//이터러블한 개체를 인자로 받을 수 있는 개체
//new Map()
//new Set()
//new WeakMap()
//new WeakSet()
//Promise.all()
//Promise.race()
//Array.from()
