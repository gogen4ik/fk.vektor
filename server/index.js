const express = require('express');
const helmet = require('helmet');

const app = express();

// Используем helmet для установки заголовка Content Security Policy
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"], // Разрешаем встроенные скрипты
    },
  },
}));

app.use(express.static('public')); // Укажите директорию со статическими файлами

app.listen(8080, () => {
  console.log('Сервер запущен на http://localhost:8080');
});
