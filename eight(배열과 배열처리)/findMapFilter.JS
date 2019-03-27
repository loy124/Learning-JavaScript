
//findIndex는 일치하는것을 찾지못했을때 -1을 반환한다
//보조함수를 써서 다양한 상황에서 활용이 가능하다
//조건에 맞는 인덱스를 찾을때 사용
const arr = [{ id: 5, name: 'Judith'}, {id: 7, name: 'Francis'}];
arr.findIndex(o => o.id === 5); //0
arr.findIndex(o => o.name === 'Francis'); //1
arr.findIndex(o => o === 3); // -1

//요소자체를 원할때는 find를 사용한다
//없을시에 undefined 반환
const arr = [{ id: 5, name: 'Judith'}, {id: 7, name: 'Francis'}];
arr.find(o => o.id === 5); // 객체{id: 5, name: 'Judith}
arr.find(o => o.id === 2); //undefined

//find와 findIndex에 전달하는 함수는 배열의 각 요소를 첫번쨰 매개변수로 받고
// 현재요소의 인덱스와 배열 자체도 매개변수로 받습니다
// 특정 인덱스보다 뒤에 있는 제곱수 찾기
const arr = [1, 17, 16, 5, 4, 16, 10, 3, 49];
arr.find((x, i ) => i >2 &&Number.isInteger(Math.sqrt(x))); //4

//find와 findIndex에 전달하는 함수의 this를 수정해서 함수가 객체의 메소드인것처럼 호출하기
//ID를 조건으로 Peson 객체 검색
class Person {
    constructor(name) {
        this.name = name;
        this.id = Person.nextId++;
    }
}
Person.nextId = 0;
const jamie = new Person('jamie'),
    juliet = new Person('juliet'),
    peter = new Person('peter'),
    jay = new Person('jay');
const arr = [jamie, juliet, peter, jay];

//옵션1 ID를 직접 비교하는 방법
arr.find(p => p.id === juliet.id); //juliet 객체

//옵션2 this 매개변수를 이용하는 방법
arr.find(function (p) {
    return p.id === this.id
}, juliet);

//간혹 조건을 만족하는 요소의 인덱스, 요소가 필요없고 조건을 만족하는 요소가 있는지 없는지만 알면 충분할떄의 함수
//some, every
//some은 조건에 맞는 요소를 찾으면 즉시 검색을 멈추고 true를 반환하며 찾지못하면 false를 반환한다
const arr = [5, 7, 12, 15, 17];
arr.some(x => x%2 === 0); //true 12는 짝수
arr.some(x => Number.isInteger(Math.sqrt(x)));// false 제곱수가 없다
//every는 배열의 모든 요소가 조건에 맞아야 true를 반환한다
const arr = [4, 6, 16, 36];
arr.every(x => x%2 ===0); //true 홀수가없다
arr.every(x => Number.isInteger(Math.sqrt(x))); //false 6은 제곱수가 아니다

//map은 배열요소를 변형한다, 원래 배열은 바뀌지 않는다
const cart = [ {name: 'widget', price: 9.95}, {name: 'gadget', price: 22.95}];
const names = cart.map(x => x.name); // ['widget', 'gadget']
const prices = cart.map(x => x.price); // [9.95, 22.95];
const discountPrices = prices.map(x => x*0.8); //[7.96, 18.36]

//콜백함수는 각요소에서 호출될때 요소자체, 인덱, 배열전체를 매개변수로 받습니다
//두배열에 상품과 가격이 따로 저장되어 있는데 이 둘을 객체로 결합해보기
const items = ['widget', 'gadget'];
const prices = ['9.95', '22.95'];
const cart = items.map((x, i) => ({name:x, price:prices[i]})); //객체를 괄호로 감싼이유는 화살표 함수에서 중괄호를 블록으로 판단하기때문에 이를 방지
//cart: [{name:'widget, prcie:9.95}, {name:'gadget', price: 22.95}]

//filter은 map과 마찬가지로 사본을 반환하여 새배열에는 필요한 요소만 남는다.
//카드 덱 생성
const cards = [];
for(let suit of ['H', 'C', 'D', 'S']) //하트, 클로버, 다이아몬드, 스페이드
    for(let value=1; value<=10; value++)
        cards.push({suit, value});

//value가 2인 카드
cards.filter(c => c.value ===2); //[{suit: 'H', value: 2},
                                 //{ suit: 'C', value: 2},
                                 //{ suit: 'D', value: 2},
                                 //{ suit: 'S', value: 2}]
//반환된 배열의 길이만 작성

//다이아몬드
cards.filter(c => c.suit === 'D');  //length: 13

//킹, 퀸, 주니어
cards.filter(c => c.value > 10); //length: 12

//하트의 킹, 퀸, 주니어
cards.filter(c => c.value >10 && c.suit === 'H'); //length:3

//map과 filter의 결합
function cardToString(c) {
    const suits = { 'H': '\u2665', 'C':'\u2663', 'D': '\u2666', 'S': '\u2660'};
    const values = {1: 'A', 11: 'J', 12: 'Q', 13:'K'};
    for(let i=2; i<=10; i++) values[i] = i;
    return values[c.value] + suits[c.suit];
}

//value가 2인 카드
cards.filter(c => c.value ===2)
    .map(cardToString); //['2H', '2C', '2D', '2s']

//하트의 킹, 퀸, 주니어
cards.filter(c => c.value > 10 && c.suit === 'H')
    .map(cardToString); //['JH', 'QH', 'KH']