import "bootstrap";
import "./style.css";

window.onload = function() {
  const botonImprimir = document.getElementById("imprimir");
  const botonOrdenar = document.getElementById("ordenar");
  let ubicacion = document.getElementById("cards");

  let simArray = ["♠", "◊", "♣", "♥"];
  let numberArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let cantidadCartas = [];

  botonImprimir.addEventListener("click", function() {
    cantidadCartas = [];
    let tarjetas = document.getElementById("naipes").value;
    ubicacion.innerHTML = " ";

    for (let i = 0; i < tarjetas; i++) {
      let division = document.createElement("div");
      division.innerHTML =
        "<div class='sim1'></div><div class='number'></div><div class='sim2'></div>";
      division.classList.add("card");
      ubicacion.appendChild(division);

      let randomSuit = Math.floor(Math.random() * 4);
      let randomNumber = Math.floor(Math.random() * 13);
      cantidadCartas.push(randomNumber);

      let simbolo1 = document.getElementsByClassName("sim1");
      let simbolo2 = document.getElementsByClassName("sim2");
      let numberUbication = document.getElementsByClassName("number");

      if (randomSuit == 0) {
        var sim1 = simArray[randomSuit];
        simbolo1[i].innerHTML = sim1;
        var num = numberArray[randomNumber];
        numberUbication[i].innerHTML = num;
        var sim2 = simArray[randomSuit];
        simbolo2[i].innerHTML = sim2;
      } else if (randomSuit == 1) {
        sim1 = simArray[randomSuit];
        simbolo1[i].innerHTML = sim1;
        num = numberArray[randomNumber];
        numberUbication[i].innerHTML = num;
        sim2 = simArray[randomSuit];
        simbolo2[i].innerHTML = sim2;
      } else if (randomSuit == 2) {
        sim1 = simArray[randomSuit];
        simbolo1[i].innerHTML = sim1;
        num = numberArray[randomNumber];
        numberUbication[i].innerHTML = num;
        sim2 = simArray[randomSuit];
        simbolo2[i].innerHTML = sim2;
      } else if (randomSuit == 3) {
        sim1 = simArray[randomSuit];
        simbolo1[i].innerHTML = sim1;
        num = numberArray[randomNumber];
        numberUbication[i].innerHTML = num;
        sim2 = simArray[randomSuit];
        simbolo2[i].innerHTML = sim2;
      }
    }
  });

  botonOrdenar.addEventListener("click", function() {
    selection(cantidadCartas);
  });

  function selection(arr) {
    let start = 0;

    while (start < arr.length) {
      for (let i = start + 1; i < arr.length; i++) {
        if (arr[start] > arr[i]) {
          let tempo1 = arr[start];
          arr[start] = arr[i];
          arr[i] = tempo1;

          let tempo2 = ubicacion.children[start].innerHTML;
          ubicacion.children[start].innerHTML = ubicacion.children[i].innerHTML;
          ubicacion.children[i].innerHTML = tempo2;
        }
      }
      start++;
    }
  }
};
