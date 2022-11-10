import { Artwork } from "./artwork";
import { Statute } from "./Statute";

let artwork: Statute[] = [];



document.addEventListener('DOMContentLoaded', () => {
    let title = document.getElementById('title') as HTMLInputElement;
    let year = document.getElementById('year') as HTMLInputElement;
    let price = document.getElementById('price') as HTMLInputElement;
    let height = document.getElementById('height') as HTMLInputElement;
    let errormessage = document.getElementById('errorMessage')as HTMLElement;
    let megfeleloE = true;

let Regszobornev = /[a-zA-Z]{1,}/;
    document.getElementById('send')?.addEventListener('click', () => {
        if(!Regszobornev.test(title.value)){
            megfeleloE = false;
            errormessage.textContent = "Hiba a szobor nevében!"
        }
    })
});