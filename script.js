var spinner = (function () {
    "use strict";
    
    const M = {
        spinner: document.getElementById("spinner"),
        form: document.getElementById("form"),
        list: document.getElementById("list"),
        tadaText: document.getElementById("tada-text"),
        removeButton: document.getElementById("remove-button"),
        resetWheel: document.getElementById("reset-wheel"),
        sound: document.getElementById("sound")
    };

    let B = {
        spinnerValues: [],
        isSpinning: false,
        winner: ""
    };

    const initSpinner = () => {
        B.spinnerValues = M.list.value.split("\n").filter(val => val.trim());
        renderSpinner();
    };

    const renderSpinner = () => {
        const spinnerHTML = B.spinnerValues.map(value => `<div>${value}</div>`).join("");
        M.spinner.innerHTML = spinnerHTML;
    };

    const startSpin = () => {
        if (B.isSpinning) return;
        B.isSpinning = true;
        const winnerIndex = Math.floor(Math.random() * B.spinnerValues.length);
        B.winner = B.spinnerValues[winnerIndex];
        M.tadaText.textContent = B.winner;
        setTimeout(() => {
            B.isSpinning = false;
            M.tadaText.classList.add("highlight");
        }, 3000);
    };

    M.form.addEventListener("submit", function (event) {
        event.preventDefault();
        startSpin();
    });

    M.list.addEventListener("input", function () {
        initSpinner();
    });

    M.resetWheel.addEventListener("click", function () {
        M.tadaText.textContent = "";
        M.removeButton.disabled = true;
        initSpinner();
    });

    return {
        initSpinner: initSpinner
    };
})();

spinner.initSpinner();
