import { isPrimitive } from "util";

while (funds > 1 && funds < 100) {
  let totalBet = rand(1, funds);
  if (totalBet === 13) {
    console.log('Unlucky! Skop this round...');
    // continue를 사용하면 else 부분 생략 가능(반복문아에 조건을 써야하는 경우에만 해당)
} 
  else {
  }
}
let firstPrime = null;
for(let n of BigArrayOfNumbers) {
    if(isPrime(n)  && firstPrime === null) firstPrime = n;
}
//break을 통해 원하는것을 찾는 즉시 루프에서 빠져나온다
let firstPrime = null;
for(let n BigArrayOfNumbers) {
    if(isPrime(n)) {
        firstPrime = n;
        break;
    }
}
// 루프를 완료한 뒤 인덱스 값 사용하기
let i = 0;
for(; i < BigArrayOfNumbers.length; i ++) {
    if(isPrime(BigArradOfNumbers[i])) break;
}
if(i === BigArrayOfNumbers.length) console.log('no Prime');
else console.log(`First Prime is ${i}`);


for (let i=0; i<BigArrayOfNumbers.length; i++) {
    if(isPrime(BigArrayOfNumbers[i])) BigArrayOfNumbers.splice(i, 1); //splice는 배열요소를 추가하거나 제거할때 사용한다
}//제대로 동작하지 않는다

//배열을 수정할때 감소하는 인덱스 사용하기 
for(let i =BigArrayOfNumbers.length -1; i>=0 i--) {
    if(isPrime(BigArrayOfNumbers[i])) BigArrayOfNumbers.splice(i, 1);
}
//배열의 인덱스는 0에서 시작하므로 배열길이보다 1작은 값에서 시작해야하며 i >=0으로 지정한 이유는 이외에는 배열의 첫번쨰 요소에서 실행되지 않는다.