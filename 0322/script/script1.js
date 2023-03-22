// DOM
// 원시데이터(문자) = "", '', '표시문자', 'class', 'id', 'tag'
const container = document.getElementById('container')
const item = document.getElementsByClassName('item')
console.log(container, item)
console.log(item[1].length)
console.log(typeof item[1]) // 결과:object -> 객체
console.log(typeof item[1].innerHTML) //객체의 속성을 확인한다. -> string (문자)
console.log(item[1].innerHTML.length) //결과-> 1 
//객체.속성.속성.... O
//객체.메소드().메소드() X
//객체.속성.속성.속성.메소드() O
//원시데이터(숫자) = '1' vs 1 = X
let a = 10
let b = '20'
let c = 20
console.log(a+b) //숫자+문자 = 문자 -> b가 문자여서 연산이 안되고 연결만됨.
console.log(a+c) //숫자+숫자 = 숫자
//----------------------------------
let number = window.prompt('좋아하는 숫자를 입력하세요') //데이터저장변수
let total = Number(number) //데이터변환변수
console.log(total, num)
console.log(typeof total)
//---------------------------------

