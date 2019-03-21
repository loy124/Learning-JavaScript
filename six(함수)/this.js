//거꾸로 나오는 함수를 만들어보자 오류가 난다
const o = {
    name: 'Julie',
    greetBackWards: function() {
        function getReverseName() {
            let nameBackwards= '';
            for(let i =this.name.length-1; i >=0; i--) {
                nameBackwards += this.name[i];
            }
            return nameBackwards
        }
        return `${getReverseName()} si eman ym, olleH`;
    }
};
o.greetBackWards();

// 다른변수에 this를 할당해서 정확한 this  호출하기
const o = {
    name: 'Julie',
    greetBackWards: function() {
        const self = this;
        function getReverseName() {
            let nameBackwards= '';
            for(let i =self.name.length-1; i >=0; i--) {
                nameBackwards += self.name[i];
            }
            return nameBackwards
        }
        return `${getReverseName()} si eman ym, olleH`;
    }
};
o.greetBackWards();
//화살표함수는 this가 정적으로 묶인다, 따라서 위에함수에서 this를 따로 선언하지 않더라도 정확하게 사용이 가능  argument함수 사용불가,객체 생성자 사용 불가
const o = {
    name: 'Julie',
    greetBackWards: function() {
        const self = this;
        function getReverseName() => {
            let nameBackwards= '';
            for(let i =self.name.length-1; i >=0; i--) {
                nameBackwards += self.name[i];
            }
            return nameBackwards
        }
        return `${getReverseName()} si eman ym, olleH`;
    }
};
o.greetBackWards();

// 익명함수가 아닌 함수를 쓰는 이유 예시
const g = function f(stop) {
    if(stop) console.log('f stopped');
    f(true);
};
g(false);  //f를 써서 자기 자신을 참조하고 함수바깥에서 g를 사용해서 함수를 호출한다 

//화살표 표기법 function 생략가능, 매개변수가 하나면 괄호도 생략 가능 바다 표현식 하나라면 중괄호와 return도 생략 가능
const f1 = function() { return "hello!";} 
//또는
const f1 = () => "hello";

const f2 = function(name) {return `hello, ${name}!`;}
//또는
const f2 = name => `hello, ${name}!`;

const f3 = function(a,b) {return a * b; }
//또는
const f3 = (a,b) => a * b;