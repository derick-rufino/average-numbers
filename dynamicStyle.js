// Acessando os elementos HTML
let num1 = document.getElementById("number1");
let num2 = document.getElementById("number2");
let num3 = document.getElementById("number3");
let num4 = document.getElementById("number4");
let uMessage = document.getElementById("message");

const rankingCard = document.getElementById("rankingCard");
const gameModeCard = document.querySelector(".gameMode-card");
const coverAll = document.querySelector(".coverAll");

let currentPoints = document.getElementById("currentPoints");

const closeBtns = document.querySelectorAll(".fa-xmark");
closeBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    closeModal(this);
  });
});

function closeModal(clickedBtn) {
  // Encontra o ancestral mais próximo que é um modal (ex: section, div, etc)
  const modal = clickedBtn.closest("section, .modal, .cardInfo");
  if (modal) {
    modal.style.display = "none";
    coverAll.style.display = "none";
  }
}

// Função para abrir um modal
function openModal(modal) {
  if (modal) {
    modal.style.display = "grid";
    coverAll.style.display = "block";
  }
}

// Seleciona todos os botões que abrem modais
const openModalBtns = document.querySelectorAll(".openModalBtn");
openModalBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    // Decide qual modal abrir com base no botão clicado
    if (this.id === "rankingCard-btn") {
      openModal(document.getElementById("rankingCard"));
    } else if (this.id === "gameMode-btn") {
      openModal(document.querySelector(".gameMode-card"));
    }
  });
});

function atualizarDisplayModo() {
  const display = document.getElementById("currentMode-display");
  let textoModo = "";
  if (currentMode === "1") textoModo = "Aprendiz";
  else if (currentMode === "2") textoModo = "Normal";
  else if (currentMode === "3") textoModo = "Médio";
  else if (currentMode === "4") textoModo = "Difícil";
  else textoModo = "Normal";
  display.innerText = textoModo;
}
