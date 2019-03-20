//call을 사용하고 this로 사용할 객체를 넘기면 해당함수가 주어진 객체의 메소드인 것 처럼 사용할 수 있습니다.
const bruce = { name: "bruce"};
const madeline = { name: "madeline"};

//이 함수는 어떤 객체에도 연결되지 않앗지만 this를 사용한다
function greet() {
    return `hello, i'm${this.name}!`;
}
greet(); // hello i'm undefineed! this가 어디에도 묶이지 않앗다
greet.call(bruce) // hello i'm bruce  this는 bruce이다
greet.call(madeline)//hello i'm madeline this는 madeline이다

//call의 첫번째 매개변수는  this값이고 매개변수가 더 있으면 호출하는 함수로 전달된다
function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

//call은 매개변수를 직접 받습니다.
update.call(bruce, 1949, 'singer');
//bruce는 이제 { name: "bruce", birthdayYear: 1949, occupation: 'singer'} 입니다.

//apply는 매개변수를 배열로 받는다
update.apply(madeline, [1955, 'actor']);
//madeline은 이제 { name: "madeline", birthdayYear: 1955, occupation: 'actor'} 입니다.

//apply를 사용하면 기존 배열을 이들 함수에[ 바로 넘길 수 있다]
const arr = [2, 3 -5, 15, 7];
Math.min.aplly(null, arr); //-5 

const newBruce = [1940, 'martial artist'];
update.call(bruce, ...newBruce); //apply(bruce,newBruce)와 같습니다.
Math.min,in(...arr); // -5
Math.max(...arr); // 15

//bind 
//bind를 사용하면  this의 값이 영구적으로 바뀝니다.
const updateBruce = update.bind(bruce);

updateBruce(1904, 'actor');
//bruce는 이제 { name: "bruce", birthdayYear: 1904, occupation: 'actor'} 입니다.
updateBruce.call(madeline,1274,'king');
////bruce는 이제 { name: "madeline", birthdayYear: 1274, occupation: 'king'} 입니다.
//madeline은 변하지 않습니다.

//bind에 매개변수를 넘기면 항 상 그 매개변수를 받으면서 호출되는 새 함수를 만드는 효과가 있습니다.
//태어난 해와 bruce를 고정하지만 직업은 언제나 자유롭게 바꿀수있는 업데이트 함수를 만들 수 있다.
const updateBruce1949 = update.bind(bruce, 1949);
updateBruce1949('singer, songwriter');
//bruce는 이제 { name: "madeline", birthdayYear: 1949, occupation: 'sing, songwriter'} 입니다.