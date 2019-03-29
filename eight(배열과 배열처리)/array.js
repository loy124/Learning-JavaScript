//모든 배열에는 length 프로퍼티가 있다

//배열 요소 접근
arr1[0]; //1
arr1[2]; //3
arr3[1]; //['one', 2, 'three']
arr4[1][0]; // {name: 'susan', type: 'object}

//배열 길이
arr1.length; //3
arr4.length; //5
arr4[1].length; //2

// 배열 길이 늘리기 
arr1[4] = 5;
arr1; // [1, 2, 3, undefined, 5]

//배열의 처음이나 끝에서 요소 하나를 추가하거나 제거하기
//push, unshift는 새요소를 추가해서 늘어난 길이를 반환한다
//pop, shift는 제거된 요소를 반환한다

const arr = ['b', 'c', 'd'];
arr push("e"); // ['b', 'c', 'd', 'e']
arr pop(); // ['b', 'c', 'd']
arr shift(); // ['b', 'c', 'd']
arr unshift('a'); //['a','b', 'c', 'd']

//배열의 끝에 요소 추가하기
//concat 메소드는 배열의 끝에 여러 요소를 추가한 사본을 반환한다
// arr은 그대로
const arr = [1, 2, 3];
arr.concat(4, 5, 6); // [1, 2, 3, 4, 5 ,6]
arr.concat([4, 5, 6]);//[1, 2, 3, 4, 5 ,6]
arr.concat([4, 5], 6);//[1, 2, 3, 4, 5 ,6]
arr.concat(4, [5, 6]);//[1, 2, 3, 4, [5 ,6]]

//배열 일부 가져오기
//slice 메서드는 매개변수 두개를 받는다 (어디서부터, 어다까지)
//음수인덱스를 쓰면 배열의 끝에서부터 요소를 센다
//arr은 그대로
const arr = [1, 2, 3, 4, 5];
arr.slice(3); // [4, 5]
arr.slice(2, 4);//[3, 4]
arr.slice(-2);//[4, 5]
arr.slice(1, -2); //[2, 3]
arr.slice(-2, -1); // [4]

//임의의 위치에 요소 추가하거나 제거하기
//splice는 배열을 자유롭게 수정할 수 있다 (시작할인덱스, 제거할 요소숫자, 나머지는 배열에 추가될 요소)
const arr = [1, 5 ,7];
arr.splice(1, 0, 2, 3, 4); //[]. arr은 [1, 2, 3, 4, 5, 7]
arr.splice(5, 0 , 6); // []. arr은 [1, 2, 3, 4, 5, 6, 7]
arr.splice(1, 2); // [2, 3]. arr은 이제 [1, 4, 5, 6, 7]
arr.splice(2, 1,'a', 'b') //[5]. arr은 [1, 4, 'a', 'b', 6, 7]

//베열안에서 요소 교체하기
//ES6추가 배열요소를 복사해서 다른위치에 붙여넣고 기존의 요소를 덮어쓴다.
//(복사한요소를 붙여넣을 위치, 복사를 시작할 위치, 복사를 끝낼 위치)
//음수 사용시 배열의 끝에서부터 셉니다
const arr= [1, 2, 3, 4];
arr.copyWithin(1, 2); //arr은 이제 [1, 3, 4, 4]
arr.copyWithin(2, 0, 2); //arr은 이제 [1, 3, 1, 3]
arr.copyWithin(0, -3, -1); //arr은 이제 [3, 1, 1, 3]

//특정 값으로 배열 채우기
//fill(es6)는 정해진 값으로 배열을 채운다
//(변경값,시작위치, 끝위치)
const arr = new Array(5).fill(1); //arr이 [1, 1, 1, 1, 1]로 초기화
arr.fill('a'); // arr이 ['a', 'a', 'a', 'a', 'a']
arr.fill('b', 1);// arr이 ['a','b', 'b', 'b', 'b']
arr.fill('c', 2, 4)// arr이 ['a','b', 'c', 'c', 'b']
arr.fill(5.5, -4); //arr이 ['a', 5.5, 5.5, 5.5, 5.5]
arr.fill(0, -3, -1); //arr이 ['a',5.5, 0 , 0, 5.5]

//배열 정렬과 역순정렬
//reverse는 배열그대로 순서를 반대로 바꾼다(수정)
const arr= [1, 2, 3, 4, 5];
arr.reverse(); //arr은 이제 [5, 4, 3, 2, 1];

//sort는 배열요소의 순서를 정렬한다

const arr= [5, 4, 3, 2, 1];
arr.sort(); // [1, 2, 3, 4, 5] 
//sort는 정렬함수를 받을 수 있다
const arr= [{name: 'suzanne'}, {name: 'jim'}, {name: 'trevor'}, {name: 'amanda'}];
arr.sort(); 
arr.sort((a, b) => a.name > b.name); //arr은 name프로퍼티의 알파벳 순으로 정렬된다
arr.sort((a, b) => a.name[1] < b.name[1]); //arr은 프로퍼티 두번쨰 글자의 알파벳 역순으로 정렬된다.

//배열 검색
//indexOf는 찾고자 하는 것과 정확히 일치(===) 하는 첫번쨰 요소 인덱스를 반환한다
//lastIndexOf는 배열의 끝에서 부터 검색한다 둘다 일치하는것을 찾지 못하면 -1을 반환한다
const o = {name: 'jerry'};
const arr = [1, 5, 'a', o, true, 5, [1, 2], '9'];
arr.indexOf(5); //1
arr.lastIndexOf(5); //5
arr.indexOf('a'); //2
arr.lastIndexOf('a'); //2
arr.indexOf([1, 2]); // -1
arr.indexOf('9'); //7
