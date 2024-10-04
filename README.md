# HTML, CSS, JavaScript 계산기 프로젝트

이 프로젝트는 HTML, CSS, JavaScript를 사용하여 만든 간단한 계산기입니다. 기본적인 사칙연산 기능과 몇 가지 추가 기능을 포함하고 있습니다.

## 1. HTML: `test.html`

HTML 파일은 계산기의 구조를 정의합니다. A-F와 같은 16진수 입력 버튼, 기본 연산 버튼, 그리고 결과를 표시할 디스플레이를 포함합니다.

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>계산기</title>
    <link rel="stylesheet" href="css.css">
</head>
<body>
    <div class="calculator">
        <div class="display">
            <input type="text" id="result" disabled>
        </div>
        <div class="buttons">
            <button class="btn">A</button>
            <button class="btn function-btn">HEX</button>
            <button class="btn function-btn">DEC</button>
            <button class="btn function-btn" onclick="clearScreen()">AC</button>
            <button class="btn operator" onclick="appendOperator('/')">÷</button>

            <button class="btn">B</button>
            <button class="btn" onclick="appendNumber('7')">7</button>
            <button class="btn" onclick="appendNumber('8')">8</button>
            <button class="btn" onclick="appendNumber('9')">9</button>
            <button class="btn operator" onclick="appendOperator('*')">×</button>

            <button class="btn">C</button>
            <button class="btn" onclick="appendNumber('4')">4</button>
            <button class="btn" onclick="appendNumber('5')">5</button>
            <button class="btn" onclick="appendNumber('6')">6</button>
            <button class="btn operator" onclick="appendOperator('-')">−</button>

            <button class="btn">D</button>
            <button class="btn" onclick="appendNumber('1')">1</button>
            <button class="btn" onclick="appendNumber('2')">2</button>
            <button class="btn" onclick="appendNumber('3')">3</button>
            <button class="btn operator" onclick="appendOperator('+')">+</button>

            <button class="btn">E</button>
            <button class="btn">F</button>
            <button class="btn" onclick="appendNumber('0')">0</button>
            <button class="btn" onclick="deleteLast()">←</button>
            <button class="btn equals" onclick="calculateResult()">=</button>
        </div>
    </div>
    <script src="test2.jss"></script>
</body>
</html>

```

## 2. CSS: css.css

CSS 파일은 계산기의 스타일을 정의합니다. 각 버튼과 디스플레이의 색상, 크기, 레이아웃을 지정하여 계산기가 보기 좋게 표시되도록 합니다. 계산기 컨테이너는 중앙에 배치되며, 배경색과 버튼의 스타일을 설정하여 사용자 경험을 향상시킵니다.

```css
body {        
    font-family: Arial, sans-serif;        
    display: flex;        
    justify-content: center;        
    align-items: center;        
    height: 100vh;        
    margin: 0;        
    background-color: white;        
}

.calculator {        
    width: 300px;        
    background-color: #000;        
    border-radius: 20px;        
    padding: 15px;        
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);        
}

.display {        
    margin-bottom: 20px;        
}

#result {        
    width: 100%;        
    height: 50px;        
    background-color: #333;        
    color: white;        
    font-size: 1.8em;        
    text-align: right;        
    border: none;        
    border-radius: 10px;        
    padding: 10px;        
    box-sizing: border-box;        
}

.buttons {        
    display: grid;        
    grid-template-columns: repeat(5, 1fr);        
    gap: 8px;        
}

.btn {        
    background-color: #555;        
    color: white;        
    font-size: 1.2em;        
    border: none;        
    border-radius: 15px;        
    padding: 10px;        
    cursor: pointer;        
    text-align: center;        
}

.function-btn {        
    background-color: #888;        
}

.operator {        
    background-color: #f90;        
}

.equals {        
    background-color: #ff5e3a;        
    border-radius: 15px;        
}

.btn:hover {        
    opacity: 0.8;        
}

```
## 3. JavaScript: test2.jss

JavaScript 파일은 계산기에 기능을 추가합니다. 사용자가 숫자를 입력하고, 연산자를 선택하여 계산을 수행하며, 결과를 화면에 출력하는 기능을 제공합니다. 또한, AC 버튼을 통한 초기화, ← 버튼을 통한 삭제 기능도 포함하고 있습니다.

```java
let expression = "";                        

function appendNumber(number) {                        
    expression += number;                        
    document.getElementById("result").value = expression;                        
}                        

function appendOperator(operator) {                        
    expression += " " + operator + " ";                        
    document.getElementById("result").value = expression;                        
}                        

function clearScreen() {                        
    expression = "";                        
    document.getElementById("result").value = "";                        
}                        

function deleteLast() {                        
    expression = expression.trim();                        
    if (expression.length > 0) {                        
        expression = expression.slice(0, -1);                        
        document.getElementById("result").value = expression;                        
    }                        
}                        

function calculateResult() {                        
    try {                        
        expression = eval(expression.replace('÷', '/').replace('×', '*')).toString();                        
        document.getElementById("result").value = expression;                        
    } catch (error) {                        
        document.getElementById("result").value = "Error";                        
    }                        
}                        

document.addEventListener("keydown", function(event) {                        
    const key = event.key;                        
    if (!isNaN(key)) {                        
        appendNumber(key);                        
    } else if (key === '+') {                        
        appendOperator('+');                        
    } else if (key === '-') {                        
        appendOperator('-');                        
    } else if (key === '*') {                        
        appendOperator('*');                        
    } else if (key === '/') {                        
        appendOperator('/');                        
    } else if (key === 'Enter') {                        
        event.preventDefault();                        
        calculateResult();                        
    } else if (key === 'Backspace') {                        
        deleteLast();                        
    } else if (key === 'Escape') {                        
        clearScreen();                        
    }                        
});

```
![스크린샷 2024-10-04 150901](https://github.com/user-attachments/assets/5d850067-11e9-4092-bc4b-cbf275ba18f7)

![스크린샷 2024-10-04 150905](https://github.com/user-attachments/assets/5c31200e-1147-42bc-9ce8-3ebbcfa9fd72)

![스크린샷 2024-10-04 150824](https://github.com/user-attachments/assets/2977c3e9-e62d-43df-982a-2156d9a8023d)
![스크린샷 2024-10-04 150829](https://github.com/user-attachments/assets/ba3a8158-8b7f-4491-a759-9e5be48a72ae)
