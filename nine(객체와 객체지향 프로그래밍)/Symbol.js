//private member 만들기
const obj = (() => {
    const _privatMember1 = Symbol('private1')
    const _privatMember2 = Symbol('private2')
    return {
        [_privatMember1]: '외부에서 보이긴하는데 접근할 방법이 마땅치 않네',
        [_privatMember2]: 10,
        publicMember1 : 20,
        publicMember: 30
    }
})()
console.log(obj)
console.log(obj[Symbol('private1')])
console.log(obj[_privatMember1])

for (const prop in iu) {
    console.log(prop, iu[prop])
}

Object.keys(iu).forEach(k => {
    console.log(k, ou[k])
})

Object.getOwnPropertyNames(iu).forEach(k => {
    console.log(k, iu[k])
})

//Symbole.for 공유심볼
// 전역공간에서 공유되는 심볼
const a = Symbol.for('abc'); //문자열 필수 생략이 undefined
const b = Symbol.for('abc');
a === b //true

const obj = (() => {
    const COMMON1 = Symbol.for('공유심볼')
    return {
        [COMMON1] : '공유할 프로퍼티 키값, 어디서든지 접근가능'
    }
})
obj[Symbol.for('공유심볼')]// 공유할 프로퍼티 키값 어디서든지 접근가능

const keys = ['ADD_TODO', 'DELETE_TODO'];

const Constants = {};
keyof.forEach(v=> {Constants[Symbol.for(v)] = v;})

//표준 심볼
const a = new Set();
//Symbol.iterator
//Symbol.match 정규표현식및 문자열관련
//Symbol.replace 정규표현식및 문자열 관련
//Symbol.search 정규표현식및 문자열 관련
//Symbol.species 파생클래스 만들기 생성자
//Symbol.split 문자열 나누는 조건

const str = '이 _ 문자열을 _ 이렇게 _ 나누어주었으면 _ 좋겠어.'
console.log(str.split(' _ '))
//'이' '문자열을' '이렇게' '나누어주었으면' '좋겠어'

String.prototype[Symbol.split] =function (string) {
    let result = ''
    let residue = string
    let index = 0
    do {
        index = residue.indexOf(this)
        if(index <= -1) {
            break
        }
    
    result += residue.substr(0, index) + '/'
    residue = residue.substr(index + this.length)
} while (true)
result += residue
return result
}
console.log(str.split(' _ ')) //이/문자열을/이렇게/나누어주었으면/좋겠어

//toStringTag : Object.prototype.toString이 호출되었을때 어떤 명칭을 반환할 지를 지정 가능
class Person {
    constructor (name) { this.name = name }
}
const jn = new Person('재남')
console.log(jn.toString()) //[object Object]

Person.prototype[Symbol.toStringTag] = 'PERSON'

console.log(jn.toString()) // [object PERSON]

