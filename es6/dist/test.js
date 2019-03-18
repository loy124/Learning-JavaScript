
// es6기능:블록스코프변수선언
const sentences = [{
  subject: 'JavaScript',
  verb: 'is',
  object: 'great',
}, {
  subject: 'Elephants',
  verb: 'are',
  object: 'large',
}]; // es6 기능 : 객체 분해

function say(_ref) {
  const { subject } = _ref;
  const { verb } = _ref;
  const { object } = _ref;
  // es6기능: 템플릿 문자열
  // 아래 사용한것은 백틱 ``
  console.log(`${subject} ${verb} ${object}`);
} // es6 기능 : for..of


for (let i = 0; i < sentences.length; i++) {
  const s = sentences[i];
  say(s);
}
