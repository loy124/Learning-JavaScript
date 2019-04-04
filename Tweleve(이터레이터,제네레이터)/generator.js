import { get } from "https";

//제네레이터
//중간에서 멈췄다가 이어서 실행 할 수 있는 함수
//function 키워드 뒤에 *을 붙여 표현하며 함수 내부에는 yield 키워드 활용
//next()를 호출할 때 마다 순차적으로 제네레이터 함수 내부의 yield 키워드를 만나기 전까지 실행하고 yield 키워드 에서 일시정지

funciton* generator(){
    console.log(1)
    yield 1
    console.log(2)
    yield 2
    console.log(3)
}
const gen = generator()

gen.next() //1 
//{value 1 done : false}

fucntion* gene() {yield}

const gene = fucntion * () {yield}

const obj = {
    gene1: function8 () {yield}
    *gene2 () {yield}
}

class A {
    *gen () {yield}
}
const obj = {
    a:1,
    b:2,
    c:3,
    *[Symbol.iterator] (){
        for(let prop in this) {
            yield [prop, this[prop]]
        }
    }
}
console.log(...obj)
for (let p of obj) {
    console.log(p)
}

[Symbol.iterator] () {
    return {
        next() {
            return {
                done: false
            }
        }
    }
}
//제네레이터를 사용하면 간단하게 Symbol.iterator 제작가능
[Symbol.iterator] () {
    yield blah blah
}

function gene() {
    yield* [1, 2, 3, 4, 5]
    yield
    yield * 'abcde'
}
const gen = gene();

gen.next(); //{value: 1, done: false}
gen.next(); //{value: 2, done: false}

function* gene1 () {
    yield [1, 10]
    yield [2, 20]
}
function* gene2 () {
    yield [3, 30]
    yield [4, 40]
}
function * gene3 () {
    console.log('yield gene1')
    yield*gene1() // yield [1, 10]
                  // yield [2, 20] 와 같다
    yield* [[5, 50], [6,60]] // yield [5, 50]
                             // yield [6, 60] 와 같다                        
}

// 인자 전달하기
function* gene () {
    let first = yield 1 
    let second = yield first + 2
    yield second + 3
}
const gen = gene()

gen.next() //{ value 1 done: false}

//gen.next() //{ value NAN done: false} 
gen.next(10) // 인자를 받아온다 {value: 12, done:false}
gen.next(20) // {value: 23, done: false}
gen.next(20) // {value: undefined, done: true}

//제네레이터를 활용한 비동기 처리 예시
//추후 실행해보기
const fetchWrapper = (gen, url) => fetch(url)
    .then(res => res.json())
    .then(res => gen.next(res));
function* getNthUserInfo() {
    const [gen, from, nth] = yield;
    const req1 = yield fetchWrapper(gen, `https://api.github.com/users?since=${from || 0}`);
    const userId = req1 [nth - 1 || 0].id;
    console.log(userId);
    const req2 = yield fetchWrapper(gen, `https://api.github.com/user/${userId}`);
    console.log(req2);
}
const runGenerator = (generator, ...rest) => {
    const gen = generator();
    gen.next();
    gen.next([gen, ...rest]);
}
runGenerator(getNthUserInfo, 1000, 4);
runGenerator(getNthUserInfo, 1000, 6);