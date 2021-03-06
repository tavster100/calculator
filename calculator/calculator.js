let runningTotal = 0;
let buffer = "0";
let previousOperator = null;
let nextOperator = null;
const screen = document.querySelector('.screen');

const buttons = [
    [
        { value: 'C', className: 'double' },
        { value: '⬅' },
        { value: '➗' },
    ],
    [
        { value: '7' },
        { value: '8' },
        { value: '9' },
        { value: '✖' },
    ],
    [
        { value: '4' },
        { value: '5' },
        { value: '6' },
        { value: '-' },
    ],
    [
        { value: '1' },
        { value: '2' },
        { value: '3' },
        { value: '+' },
    ],
    [
        { value: '0', className: 'triple' },
        { value: '=' },
    ],
]

window.onload = function() {
    renderButtons();

    document.querySelector('.calc-buttons').addEventListener('click', function(Event) {
        buttonClick(Event.target.innerText);
    });
}

function renderButtons() {
    const containerElement = document.querySelector('.calc-buttons');
    buttons.forEach((row) => {
        const rowElement = document.createElement('div');
        rowElement.className = 'calc-row';
        containerElement.append(rowElement);

        row.forEach((button) => {
            const buttonElement = document.createElement('button');
            rowElement.append(buttonElement);

            const classNamesArray = ['calc-button'];
            if (button.className)
                classNamesArray.push(button.className);
            buttonElement.className = classNamesArray.join(' ');
            buttonElement.innerText = button.value;
        });
    });
}

function buttonClick(value) {
    if (isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    rerender();
}

function handleNumber(value) {
    if (buffer === "0") {
        buffer = value;
    } else {
        buffer += value;
    }

}

function handleSymbol(value) {
    switch (value) {
        case 'C':
            buffer = "0";
            runningTotal = 0;
            previousOperator = null;
            break;
        case "=":
            if (previousOperator === null) {
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            render();
            break;
        case "⬅":
            if (buffer.length === 1) {
                buffer = "0";
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        default:
            handleMath(value);
            break;
    }
    rerender();
}

function handleMath(value) {
    const intBuffer = parseInt(buffer);
    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer); //store the value
    }
    previousOperator = value;
    buffer = "0";
}

function flushOperation(intBuffer) {
    if (previousOperator === "+") {
        runningTotal += intBuffer;
    } else if (previousOperator === "-") {
        runningTotal -= intBuffer;
    } else if (previousOperator === "✖") {
        runningTotal *= intBuffer;
    } else {
        runningTotal /= intBuffer;
    }

}

function rerender() {
    screen.innerText = buffer;
}

function render(nextOperator) {
    var next = null;

    if (["+", "-", "✖", "C", "⬅"].includes(nextOperator)) {
        return next = "0";
    }
}

//working ...