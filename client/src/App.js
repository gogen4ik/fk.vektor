import React, { useState } from 'react';
import Slider from 'react-slick';
import './styles/styles.css'; // Убедитесь, что этот путь корректный
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
    console.log("Компонент App загружен");

    const [activeSection, setActiveSection] = useState('news'); // Хук состояния для активной секции

    const posts = [
        {
            id: 1,
            title: "Запись 1",
            content: "Мы выиграли последний матч против команды 'Спартак'. Это была захватывающая игра, и мы с гордостью возвратили трофей!",
            image: require('./images/post1.jpg').default // Загрузка изображений
        },
        {
            id: 2,
            title: "Запись 2",
            content: "Наша команда готовится к следующему турниру. Все игроки усердно тренируются и настроены на победу!",
            image: require('./images/post2.jpg').default
        },
        {
            id: 3,
            title: "Запись 3",
            content: "Мы рады объявить, что наш новый спонсор - компания 'Спорт Оптимум'. Это поможет нам развивать команду и достигать новых высот!",
            image: require('./images/post3.jpg').default
        },
        {
            id: 4,
            title: "Запись 4",
            content: "Приглашаем всех на наш следующий матч в эту субботу! Поддержите нашу команду на трибунах!",
            image: require('./images/post4.jpg').default
        },
    ];

    const players = [
        { id: 1, name: 'Игрок 1', position: 'Нападающий' },
        { id: 2, name: 'Игрок 2', position: 'Полузащитник' },
        { id: 3, name: 'Игрок 3', position: 'Защитник' },
        { id: 4, name: 'Игрок 4', position: 'Вратарь' },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const renderActiveSection = () => {
        switch (activeSection) {
            case 'news':
                return (
                    <>
                        <h2>Последние записи</h2>
                        <div className="posts">
                            <Slider {...settings}>
                                {posts.map(post => (
                                    <div className="post" key={post.id}>
                                        <img src={post.image} alt={post.title} />
                                        <h3>{post.title}</h3>
                                        <p>{post.content}</p>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </>
                );
            case 'roster':
                return (
                    <>
                        <h2>Состав команды</h2>
                        <ul>
                            {players.map(player => (
                                <li key={player.id}>
                                    {player.name} - {player.position}
                                </li>
                            ))}
                        </ul>
                    </>
                );
            case 'albums':
                return (
                    <h2>Фотоальбомы (раздел в разработке)</h2>
                );

                case 'contacts':
                  return (
                      <h2>Контакты (раздел в разработке)</h2>
                  );
              default:
                  return null;
          }
      };
  
      return (
          <div className="container">
              <header>
                  <h1>Футбольная команда "Вектор-Недвижимость"</h1>
                  <nav>
                      <ul>
                          <li onClick={() => setActiveSection('news')}>Новости</li>
                          <li onClick={() => setActiveSection('roster')}>Состав</li>
                          <li onClick={() => setActiveSection('albums')}>Фотоальбомы</li>
                          <li onClick={() => setActiveSection('contacts')}>Контакты</li>
                      </ul>
                  </nav>
              </header>
              <main>
                  {renderActiveSection()}
              </main>
              <footer>
                  <p>&copy; 2023 Вектор-Недвижимость</p>
              </footer>
          </div>
      );
  }
  
  export default App;
  