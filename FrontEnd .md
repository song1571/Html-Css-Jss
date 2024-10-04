# 계산기 프로젝트

## HTML 파일: test.html

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

## CSS 파일: css.css
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

## JS 파일: test2.jss
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

         
