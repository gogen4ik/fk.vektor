import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './styles/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PhotoAlbum from './components/PhotoAlbum'; // Импортируем новый компонент

function App() {
    console.log("Компонент App загружен");

    const [activeSection, setActiveSection] = useState(localStorage.getItem('activeSection') || 'news');

    const posts = [
        {
            id: 1,
            title: "Запись 1",
            content: "Мы выиграли последний матч против команды 'Спартак'. Это была захватывающая игра, и мы с гордостью возвратили трофей!",
            image: require('./images/post1.jpg').default
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
        { name: 'Смирнов Егор Александрович', number: '#3', position: 'нападающий', dob: '23.06.2006', image: require('./images/egor_smirnov.jpg').default },
        { name: 'Филь Артём Романович', number: '#7', position: 'нападающий', dob: '20.03.2006', image: require('./images/artem_fil.jpg').default },
        { name: 'Веренинов Егор Андреевич', number: '#12', position: 'нападающий', dob: '02.05.2006', image: require('./images/egor_vereninov.jpg').default },
        { name: 'Мочалов Артём Андреевич', number: '#10', position: 'нападающий', dob: '17.11.2006', image: require('./images/artem_mochalov.jpg').default },
        { name: 'Лазарев Артём Евгеньевич', number: '#88', position: 'нападающий', dob: '31.07.2007', image: require('./images/artem_lazarev.jpg').default },
        { name: 'Дмитриев Иван Алексеевич', number: '#9', position: 'защитник', dob: '01.07.2006', image: require('./images/ivan_dmitriev.jpg').default },
        { name: 'Малов Сергей Николаевич', number: '#1', position: 'вратарь', dob: '17.04.2005', image: require('./images/sergey_malov.jpg').default },
        { name: 'Набирухин Виктор Борисович', number: '#17', position: 'нападающий', dob: '14.04.1986', image: require('./images/viktor_nabirukhin.jpg').default },
        { name: 'Смирнов Арсений Алексеевич', number: '#69', position: 'нападающий', dob: '02.01.2008', image: require('./images/arseniy_smirnov.jpg').default },
        { name: 'Меньшов Сергей Александрович', number: '#8', position: 'защитник', dob: '05.06.1984', image: require('./images/sergey_menov.jpg').default },
        { name: 'Матвеев Денис Артемович', number: '#77', position: 'защитник', dob: '27.06.2007', image: require('./images/denis_matveev.jpg').default },
    ];

    // Фильтры и сортировка для команды
    const [sortBy, setSortBy] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');
    const [numberFilter, setNumberFilter] = useState('');

    const [positionFilter, setPositionFilter] = useState('');
    const [dobFilter, setDobFilter] = useState('');
    const [nameFilter, setNameFilter] = useState('');

    // Сортировка игроков
    const sortedPlayers = [...players].sort((a, b) => {
        let comparison = 0;
        if (sortBy === 'name') {
            comparison = a.name.localeCompare(b.name);
        } else if (sortBy === 'number') {
            comparison = parseInt(a.number.replace('#', '')) - parseInt(b.number.replace('#', ''));
        } else if (sortBy === 'position') {
            comparison = a.position.localeCompare(b.position);
        } else if (sortBy === 'dob') {
            const dateA = new Date(a.dob.split('.').reverse().join('-'));
            const dateB = new Date(b.dob.split('.').reverse().join('-'));
            comparison = dateA - dateB;
        }

        return sortOrder === 'asc' ? comparison : -comparison;
    });

    // Фильтрация игроков
    const filteredPlayers = sortedPlayers.filter(player => {
        return (
            (nameFilter === '' || (player.name && player.name.toLowerCase().includes(nameFilter.toLowerCase()))) &&
            (numberFilter === '' || (player.number && player.number.includes(numberFilter))) &&
            (positionFilter === '' || (player.position && player.position.includes(positionFilter))) &&
            (dobFilter === '' || (player.dob && player.dob.includes(dobFilter)))
        );
    });

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
                    <div>
                        <h2>Состав команды</h2>

                        <div className="search-filters">
                            <label>
                                ФИО:
                                <input
                                    type="text"
                                    value={nameFilter}
                                    onChange={e => setNameFilter(e.target.value)}
                                />
                            </label>
                            <label>
                                Номер:
                                <input
                                    type="text"
                                    value={numberFilter}
                                    onChange={e => setNumberFilter(e.target.value)}
                                />
                            </label>
                            <label>
                                Позиция:
                                <input
                                    type="text"
                                    value={positionFilter}
                                    onChange={e => setPositionFilter(e.target.value)}
                                />

</label>
                            <label>
                                Дата рождения:
                                <input
                                    type="text"
                                    value={dobFilter}
                                    onChange={e => setDobFilter(e.target.value)}
                                />
                            </label>
                            <label>
                                Сортировка по:
                                <select onChange={e => setSortBy(e.target.value)}>
                                    <option value="">Выберите...</option>
                                    <option value="name">Имя</option>
                                    <option value="number">Номер</option>
                                    <option value="position">Позиция</option>
                                    <option value="dob">Дата рождения</option>
                                </select>
                                <button className="sort-button" onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
                                  {sortOrder === 'asc' ? 'Сортировка по убыванию' : 'Сортировка по возрастанию'}
                                </button>

                            </label>
                        </div>

                        <ul className="team-list">
                            {filteredPlayers.map(player => (
                                <li key={player.number} className="team-member">
                                    <img src={player.image} alt={player.name} className="player-image" />
                                    <div className="player-info">
                                        <h3>{player.name}</h3>
                                        <p>Номер: {player.number}</p>
                                        <p>Позиция: {player.position}</p>
                                        <p>Дата рождения: {player.dob}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            case 'albums':
                return <PhotoAlbum />;
                case 'contacts':
                  return (
                      <div className="contacts-container">
                          <h2 className="contacts-title">Контакты</h2>
                          <p className="under-construction">Раздел в разработке</p>
                          <div className="contact-info">
                              <h3>Связаться с нами</h3>
                              <ul>
                                  <li>
                                      <strong>Email:</strong> <a href="mailto:info@example.com">info@example.com</a>
                                  </li>
                                  <li>
                                      <strong>Телефон:</strong> <a href="tel:+123456789">+1 (234) 567-89</a>
                                  </li>
                                  <li>
                                      <strong>Адрес:</strong> 12345 Улица, Город, Страна
                                  </li>
                              </ul>
                          </div>
                          <div className="social-media">
                              <h3>Следите за нами в социальных сетях</h3>
                              <ul>
                                  <li><a href="https://www.facebook.com">Facebook</a></li>
                                  <li><a href="https://www.twitter.com">Twitter</a></li>
                                  <li><a href="https://www.instagram.com">Instagram</a></li>
                              </ul>
                          </div>
                          <style jsx>{`
                              .contacts-container {
                                  padding: 20px;
                                  background-color: #f9f9f9; /* Светлый фон для контраста */
                                  border-radius: 8px; /* Скругляем углы */
                                  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Добавляем тень */
                                  max-width: 600px; /* Ограничиваем ширину блока */
                                  margin: 20px auto; /* Центрируем контейнер */
                              }
              
                              .contacts-title {
                                  text-align: center;
                                  color: #22246f; /* Цвет заголовка */
                              }
              
                              .under-construction {
                                  text-align: center;
                                  font-size: 18px;
                                  color: #ff0000; /* Цвет для текста "в разработке" */
                              }
              
                              .contact-info, .social-media {
                                  margin-top: 20px; /* Отступы между разделами */
                                  padding: 15px;
                                  background-color: #ffffff; /* Белый фон для контента */
                                  border-radius: 5px; /* Скругляем углы */
                              }
              
                              h3 {
                                  margin: 0 0 10px; /* Отступы для подзаголовков */
                                  color: #22246f; /* Цвет подзаголовков */
                              }
              
                              ul {
                                  list-style-type: none; /* Убираем маркеры списка */
                                  padding: 0; /* Убираем отступы для списка */
                              }
              
                              li {
                                  margin: 5px 0; /* Отступы между элементами списка */
                              }
              
                              a {
                                  color: #22246f; /* Цвет ссылок */
                                  text-decoration: none; /* Убираем подчеркивание */
                              }
              
                              a:hover {
                                  text-decoration: underline; /* Подчеркивание при наведении */
                              }
                          `}</style>
                      </div>
                  );
            default:
                return null;
        }
    };

    useEffect(() => {
        localStorage.setItem('activeSection', activeSection);
    }, [activeSection]);

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
