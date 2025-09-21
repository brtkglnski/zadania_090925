// zadanie 1
function zad1() {
  const x = document.getElementById("liczba1").value;
  document.getElementById("wynik1").innerHTML = "wynik: " + (-x);
}

// zadanie 2
const wiek = 12;
const wiek2 = 20;
const czyPelnoletni = wiek => wiek >= 18 ? `${wiek} - pełnoletni` : `${wiek} - niepełnoletni`;

console.log(czyPelnoletni(wiek));
console.log(czyPelnoletni(wiek2));

// zadanie 3

function obwodKola(r) {

    const obwod = (r > 0) ? () => 2 * 3.14 * r : () => "Nieprawidłowy promień";

    return obwod;
}
console.log(obwodKola(5)());

// zadanie 4 
const dane = [5, 6, 7, 2];
function sredniaMinMax() {
  let suma = 0;
  for (liczba in dane) {
    suma+=liczba;
  }
  const srednia = suma / dane.length;
  const min = Math.min(...dane);
  const max = Math.max(...dane);
  console.log("średnia=" + srednia + " min=" + min + " max=" + max);
}
sredniaMinMax();
