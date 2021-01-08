const btn = document.getElementById("btn");
const inputNom = document.getElementById("nom");
const inputPass = document.getElementById("pass");

function login(nom, pass) {
  alert(nom === "Kyria" && pass === "12345" ? "logged in" : "not logged in");
}

inputNom.addEventListener("input", () => {
  console.log(inputNom.value)
});

btn.addEventListener("click", () => {

  const nom = inputNom.value;
  const pass = inputPass.value;

  login(nom, pass);
});