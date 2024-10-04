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
