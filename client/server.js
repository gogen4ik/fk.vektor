const express = require('express');
const helmet = require('helmet');
const path = require('path'); // Подключаем path

const app = express();

// Настройка Helmet для безопасности
app.use(helmet());

// Устанавливаем папку public для статических файлов
app.use(express.static(path.join(__dirname, '../public')));

app.listen(8080, () => {
    console.log('Сервер запущен на http://localhost:8080');
});
