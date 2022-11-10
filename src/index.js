"use strict";
//import { Artwork } from "./artwork";
//import { Statute } from "./Statute";
let artwork = [];
class Statute {
    constructor(title, year, price, height) {
        this.title = title;
        this.year = year;
        this.price = price;
        this.height = height;
    }
}
let muvekdarabszama = 0;
let muvekprice = 0;
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    let title = document.getElementById('title');
    let year = document.getElementById('year');
    let price = document.getElementById('price');
    let height = document.getElementById('height');
    let errormessage = document.getElementById('errorMessage');
    let kiiratasihely = document.getElementById('container');
    let megfeleloE = true;
    let muvekdb = document.getElementById('muvekdb');
    let muvekpriceadat = document.getElementById('muvekprice');
    let Regszobornev = /[a-zA-Z]{1,}/;
    let Regprice = /[1-9]{1,}/;
    (_a = document.getElementById('send')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        if (!Regszobornev.test(title.value)) {
            megfeleloE = false;
            errormessage.textContent = "Hiba a szobor nevében!";
        }
        if (!Regprice.test(price.value)) {
            megfeleloE = false;
            errormessage.textContent = "Hiba a szobor árában!";
        }
        if (parseInt(year.value) > 2022) {
            megfeleloE = false;
            errormessage.textContent = "Hiba a szobor évében!";
        }
        if (parseInt(height.value) < 20) {
            megfeleloE = false;
            errormessage.textContent = "Hiba a szobor magasságában!";
        }
        if (megfeleloE) {
            muvekdarabszama++;
            muvekprice += parseInt(price.value);
            title.value = "";
            year.value = "";
            price.value = "";
            height.value = "";
            muvekdb.textContent;
        }
    });
});
