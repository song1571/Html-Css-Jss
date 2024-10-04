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
						