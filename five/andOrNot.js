(x || y) && x ! == y //XOR연산

const skipIt = true;
let x = 0;
const result = skipIt || x ++; //x의 값은 0이다 skip은 false로 바꾸면 두 피연산자를 모두 평가해야되기때문에 증가 (단축평가가 일어난다)

const doIt = false;
const result = doIt && x++; //x는 그대로 0이며 result는 false doIt이 true일 경우 증가연산이 일어나고 result는 0이된다

const result1 = doIt ? "Did it1": "Didn't do it." //3항 연산자  
const options = suppliedOptions || {name: "Default"} //빈객체더라도 참같은 값으로 평가가된다.

let q = 0, w = 10, e;
e = (q++, w++) //쉼표연산자, 두 표현식을 평가한후 두번쨰 표현식의 결과를 반환한다. x와 y는 1만큼ㄴ 늘어나지만 z의 값은 10이다