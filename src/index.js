"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let artwork = [];
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    let title = document.getElementById('title');
    let year = document.getElementById('year');
    let price = document.getElementById('price');
    let height = document.getElementById('height');
    let errormessage = document.getElementById('errorMessage');
    let megfeleloE = true;
    let Regszobornev = /[a-zA-Z]{1,}/;
    (_a = document.getElementById('send')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        if (!Regszobornev.test(title.value)) {
            megfeleloE = false;
            errormessage.textContent = "Hiba a szobor nevében!";
        }
    });
});
