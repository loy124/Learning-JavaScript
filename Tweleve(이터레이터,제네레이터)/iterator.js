//반복을 위해 설계된 특별한 인터페이스를 가진 객체
//객체 내부에는 next() 메소드가 있는데 value와 done프로퍼티를 지닌 객체를 반환한다
//done은 boolean
// for-of, ...(spead operator), forEach등은 내부적으로 [Symbole.iterator]를 실행한 결과 객체를 들고
//객체 내부의 next() 메소드를 done 프로퍼티가 true가 나올때까지 반복하여 호출
//위를 만족하게 구현하면 이터러블한 객체


const iter = {
    items : [10, 20, 30],
    count: 0,
    next() {
        const done =this.count >= this.items.length
        return {
            done,
            value: !done ? this.items[this.count++] : undefined
        }
    }
}
console.log(iter.next()) //false 10
console.log(iter.next())//false 20
console.log(iter.next())//false 30
console.log(iter.next())// true undefined

const obj = {
    a:1,
    b:2,
    c:3,
    [Symbol.iterator](){
        return iter
    }
}

[...obj] //[10, 20 , 30]

//반환되는 객체에는 bllean 값을 가지는 done 프로퍼티가 존재해야한다
const iter1 = {
    next (){
        return {
            done:false
        }
    }
}
console.log(iter.next())

const isIterable = target => !!target[Symbol.iterator]

isIterable({}) //false
isIterable([]) // true

//obj는 [Symbol.iterator] 메소드가없는데 [Symbol.iterator]메소드를 추가해주면 이터러블하게된다
// 하지만 메소드가 iterator을 반환해야하고 
// itrator은 next메소드를 가진 객체여야 하고
// next 메소드는 다시 value와 done 프로퍼티를 가진 객체를 반환해야 obj는 이터러블하다
const obj = {
    [Symbol.iterator] :creatIterator
}
[Symbol.iterator]: function () {
    return iterator
}

iterator === {
    next() {
        return {
            value: ~~~,
            done: ~~~
        }
    }
}

const obj = {
    [Symbol.iterator]() {
        return this
    },
    next() {
        return {
            done: false
        }
    }
}
console.log(...obj)