var singleElement = document.getElementById("Shin");

var manyElements = document.getElementsByClassName("nav-link");

singleElement.textContent = "🔥 Shin Ramyun - My Favorite Ramyun 🔥";

for (let i = 0; i < manyElements.length; i++) {
  manyElements[i].style.fontFamily = "monospace";
  manyElements[i].style.fontSize = "12pt";
  manyElements[i].style.fontWeight = "bold";
}

var newButtonDiv = document.getElementById("newButton");
var button = document.createElement("button");
button.textContent = "Click here if you like Shin Ramyun!";
newButtonDiv.appendChild(button);

button.addEventListener("click", () => {
  alert("Same!");
});
