const form = document.querySelector(".form");
const fieldBtn = document.querySelector("#field-btn");
const btn = document.querySelector(".btn-add");
const btnPublicar = document.querySelector("#btn-publicar");
var counter = 2;
var counterId = 0;
var rutinas = [];

btn.addEventListener("click", () => {
  let newDiv = document.createElement("div");
  newDiv.className = "field";

  let newspan = document.createElement("span");
  newspan.innerHTML = "Ejercicio " + counter;

  let newInput = document.createElement("input");
  newInput.id = "nombre-ejercicio-" + counter;

  let newSpanInputNumber = document.createElement("span");
  newSpanInputNumber.innerHTML = "Numero de series";
  let newInputNumber = document.createElement("input");
  newInputNumber.type = "number";
  newInputNumber.id = "series-ejercicio-" + counter;

  let newSpanInputNumberRep = document.createElement("span");
  newSpanInputNumberRep.innerHTML = "Rango de repeticiones";
  let newInputNumberRep = document.createElement("input");
  newInputNumberRep.type = "number";
  newInputNumberRep.id = "repeticiones-ejercicio-" + counter;

  counter++;

  form.removeChild(fieldBtn);
  form.removeChild(btnPublicar);

  newDiv.appendChild(newspan);
  newDiv.appendChild(newInput);

  newDiv.appendChild(newSpanInputNumber);
  newDiv.appendChild(newInputNumber);

  newDiv.appendChild(newSpanInputNumberRep);
  newDiv.appendChild(newInputNumberRep);
  form.appendChild(newDiv);
  form.appendChild(fieldBtn);
  form.appendChild(btnPublicar);
});

btnPublicar.addEventListener("click", () => {
    nombreRutina = document.querySelector("#nombre-rutina").value;
    var nuevaRutina = {
        id: counterId,
        nombre: nombreRutina,
    }
    counterId++;

    rutinas.push(nuevaRutina);
    console.log(rutinas);
});
