const a1 = [1, 2, 3 , 4]; //기본 숫자 배열
const a2 = [1, 'two', 3 , null]; //여러가지 타입으로 구성한 배열
const a3 = [
    "HTML, CSS",
    "JavaScript",
    "React"
] // 여러줄로 정의한 배열

const a4 = [
    {name: "Ruby", age:20 },
    {name: "onyou", age: 27},
    {name: "mingee", age: 27}
] //객체가 들어있는 배열

const a5 = [
    [1, 3 ,5 ],
    [2, 4 ,6]
] //배열이 들어있는 배열
a5.length; //2 배열의 길이 반환

a5[0] // [1,3,5]

a5[a5.length - 1]; //마지막요소의 인덱스 0부터 시작이기때문에

const numStr = "33.3";
const num = Number(numStr); //문자열을 숫자로 변경

const x = parseInt("15 volt", 10); //숫자형 10진수로 15를 받아온다
const y = parseInt("16years", 16) //16진수로 변경
const z = parseFloat("15.6 years") //기수가 10으로 가정되어있다

const day = new Date(); //현재 날짜
const ts = d.valueOf(); //70년 1월 1일로부터 몇밀리초가 지났는지 나타낸다 

const arr = [1,true,"hello"];
arr.toString(); //"1,true,hello"
