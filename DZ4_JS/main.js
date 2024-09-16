// ЗАДАНИЕ 1
const counterValue = document.getElementById('counter_value');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

let counter = 0;

function updateCounter() {
    counterValue.textContent = counter;
}

incrementButton.addEventListener('click', function () {
    counter++;
    updateCounter();
    counterValue.style.color = 'green';
});

decrementButton.addEventListener('click', function () {
    if (counter > 0) {
        counter--;
        updateCounter();
        counterValue.style.color = 'red';
    }
});
updateCounter();


// ЗАДАНИЕ 2
const mouse = document.querySelector('.mouse');
const coordinatesText = document.getElementById('coordinates');

mouse.addEventListener('mousemove', function (event) {
    const x = event.clientX - mouse.offsetLeft;
    const y = event.clientY - mouse.offsetTop;

    coordinatesText.innerHTML = `X: ${x}, Y: ${y}`;
});



//ЗАДАНИЕ 3
const redLight = document.getElementById('red-light');
const yellowLight = document.getElementById('yellow-light');
const greenLight = document.getElementById('green-light');

const colors = {
    red: 'STOP',
    yellow: 'WAIT',
    green: 'GO'
};
function turnOffAllLights() {
    redLight.style.backgroundColor = 'white';
    yellowLight.style.backgroundColor = 'white';
    greenLight.style.backgroundColor = 'white';
}

const userInput = prompt('Введите цвет светофора (Красный, Желтый, Зеленый):').toLowerCase();

switch (userInput) {
    case 'красный':
        turnOffAllLights();
        redLight.style.backgroundColor = 'red';
        alert(colors.red);
        break;
    case 'желтый':
        turnOffAllLights();
        yellowLight.style.backgroundColor = 'yellow';
        alert(colors.yellow);
        break;
    case 'зеленый':
        turnOffAllLights();
        greenLight.style.backgroundColor = 'green';
        alert(colors.green);
        break;
    default:
        alert('Неверный ввод.');
        break;
}