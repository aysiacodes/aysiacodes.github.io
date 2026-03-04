let counter = 0;

function updateCounterDisplay() {
    const counterEl = document.getElementById("counter");
    if (counterEl) counterEl.textContent = String(counter);
}

function tickUp() {
    counter += 1;
    updateCounterDisplay();
    console.log(counter);
}

function tickDown() {
    counter -= 1;
    updateCounterDisplay();
}

function runForLoop() {
    const resultEl = document.getElementById("forLoopResult");
    if (!resultEl) return;

    const values = [];
    for (let i = 0; i <= counter; i += 1) {
        values.push(i);
    }
    resultEl.textContent = values.join(", ");
}

function showOddNumbers() {
    const resultEl = document.getElementById("oddNumberResult");
    if (!resultEl) return;

    const odds = [];
    for (let i = 1; i <= counter; i += 1) {
        if (i % 2 !== 0) odds.push(i);
    }
    resultEl.textContent = odds.join(", ");
}

function addMultiplesToArray() {
    const multiples = [];
    for (let i = counter; i >= 5; i -= 1) {
        if (i % 5 === 0) multiples.push(i);
    }
    console.log(multiples);
}

function printCarObject() {
    const cType = document.getElementById("carType")?.value ?? "";
    const cMPG = document.getElementById("carMPG")?.value ?? "";
    const cColor = document.getElementById("carColor")?.value ?? "";

    const car = { cType, cMPG, cColor };
    console.log(car);
}

function loadCar(which) {
    let car;
    if (which === 1) car = carObject1;
    if (which === 2) car = carObject2;
    if (which === 3) car = carObject3;

    if (!car) return;

    const typeEl = document.getElementById("carType");
    const mpgEl = document.getElementById("carMPG");
    const colorEl = document.getElementById("carColor");

    if (typeEl) typeEl.value = car.cType ?? "";
    if (mpgEl) mpgEl.value = car.cMPG ?? "";
    if (colorEl) colorEl.value = car.cColor ?? "";
}

function changeColor(which) {
    const p = document.getElementById("styleParagraph");
    if (!p) return;

    if (which === 1) p.style.color = "red";
    if (which === 2) p.style.color = "green";
    if (which === 3) p.style.color = "blue";
}