const burger = document.getElementById("burger");
const navMenu = document.getElementById("navMenu");

burger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

const filterButtons = document.querySelectorAll(".filter-btn");
const carCards = document.querySelectorAll(".car-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    carCards.forEach((card) => {
      const category = card.dataset.category;

      if (filter === "all" || filter === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

const calcForm = document.getElementById("calcForm");
const calcResult = document.getElementById("calcResult");

calcForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const carPrice = Number(document.getElementById("carPrice").value);
  const initialPay = Number(document.getElementById("initialPay").value);
  const months = Number(document.getElementById("months").value);
  const rate = Number(document.getElementById("rate").value);

  const creditAmount = carPrice - initialPay;

  if (creditAmount <= 0 || months <= 0) {
    calcResult.textContent = "Проверьте введённые данные";
    return;
  }

  const monthlyRate = rate / 100 / 12;

  let payment;

  if (monthlyRate === 0) {
    payment = creditAmount / months;
  } else {
    payment =
      creditAmount *
      (monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
  }

  calcResult.textContent =
    "Ежемесячный платёж: " +
    Math.round(payment).toLocaleString("ru-RU") +
    " ₽";
});

const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");
const modalCar = document.getElementById("modalCar");
const carSelect = document.getElementById("carSelect");

document.querySelectorAll(".btn-card").forEach((button) => {
  button.addEventListener("click", () => {
    const carName = button.dataset.car;
    modalCar.textContent = carName;
    carSelect.value = carName;
    modal.classList.add("active");
  });
});

modalClose.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("active");
  }
});

const modalForm = document.getElementById("modalForm");

modalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Спасибо!");
  modal.classList.remove("active");
  modalForm.reset();
});

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  formStatus.textContent =
    "Спасибо! Заявка принята.";

  contactForm.reset();

  setTimeout(() => {
    formStatus.textContent = "";
  }, 5000);
});
