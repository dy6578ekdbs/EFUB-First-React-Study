// HTML : 웹사이트의 뼈대를 구성하는 태그
// <html>
//     <head> --- 웹사이트의 속성이 들어감 <title>
//     </head>
//     <body> --- 웹사이트의 내용이 들어감
//     </body>
// </html>

// SPA : single page application = 단 하나의 html파일
// 의 body를 동적으로 채워넣음. 리액트가 그 역할을 함.
// 원래 방식 : multi page application

// CSS : 웹사이트의 디자인을 입히는 역할

// javascript : ECMAScript가 본래 이름. 이름을 따서 버전을 ES5,ES6라 부름
// 스크립트 언어의 특징은 프로그램이 실행되는 런타임에 해석됨

// 자료형 : Number, String, Boolean, Null, Undefined, Array, Object
// undefined는 값이 정의되기 전, null은 값이 빈 값으로 정의된 것

// Object 예제
//값으로 String타입만을 사용한 객체
let obj1 = {a : "apple", b : "banana"};
//값으로 Number타입만을 사용한 객체
let obj2 = {a : 1, b : 2};
//값으로 다양한 자료형을 사용한 객체
let obj3 = {a : "apple", b : 2};
//값으로 객체를 사용한 객체
let obj4 = {
    a : { a1 : 1 , a2 : 2},
    b : { b1 : 3 , b2 : 4},
    c : { c1 : 5, c2 : 6}
}
console.log(obj1['a']); //apple
console.log(obj2.a); //1
console.log(obj3['b']); //2
console.log(obj4.c.c2); //6

//javascript의 연산자
//산술 연산자
let a = 2;
let b = 4;
console.log(a/b); //0.5
console.log(a%b); //2
console.log(a**b); //16

let A = 2;
let B = 4;
A += B;
console.log(A); //6

A -= B ;
console.log(A);  //2

A *= B;
console.log(A); //8

A/= B ;
console.log(A); //2

//증가 연산자(++), 감소 연산자(--)
//prefix (전위증가연산자)
//postfix (후위증가연산자)
let a1 = 1;
let b1 = a++;

console.log(a1,b1); //2 1

let c1 = 1;
let d1 = ++c;
console.log(c1,d1); //2 2

//관계연산자 = 비교 연산자
// > < >= <=

//동등연산자 : 값이 같은지 알아보는 것
// ==(같다) !=(다르다)

//일치연산자 : 자료형과 값이 모두 같은지 알아보는 것
// === (값과 자료형이 모두 같다)
// !== (값이나 자료형이 같지 않다.)

let a2 = 1;
let b2 = '1';
console.log(a==b); //true
console.log(a!=b); //false
console.log(a===b); //false
console.log(a!==b); //true

//이진 논리 연산자
let a3 = true;
let b3 = false;
console.log(a3 && b3); //false
console.log(a3 || b3); //true

//삼항 연산자(?)
// 조건식 ? true일 경우 : false일 경우

let a4 = true;
let b4 = false;
console.log(a4? 1 : 2);//1

//function statement사용
function add(a,b){
    return a + b
};
console.log(add(2,3)); //5
const multi = (a,b) => { return a * b} ;
console.log(multi(2,3)); //6

