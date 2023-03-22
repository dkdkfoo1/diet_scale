//원시데이터(논리형 데이터 true(1), false(0))
let a = false
let b = 1
console.log(a==b) //비교연산자의 같다 -> ==
//원시데이터(null(빈), undefined(정의되지않음))
let c = 10 //선언o 대입o
let d //선언o 대입x
c = null //대입된 후 특정상황에 따라 값을 제거할 경우
console.log(c) //null
console.log(d) //undefined
//------------------------
let e = 10
let f = '0'
console.log(e+f)
//-----------------------
console.log('memo-----------------------------')
//산술연산자
let num1 = 10+20
let num2 = 50-20
let num3 = 5*1
let num4 = 6/3
let num5 = 5%3
console.log(num1, num2, num3, num4, num5)
console.log('---------------------------------')
let box1 = 1
//box1 = box1+10
box1 += 10 //기존박스 1에 10을 더해서 최종 박스1에 대입한다. (오른쪽에서 왼쪽으로 읽기)
console.log(box1) // 11
console.log('---------------------------------')
let box2 = 0 //초기값선언
box2 = box2+10 // box2+=10
console.log(box2) // 10
box2 = box2-5 // box2-=5
console.log(box2) // 5
box2 = box2*2 // box2*=2
console.log(box2) // 10
//이어서 계산 되는 것!!!!
box2 += '살 입니다.'
// window.alert(box2)
//더하기는 연결로도 사용.
console.log('--------------------------------')
let box3 = 10
console.log(box3)
let box4 = box3++
console.log(box4, box3)