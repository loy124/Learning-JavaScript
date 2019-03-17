'use strict'; //es6 기능 : 블록 스코프 변수 선언

var sentences = [{
  subject: 'JavaScript',
  verb: 'is',
  object: 'great'
}, {
  subject: 'Elephants',
  verb: 'are',
  object: 'large'
}]; //es6 기능 : 객체 분해

function say(_ref) {
  var subject = _ref.subject,
      verb = _ref.verb,
      object = _ref.object;
  //es6기능: 템플릿 문자열
  //아래 사용한것은 백틱 ``
  console.log(`${subject} ${verb} ${object}`);
} // es6 기능 : for..of


for (var _i = 0; _i < sentences.length; _i++) {
  var s = sentences[_i];
  say(s);
}