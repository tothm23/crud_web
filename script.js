const form = document.getElementById("input-form");
const inputFields = document.getElementsByTagName("input");
const tableBody = document.getElementById("tbody");

tableBody.addEventListener("click", deleteRow);

/**
 * Töröl egy meghatározott sort
 * @param {*} e
 */
function deleteRow(e) {
  // Csak a gomb lenyomásakor törli
  if (e.target.classList.contains("delete")) {
    // Csak az adott sort törli
    e.target.parentElement.parentElement.remove();
  }
}

const sudmitBtn = document.getElementById("submit-button");

sudmitBtn.addEventListener("click", (event) => {
  // Megakadályozzuk, hogy frissüljön az oldal
  event.preventDefault();

  // Új sor
  let newRow = document.createElement("tr");
  newRow.setAttribute("scope", "row");

  // Az összes input elem
  for (let i = 0; i < inputFields.length; i++) {
    // Új cella
    let newTd = document.createElement("td");

    // Új értékekkel
    let tdText = document.createTextNode(inputFields[i].value);

    newTd.appendChild(tdText);
    newRow.appendChild(newTd);
  }

  // Törlés gomb
  let delBtnTd = document.createElement("td");
  delBtnTd.innerHTML = "<button class='delete btn btn-primary'>X</button>";

  newRow.appendChild(delBtnTd);
  tableBody.appendChild(newRow);
});
