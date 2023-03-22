# diet_scale
<h2>23.03.22 다이어트 체중계 만들기</h2>

<hr>

<h3>계산식) 적정체중 = (본인신장-100)*0.9<br>

변수명 예) userHeight, userWeight, normal_w<br>

prompt 현재키, 몸무게 입력받기<br>

DOM객체 변수 생성하기</h3>

<p>  1. prompt 현재 키 , 몸무게 입력받기</p>

`let userHeight = window.prompt("당신의 키는?")`

`let userWeight = window.prompt("당신의 몸무게는?")`

`let normal_w = (userHeight-100)*0.9`

`let result = userWeight-normal_w`

<p> 2. DOM객체 변수 생성하기</p>

`const span_height = document.getElementsByClassName('height')[0]`

`const span_weight = document.getElementsByClassName('weight')[0]`

`const span_normal = document.getElementsByClassName('normal')[0]`

`const span_weight2 = document.getElementsByClassName('weight2')[0]`

<p>검사</p>

`console.log(span_height, span_weight, span_normal, span_weight2)`

`console.log(userHeight, userWeight, normal_w, result)`

<p> 3. DOM변수에 데이터변수 userHeight~result 출력 </p>

`span_height.innerHTML = userHeight`

`span_weight.innerHTML = userWeight`

`span_normal.innerHTML = normal_w`

`span_weight2.innerHTML = result`

