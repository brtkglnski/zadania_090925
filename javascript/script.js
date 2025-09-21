// cwiczenie 1

function smacznejKawusi(){
    alert("No hejka, smacznej kawusi i miłego dnia");
}

// cwiczenie 2 

const checkboxyTabela = document.getElementById("checkboxyTabela");
const tabela = document.getElementById("tabela"); 

function listaZakupow() {
    const lista = [
        "dwa bułki",
        "kiełbasa",
        "anżynki",
        "napój cola",
        "nowy tygodnik tucholski"
    ];

    lista.forEach(element => {
        const input = document.createElement("input");
        input.type = "checkbox";
        input.value = element;
        const label = document.createElement("label");
        label.textContent = element;
        const br = document.createElement("br");
        checkboxyTabela.appendChild(input);
        checkboxyTabela.appendChild(label);
        checkboxyTabela.appendChild(br);
    });
}

function wypiszListeZakupow() {
    tabela.innerHTML = "";
    const checkboxy = checkboxyTabela.querySelectorAll("input[type=checkbox]");

    checkboxy.forEach(checkbox => {
        if (checkbox.checked) {
            const row = document.createElement("tr");
            const cell = document.createElement("td");
            cell.textContent = checkbox.value;
            row.appendChild(cell);
            tabela.appendChild(row);
        }
    });

    return false;
}

// ćwiczenie 3 & 4

function wyswietlImieNazwiskoWiek() {
    const imie = document.getElementById("imie").value;
    const nazwisko = document.getElementById("nazwisko").value;
    const wiek = document.getElementById("wiek").value;
      if (wiek >= 18) {
        alert(imie + " " + nazwisko + ": " + "Jesteś pełnoletni");
      } else {
        alert(imie + " " + nazwisko + ": " + "Nie jesteś pełnoletni");
      }
    }
