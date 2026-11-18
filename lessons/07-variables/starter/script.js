// Урок 07: переменные, числа, строки, шаблонные строки
// Задача: описать трек переменными и показать его на странице

// Название трека(строка)
let songTitle = "Лишь тень";

//Исполнитель / композитор (строка)
let artist = "Антоха МС";

//Год (число)
let year = 2026;

// Жанр
const genre = "Поп-музыка";

//Длительность (число)
const duration = "02:47";


let cardText = `🎵 ${songTitle}
Исполнитель: ${artist}
Год: ${year}
Жанр: ${genre}
Длительность: ${duration}`;





// TODO 4: по клику на кнопку запиши данные в элементы страницы
document.getElementById("show-btn").addEventListener("click", function () {
  document.getElementById("card-text").textContent = cardText;
document.getElementById("title").textContent = songTitle;
document.getElementById("artist").textContent = artist;
document.getElementById("duration").textContent = duration;

});

