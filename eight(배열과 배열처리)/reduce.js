//map이 배열의 각요소를 변형한다면 reduce는 배열 자체를 변형한다.
//주로 배열에 들어있는 숫자를 더하거나 평균을 구하는것은 배열을 값하나로 줄이는 동작
//map이나 filter와 마찬가지로 콜백함수를 받는다.
// 첫번째 매개변수는 배열이 줄어드는 대상인 acculmulator, 두번쨰 매개변수부터는 배열요소, 현재 인덱스, 배열자체다

//배열의 숫자를 더하는 예제(누적값)
const arr = [5, 7, 2, 4];
const sum = arr.reduce((a, x)=> a += x, 0); //reduce의 콜백함수는 매개변수로 누적값 a와 현재배열요소 x를 받았다. 누적값은 0으로 시작
//첫번쨰 배열요소 5에서 함수를 호출합니다. a의 초깃값은 0이고 x의 값은 5이다, 함수는 a와 x(5)의 합을 반환한다. 이값은 다음단계에서 a의 값이 됩니다.
// 두번쨰 배열 요소 7에서 함수를 호출합니다 a의 초기값은 이전단계에서 전달한 5이고 x의 값은 7입니다 a와 x의 합 12를 반환합니다.이값은 다음단계에서 a의 값이 됩니다.
// 세번째 배열 요소 2에서 함수를 호출합니다. 이 단계에서 a는 12이고 x는 2입니다. 함수는 a와 x의 합인 14를 반환합니다.
// 네번째이자 마지막 배열 요소인 4에서 함수를 호출합니다 a는 14이고 x는 4입니다 함수는 a와 x의 합인 18을 반환하며 이값은 reduce의 값이고 sum에 할당된다.

//과일 별 수량을 계산하는 예제 출처: https://2dubbing.tistory.com/55 [비실이의 개발공간]

const fruit = ['apple', 'grape', 'banana', 'apple', 'orange', 'grape', 'apple', 'orange'];
 
const result = fruit.reduce((object, currentValue) => {
    if (!object[currentValue]) {
        object[currentValue] = 0;
}    object[currentValue]++;

    return object;
}, {}); 
console.debug(result);
//apple: 3 grape: 2 orange: 2
//reduce는 map과 filter을 동시에 사용할때 유용, 재사용성

var data = [1, 2, 3, 4, 5 ,6];

var initalValue = [];
var reducer = function(acculmulator, value) {
    if (value % 2 ! = 0) {
        acculmulator.push(value * 2);
    }
    return acculmulator;
}
var result1 = data.reduce(reducer, initalValue); 
console.log(result1);//[2, 6, 10]

var result2 = data.filter(x => x % 2 != 0 ).map(x => x * 2); //직관적이나 재사용성 떨어짐
console.log(result2); //[2, 6, 10]

//평균 구하기 
//출처: https://medium.com/@hongkevin/js-3-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B0%B0%EC%97%B4-%EB%A9%94%EC%84%9C%EB%93%9C-reduce-100-%ED%99%9C%EC%9A%A9%EB%B2%95-feat-egghead-io-97c679857ece
//배열을 순회하며 acculmulator와 value를 더해 sum을 만들고 배열의 크기로 나누는 로직, 초기값 생략가능
var data = [1, 2, 3, 4, 5, 6, 1];
var reducer = (acculmulator, value, index, array) => {
    var sumOfAccAndVal = acculmulator + value;
    if (index === array.length - 1) {
        return (sumOfAccAndVal) / array.length;
    }
    return sumOfAccAndVal;
}

var getMean = data.reduce(reducer, 0);
console.log(getMean); // 3.142857142857143

//initialvalue 주의하기 
//배열의 첫번쨰 값 vote1이 첫번째 순회 acculmulaotr로 전달되었고 조건문의 조건이 vote1[vote2]가 되며
//결과는 undefined가 되어 vote1[vote] = 1 이라는 로직을 타고 넘어가기때문에 initialvalue에 주의해야한다
const data = ['vote1', 'vote2', 'vote1', 'vote2', 'vote2'];
const reducer = (acculmulator, value, index, array) => 
{
    if (acculmulator[value]) {
        acculmulator[value] = acculmulator[value] + 1;
    } else {
        acculmulator[value] = 1;
    }
    return acculmulator;
};

const getVote = data.reduce(reducer, {}); // {vote1: 2, vote2: 3}
const getVote2 = data.reduce(reducer); // 'vote1'

//flatten 배열 납작하게 만들기
const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9 ]];
const flatArrayReducer = (acculmulator, value, index, array) => {
    return acculmulator.concat(value);
};

const falttenedData = data.reduce(flatArrayReducer, []); //[1, 2, 3, 4, 5, 6, 7, 8 ,9]

//flattenMap
//배열을 순회하면서 배열의 값으로 들어있는 object의 key의 존재 여부를 확인하고 unique한 cast를 key로 갖는 배열값
//추후 다시 공부하기
const input = [
    {
        'title': '슈퍼맨',
        'year': '2005',
        'cast': ['장동건', '권상우', '이동욱', '차승원']
    },
    {
        'title': '스타워즈',
        'year': '2013',
        'cast': ['차승원', '신해균', '장동건', '김수현']},
        {
            'title': '고질라',
            'year': '1997',
            'cast': []
        }
];
const flatMapReducer = (acculmulator, value, index, array) => {
    const key = 'cast';
    if(value.hasOwnProperty(key) && Array.isArray(value[key])) {
        value[key].forEach(val => {
            if (acculmulator.indexOf(val) === -1) {
                acculmulator.push(val);
            }
        });
    }
    return acculmulator;
};

const flattenCastArray = input.reduce(flatArrayReducer,[]);
    // ['장동건', '권상우', '이동욱', '차승원', '신해균', '김수현']

// 문자열을 누적값으로 사용해 6글자넘는 단어들만 모아서 문자열 하나로 만들기
const words = ['beachball', 'rodeo', 'angel',
'aardvark', 'xylophone', 'novemver', 'chocolate',
'papaya', 'uniform', 'joker', 'clover', 'bali'
];
const longWords = words.reduce((a, w) = > w.length>6 ? a+""+w : a, "").trim();
//longWords: 'beachball aardvark xylophone november chocolate uniform'

//문자열 병함
//undefined, null, 정의되지않은요소,삭제된 요소는 모두 빈 문자열로 취급한다.
const arr = [1, null, 'hello', 'world', true, undefined];
delete arr[3];

arr.join(); //'1,,hello,,true,'
arr.join(''); // '1hellotrue
arr.join('--'); // '1 -- -- hello -- -- true --'

//html ul 리스트 만들기
const attributes = ['nimble','perceptive', 'generous'];
const html = '<ul><li>' + attributes.join('</li><li>') + '</li></ul>';
//html: '<ul><li>nimble</li><li>percepive</li><li>generous</li></ul>';
