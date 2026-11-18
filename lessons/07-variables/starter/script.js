// Урок 07: переменные, числа, строки, шаблонные строки
// Задача: описать трек переменными и показать его на странице

// Название трека(строка)
let songTitle = "Лунная соната";

//Исполнитель / композитор (строка)
let artist = "Людвиг ван Бетховен";

//Год (число)
let year = 1801;

// Жанр
const genre = "Классика";

let cardText = `🎵 ${songTitle}
Исполнитель: ${artist}
Год: ${year}
Жанр: ${genre}`;


// TODO 4: по клику на кнопку запиши данные в элементы страницы
document.getElementById("show-btn").addEventListener("click", function () {
  document.getElementById("card-text").textContent = cardText;
document.getElementById("title").textContent = songTitle;
document.getElementById("artist").textContent = artist;



});
