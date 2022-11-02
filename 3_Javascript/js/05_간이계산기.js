// Number(얻어온값)

// 전역 변수
const num1 = document.getElementById("num1"); // 요소 추적 O / 값,속성 추적 X
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const typeBox = document.getElementById("typeBox");

function aa(){ // 함수 정의 코드가 있다는 것을 인식하고 호출 전까지 수행 X)

    // 함수가 호출 되었을 때 내부 코드가 해석되면서 수행
    const n1 = Number(num1.value);
    const n2 = Number(num2.value);
    const n3 = Number(num3.value);

    typeBox.innerText = n1 + n2 + n3;
}
// aa(); // 함수 호출

function bb(){
    typeBox.innerText =  Number(num1.value) - Number(num2.value) - Number(num3.value);
}

function cc(){
    typeBox.innerText =  Number(num1.value) * Number(num2.value) * Number(num3.value);
}

function dd(){
    typeBox.innerText =  Number(num1.value) / Number(num2.value) / Number(num3.value);
}

function ee(){
    typeBox.innerText =  Number(num1.value) % Number(num2.value) % Number(num3.value);
}

    // console.log(num1.value);
    // console.log(num2.value);
    // console.log( Number(num1.value) + Number(num2.value));