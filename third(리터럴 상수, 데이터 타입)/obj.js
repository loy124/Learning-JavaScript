const sam1 = {
  name: 'Sam',
  age: 4,
};

const sam2 = { name: 'Sam', age: 4 }; // sam1 과 sam2의 프로퍼티는 같으나 둘이 서로 다른객체이다

const sam3 = {
  name: 'Sam',
  classification: {
    kingdom: 'Anamalia',
    phylum: 'Chordata',
    class: 'Mamalia',
    order: 'Carnivoria',
    family: 'Felidae',
    subfamily: 'Felinae',
    genus: 'Felis',
    species: 'catus',
  }, // classification 프로퍼티는 그 자체가 객체이다
};
sam3.classification.family; // "Felidae"
sam3.classification.family; // "Felidae"
sam3.classification.family; // "Felidae"
sam3.classification.family; // "Felidae"

sam3.speak = function() {
  return 'Meow!';
};
sam3.speak(); // "Meow!"" 함수호출

delete sam3.speak; // speak 함수 제거

const s = 'hello';
s.rating = 3; // 임시 객체 선언
s.rating; // undefined

//객체의 해체할당
// 중요
const iu = {
  name :'아이유',
  age : 25,
  gender : 'female'
}
const {
  name : n,
  age: a,
  gender : g
} = iu
console.log(n, a, g) // 아이유 25 female

const {
  name,
  age,
  gender 
} = iu //프로퍼티 축약

const loginInfo = {
  device: {
    createdAt: '2019-03-06T00:14:04+0000',
    deviceId: '00000000004VX',
    deviceType: 'desktop'
  },
  user: {
    createdAt: '2019-03-08T18:00:28+0000',
    email: 'dhsdb1541@naver.com',
    name: '이온유',
    nickname:'dhsdb1541',
    phoneNumber: '010-9185-9155'
  }
}

const {
  device: {
    createdAt,
    deviceId,
    deviceType
  } ,
  user: userInfo,
  user: {
    createdAt : userCreateAt,
    email,
    name
  }
} = loginInfo

const phone = {
  name: 'iphone',
  color : undefined
}

const {
  name: n,
  version: v = 6+,
  color: c = 'silver'
} = phone;

console.log(n, v, c) //i phone 6+ silver

const deliveryProduct = {
  orderedDaate : '2018-01-15',
  estimateDate: '2018-01-20',
  status: '배송중',
  items: [
    {name: '사괴', price: 1000, quantity: 3},
    {name: '배', price: 1500, quantity: 2},
    {name: '딸기', price: 2000, quantity: 4}
  ]
}


const {
  estimateDate: esti,
  status,
  items: [ , ...products]
} = deliveryProduct

console.log(esti, status, products);

const getArea = ({ width = 0 , height = 0}) => {
  return width * height
}
getArea({width:10, a: 100, b: 200, c: 300})

//정규 표현 예제
//추가공부
const getUrlParts = (url) => /^(https?):\/\/(\w{3,}\.[A-z.]{2,})(\/[a-z0-9]{1,}\/([a-z0-9\-.,]+))$/.exec(url)

const [ , protocol, host, , title] = getUrlParts('http://abc.com/es6/7-1.destructuring')
console.log(protocol, host, title)