const date = document.getElementById("date");
const day = document.getElementById("day");
const mouth = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

const weekDays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta"];

const allMonths = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

date.innerHTML = (today.getDate() < 10 ? "0" : "") + today.getDate();
day.innerHTML = weekDays[today.getDay()];
mouth.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();
