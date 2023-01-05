// fetch("http://localhost:3333/api/cars")
//   .then((res) => res.json())
//   .then((res) => console.log(res));

let button = document.getElementById("button");
let body = document.querySelector("body");
let newBigDiv = document.getElementById("root");
newBigDiv.style.display = "flex";
newBigDiv.style.flexWrap = "wrap";
newBigDiv.style.gap = "20px";
newBigDiv.style.margin = "20px";
let tr = true;
button.addEventListener("click", () => {
  if (tr) {
    fetch("http://localhost:3333/api/cars")
      .then((res) => res.json())
      .then((res) =>
        res.map((car) => {
          let newDiv = document.createElement("div");
          newDiv.style.height = "460px";
          newDiv.style.width = "450px";
          newDiv.innerHTML = `<div class="card" style ="height: 460px">
        <img src="${car.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${car.model}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-secondary">Go somewhere</a>
        </div>
      </div>`;
          newBigDiv.appendChild(newDiv);
        })
      );
    tr = false;
  } else {
    tr = true;
    newBigDiv.innerHTML = "";
  }
});

let modelSelect = document.getElementById("modelSelect");
let brandSelect = document.getElementById("brandSelect");

modelSelect.addEventListener("change", () => {});
brandSelect.addEventListener("change", () => {});
