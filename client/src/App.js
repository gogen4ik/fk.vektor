import React from 'react';
import Slider from 'react-slick';
import './styles/styles.css'; // Убедитесь, что этот путь корректный
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const posts = [
    {
      id: 1,
      title: "Запись 1",
      content: "Мы выиграли последний матч против команды 'Спартак'. Это была захватывающая игра, и мы с гордостью возвратили трофей!",
      image: require('./images/post1.jpg').default // Используем require для загрузки изображений
    },
    {
      id: 2,
      title: "Запись 2",
      content: "Наша команда готовится к следующему турниру. Все игроки усердно тренируются и настроены на победу!",
      image: require('./images/post2.jpg').default // Измените путь к изображению по необходимости
    },
    {
      id: 3,
      title: "Запись 3",
      content: "Мы рады объявить, что наш новый спонсор - компания 'Спорт Оптимум'. Это поможет нам развивать команду и достигать новых высот!",
      image: require('./images/post3.jpg').default // Измените путь к изображению по необходимости
    },
    {
      id: 4,
      title: "Запись 4",
      content: "Приглашаем всех на наш следующий матч в эту субботу! Поддержите нашу команду на трибунах!",
      image: require('./images/post4.jpg').default // Измените путь к изображению по необходимости
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container">
      <header>
        <h1>Футбольная команда "Вектор-Недвижимость"</h1>
        <nav>
          <ul>
            <li><a href="#">Новости</a></li>
            <li><a href="#">Состав</a></li>
            <li><a href="#">Фотоальбомы</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>Последние записи</h2>
        <div className="posts">
          <Slider {...settings}>
            {posts.map(post => (
              <div className="post" key={post.id}>
                <img src={post.image} alt={post.title} /> {/* Отображение изображения */}
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </div>
            ))}
          </Slider>
        </div>
      </main>
      <footer>
        <p>&copy; 2023 Вектор-Недвижимость</p>
      </footer>
    </div>
  );
}

console.log("Компонент App был отрендерен");

export default App;
