const small = Number.EPSILON;//1을 더햇을때 1과 구분되는 결과를 만들수 있는 가장 작은 값
const bigInt = Number.MAX_SAFE_INTEGER; //표현할수있는 가장 큰 정수
const max = Number.max_value//표현할수 있는 가장 큰 숫자
const minInt = Number.MIN_SAFE_INTEGER;//표현할 수 있는 가장 작은 정수
const min = Number.MIN_VALUE; // 표현 할 수 있는 가장 작은 숫자
const nInf = Number.NEGATIVE_INFINITY; // -무한대
const nan = Number.NaN;// NAN
const inf = Number.POSITIVE_INFINITY;// + 무한대

const result1 = 3 + '30'; // 3이 문자열로 변경되어 '330'
const result2 = 3 * '30'; // '30'이 숫자열로 변경되어 90