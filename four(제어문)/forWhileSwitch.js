import { format } from "path";

// for(;;) console.log("I wll repeat forever"); for루프의 제어부에 아무것도 쓰지 않으면 무한 루프가 된다.
for ([a]; [b]; [c]) {
  statement; //먼저 a를 실행하고 b가 true인 동안 c를 실행한다. c를 실행후 다시 b를 체크한다
}
//위 의 for과 while은 같은 내용이다.
[a];
while ([b]) {
  statement[c];
}
let s = '3';
for (; s.length < 10; s = '' + s);

switch (totalBet) {
  case 7:
    totalBet = funds;
    break;

  case 13:
    funds = funds - 1; //1펜스를 기부합니다 break생략
  case 11:
    totalBet = 21;
    break;

  default:
    //switch문을 혼용해서 쓸때 꼭 default를 지정하자
    console.log('No superstition here');
    break;
}

const player = { name: 'Thomas', rank: 'Midshipan', age: 25 };
format(let prop in player) {
    if(!player.hasOwnProperty(prop)) continue;
    console.log(prop+ ':' + plyer[prop]);
} //for in 예제 

const hand = [randFace(), randFace(), randFace()];
for(let face of hand)
    console.log(`you rolled..${face}!`); //이터러블 객체에 주로사용하는 for of 예제