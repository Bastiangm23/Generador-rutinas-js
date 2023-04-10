const form = document.querySelector(".form");
const fieldBtn = document.querySelector("#field-btn");
const btn = document.querySelector(".btn-add");
var counter = 2;

btn.addEventListener("click", () => {
  let newDiv = document.createElement("div");
  newDiv.className = "field";

  let newspan = document.createElement("span");
  newspan.innerHTML = "Ejercicio " + counter;

  let newInput = document.createElement("input");

  let newSpanInputNumber = document.createElement("span");
  newSpanInputNumber.innerHTML = "Numero de series";
  let newInputNumber = document.createElement("input");

  let newSpanInputNumberRep = document.createElement("span");
  newSpanInputNumberRep.innerHTML = "Rango de repeticiones";
  let newInputNumberRep = document.createElement("input");

  counter++;

  form.removeChild(fieldBtn);

  newDiv.appendChild(newspan);
  newDiv.appendChild(newInput);

  newDiv.appendChild(newSpanInputNumber);
  newDiv.appendChild(newInputNumber);

  newDiv.appendChild(newSpanInputNumberRep);
  newDiv.appendChild(newInputNumberRep);
  form.appendChild(newDiv);
  form.appendChild(fieldBtn);
});
