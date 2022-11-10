//import { Artwork } from "./artwork";
//import { Statute } from "./Statute";

interface Artwork{
    title: String, 
    year: number,
    price: number,
}

let artwork: Statute[] = [];

class Statute implements Artwork{
    title: String; 
    year: number;
    price: number;
    height: number;

    constructor(title: String, year: number, price: number, height: number) {
        this.title = title;
        this.year = year;
        this.price = price;
        this.height = height;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    let title = document.getElementById('title') as HTMLInputElement;
    let year = document.getElementById('year') as HTMLInputElement;
    let price = document.getElementById('price') as HTMLInputElement;
    let height = document.getElementById('height') as HTMLInputElement;
    let errormessage = document.getElementById('errorMessage')as HTMLElement;
    let kiiratasihely = document.getElementById('container') as HTMLDivElement;
    let megfeleloE = true;

    let Regszobornev = /[a-zA-Z]{1,}/;
    let Regprice = /[1-9]{1,}/

    document.getElementById('send')?.addEventListener('click', () => {
        if(!Regszobornev.test(title.value)){
            megfeleloE = false;
            errormessage.textContent = "Hiba a szobor nevében!";
        }
        if(!Regprice.test(price.value)){
            megfeleloE = false;
            errormessage.textContent = "Hiba a szobor árában!";
        }
        if(parseInt(year.value) > 2022){
            megfeleloE = false;
            errormessage.textContent = "Hiba a szobor évében!";
        }
        if(parseInt(height.value) < 20){
            megfeleloE = false;
            errormessage.textContent = "Hiba a szobor magasságában!";
        }

        if(megfeleloE){
            kiiratasihely.textContent="sikeres felvétel!";
        }
    })
});