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
            title: "Открытие официального сайта",
            content: "Мы создали сайт нашего футбольного клуба! На нем будут публиковаться анонсы и результаты матчей. Также здесь можно будет найти статистику наших игроков и команды в целом. Будут публиковаться фотоотчеты с возможностью скачивания красивых кадров! Следите за нами!",
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
        {
            name: 'Филь Артём',
            position: 'полузащитник',
            dob: '20.03.2006',
            number: '7',
            games: 24 + 12, // 36
            goals: 9 + 3, // 12
            assists: 4 + 3, // 7
            yellowCards: 3 + 4, // 7
            redCards: 0,
            height: null,
            weight: null,
            nationality: 'Россия',
            matchPlayer: 2 // Игрок матча
        },
        {
            name: 'Смирнов Егор',
            position: 'полузащитник',
            dob: '23.06.2006',
            number: '3',
            games: 24 + 13, // 37
            goals: 7 + 6, // 13
            assists: 7 + 3, // 10
            yellowCards: 3 + 2, // 5
            redCards: 1,
            height: 178,
            weight: 65,
            nationality: 'Россия',
            matchPlayer: 3 // Игрок матча
        },
        {
            name: 'Смирнов Арсений',
            position: 'нападающий',
            dob: '02.01.2008',
            number: '69',
            games: 7 + 11, // 18
            goals: 3 + 2, // 5
            assists: 1 + 1, // 2
            yellowCards: 0 + 1, // 1
            redCards: 0,
            height: null,
            weight: null,
            nationality: 'Россия',
            matchPlayer: 1 // Игрок матча
        },
        {
            name: 'Набирухин Виктор',
            position: 'нападающий',
            dob: '14.04.1986',
            number: '17',
            games: 14 + 4, // 18
            goals: 12 + 5, // 17
            assists: 2 + 0, // 2
            yellowCards: 3 + 0, // 3
            redCards: 0,
            height: null,
            weight: null,
            nationality: 'Россия',
            matchPlayer: 2 // Игрок матча
        },
        {
            name: 'Мочалов Артём',
            position: 'защитник',
            dob: '17.11.2006',
            number: '10',
            games: 28 + 12, // 40
            goals: 5 + 4, // 9
            assists: 5 + 2, // 7
            yellowCards: 1 + 0, // 1
            redCards: 0,
            height: null,
            weight: null,
            nationality: 'Россия',
            matchPlayer: 1 // Игрок матча
        },
        {
            name: 'Меньшов Сергей',
            position: 'Тренер',
            dob: '05.06.1984',
            number: '44',
            games: 0 + 4, // 4
            goals: 0 + 0, // 0
            assists: 0 + 1, // 1
            yellowCards: 0 + 0, // 0
            redCards: 0,
            height: null,
            weight: null,
            nationality: 'Россия',
            matchPlayer: null // Игрок матча
        },
        {
            name: 'Матвеев Денис',
            position: 'защитник',
            dob: '27.06.2007',
            number: '8',
            games: 5 + 11, // 16
            goals: 2 + 6, // 8
            assists: 2 + 3, // 5
            yellowCards: 0 + 5, // 5
            redCards: 0,
            height: null,
            weight: null,
            nationality: 'Россия',
            matchPlayer: 1 // Игрок матча
        },
        {
            name: 'Малов Сергей',
            position: 'вратарь',
            dob: '17.04.2005',
            number: '1',
            games: 8 + 12, // 20
            goals: 1 + 0, // 1
            assists: 1 + 0, // 1
            yellowCards: 0,
            redCards: 0,
            height: 176,
            weight: 71,
            nationality: 'Россия',
            matchPlayer: null // Игрок матча
        },
        {
            name: 'Лазарев Артём',
            position: 'нападающий',
            dob: '31.07.2007',
            number: '88',
            games: 29 + 11, // 40
            goals: 1 + 1, // 2
            assists: 2 + 1, // 3
            yellowCards: 0,
            redCards: 0,
            height: null,
            weight: null,
    
            nationality: 'Россия',
            matchPlayer: null // Игрок матча
        },
        {
            name: 'Дмитриев Иван',
            position: 'нападающий',
            dob: '01.07.2006',
            number: '9',
            games: 29 + 11, // 40
            goals: 10 + 2, // 12
            assists: 4 + 4, // 8
            yellowCards: 6 + 4, // 10
            redCards: 0,
            height: null,
            weight: null,
            nationality: 'Россия',
            matchPlayer: null // Игрок матча
        },
        {
            name: 'Веренинов Егор',
            position: 'полузащитник',
            dob: '02.05.2006',
            number: '12',
            games: 27 + 11, // 38
            goals: 12 + 3, // 15
            assists: 8 + 3, // 11
            yellowCards: 1 + 6, // 7
            redCards: 0,
            height: null,
            weight: null,
            nationality: 'Россия',
            matchPlayer: 1 // Игрок матча
        },
        {
            name: 'Бичан Станислав',
            position: 'защитник',
            dob: '17.03.2000',
            number: '6',
            games: 1 + 2, // 3
            goals: 1 + 2, // 3
            assists: 0,
            yellowCards: 1 + 0, // 1
            redCards: 0,
            height: null,
            weight: null,
            nationality: 'Россия',
            matchPlayer: 1 // Игрок матча
        },
        {
            name: 'Бектемиров Арсений',
            position: 'полузащитник',
            dob: '01.11.2007',
            number: '77',
            games: 13 + 2, // 15
            goals: 7 + 2, // 9
            assists: 8 + 1, // 9
            yellowCards: 0,
            redCards: 0,
            height: null,
            weight: null,
            nationality: 'Россия',
            matchPlayer: null // Игрок матча
        },
    ];
    
            
    
    

    // Фильтры и сортировка для команды
    const [sortBy, setSortBy] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');
    const [numberFilter, setNumberFilter] = useState('');
    const [positionFilter, setPositionFilter] = useState('');
    const [dobFilter, setDobFilter] = useState('');
    const [nameFilter, setNameFilter] = useState('');
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleSort = (newSortBy) => {
        // Если текущая сортировка такая же, меняем порядок
        if (sortBy === newSortBy) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(newSortBy);
            setSortOrder('asc'); // По умолчанию сортируем по возрастанию
        }
    };
    const [isEditing, setIsEditing] = useState(false);
    const [currentPlayer, setCurrentPlayer] = useState(null);
    const handleEdit = (player) => {
        setCurrentPlayer(player);
        setIsEditing(true);
    };

    

// Обработчик клика по игроку
const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
    setIsModalOpen(true);
};

// Закрытие модального окна
const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlayer(null);
};

// Внутреннее рендеринг модального окна
const renderPlayerModal = () => {
    if (!selectedPlayer) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <h2>{selectedPlayer.name}</h2>
                <img src={selectedPlayer.photo} alt={selectedPlayer.name} />
                <p><strong>Дата рождения:</strong> {selectedPlayer.dob}</p>
                <p><strong>Вес:</strong> {selectedPlayer.weight} кг</p>
                <p><strong>Рост:</strong> {selectedPlayer.height} см</p>
                <p><strong>Ведущая нога:</strong> {selectedPlayer.dominantFoot}</p>
                <p><strong>Возраст:</strong> {getAge(selectedPlayer.dob)}</p>
                {/* Добавьте другую информацию о статистике игрока, если нужно */}
            </div>
        </div>
    );
};

// Определяем возраст для сравнения
const getAge = (dob) => {
    const birthDate = new Date(dob.split('.').reverse().join('-'));
    const age = new Date().getFullYear() - birthDate.getFullYear() - 
        (new Date().getMonth() < birthDate.getMonth() || 
        (new Date().getMonth() === birthDate.getMonth() && new Date().getDate() < birthDate.getDate()) ? 1 : 0);
    return age;
};

// Сортировка игроков
const sortedPlayers = [...players].sort((a, b) => {
    let comparison = 0;

    if (sortBy === 'name') {
        comparison = a.name.localeCompare(b.name);
    } else if (sortBy === 'age') {
        comparison = getAge(a.dob) - getAge(b.dob);
    } else if (sortBy === 'number') {
        comparison = parseInt(a.number.replace('#', '')) - parseInt(b.number.replace('#', ''));
    } else if (sortBy === 'games') {
        comparison = a.games - b.games;
    } else if (sortBy === 'goals') {
        comparison = a.goals - b.goals;
    } else if (sortBy === 'assists') {
        comparison = a.assists - b.assists;
    } else if (sortBy === 'goalsPlusAssists') {
        comparison = (a.goals + a.assists) - (b.goals + b.assists);
    } else if (sortBy === 'yellowCards') {
        comparison = a.yellowCards - b.yellowCards;
    } else if (sortBy === 'redCards') {
        comparison = a.redCards - b.redCards;
    }

    return sortOrder === 'asc' ? comparison : -comparison;
});



// Фильтрация игроков
const filteredPlayers = sortedPlayers.filter(player => {
    return (
        (nameFilter === '' || (player.name && player.name.toLowerCase().includes(nameFilter.toLowerCase()))) &&
        (numberFilter === '' || (player.number && player.number.includes(numberFilter))) &&
        (positionFilter === '' || (player.position && player.position.includes(positionFilter)))
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
                        <h2>Новости команды</h2>
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
                                
                            </div>
        
                            <table className="team-table">
    <thead>
    <tr>
            <th onClick={() => handleSort('name')}>
                ФИО {sortBy === 'name' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
            </th>
            <th onClick={() => handleSort('age')}>
                Возраст {sortBy === 'age' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
            </th>
            <th onClick={() => handleSort('number')}>
                Номер {sortBy === 'number' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
            </th>
            <th onClick={() => handleSort('games')}>
                Игры {sortBy === 'games' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
            </th>
            <th onClick={() => handleSort('goals')}>
                Голы {sortBy === 'goals' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
            </th>
            <th onClick={() => handleSort('assists')}>
                Передачи {sortBy === 'assists' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
            </th>
            <th onClick={() => handleSort('goalsPlusAssists')}>
                Гол+Пас {sortBy === 'goalsPlusAssists' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
            </th>
            <th onClick={() => handleSort('yellowCards')}>
                ЖК {sortBy === 'yellowCards' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
            </th>
            <th onClick={() => handleSort('redCards')}>
                КК {sortBy === 'redCards' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
            </th>
        </tr>
    </thead>
    <tbody>
        {filteredPlayers.map((player) => (
            <tr key={player.number} onClick={() => handlePlayerClick(player)}>
                <td>{player.name}</td>
                <td>{new Date().getFullYear() - new Date(player.dob.split('.').reverse().join('-')).getFullYear() - 
                    (new Date().getMonth() < new Date(player.dob.split('.').reverse().join('-')).getMonth() || 
                    (new Date().getMonth() === new Date(player.dob.split('.').reverse().join('-')).getMonth() && new Date().getDate() < new Date(player.dob.split('.').reverse().join('-')).getDate()) ? 1 : 0)}</td>
                <td>{player.number}</td>
                <td>{player.games}</td>
                <td>{player.goals}</td>
                <td>{player.assists}</td>
                <td>{player.goals + player.assists}</td>
                <td>{player.yellowCards}</td>
                <td>{player.redCards}</td>
                
            </tr>
        ))}
        {isModalOpen && renderPlayerModal()}
    </tbody>
</table>

</div>
            );
            case 'albums':
                return <PhotoAlbum />;
            case 'contacts':
                  return (
                      <div className="contacts-container">
                          <h2 className="contacts-title">Контакты</h2>
                          <div className="contact-info">
                              <h3>Связаться с нами</h3>
                              <ul>
                                  <li>
                                      <strong>Email:</strong> <a href="mailto:vektor.life@mail.ru">vektor.life@mail.ru</a>
                                  </li>
                                  <li>
                                      <strong>Телефон:</strong> <a href="tel:+74942502169">+7(4942)50-21-69</a>
                                  </li>
                                  <li>
                                      <strong>Адрес:</strong> Кострома, ул. Ленина, д. 13Б
                                  </li>
                                  <li>
                                    <strong>Vektor.life:</strong><a href="https://vektor.life/"> вся недвижимость здесь</a>
                                  </li>
                              </ul>
                          </div>
                          <div className="social-media">
                              <h3>Следите за нами в социальных сетях</h3>
                              <ul>
                                  <li><a href="https://vk.com/fk_vector">ВКонтакте - сообщество ФК</a></li>
                                  <li><a href="https://t.me/fk_vector">Телеграм канал ФК</a></li>
                                  <li><a href="https://vk.com/vektor.life">ВКонтакте - сообщество агенства</a></li>
                                  
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
// Функции для показа дополнительной информации при наведении
const showPlayerInfo = (player) => {
    // Здесь можно реализовать логику показа дополнительной информации, например, использовать Modals или Tooltips
};

const hidePlayerInfo = () => {
    // Логика скрытия дополнительной информации
};

    useEffect(() => {
        localStorage.setItem('activeSection', activeSection);
    }, [activeSection]);

    return (
        <div className="container">
            <header>
                <h1>ФК "ВЕКТОР-НЕДВИЖИМОСТЬ"</h1>
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
                <p>&copy; 2025 ФК "ВЕКТОР-НЕДВИЖИМОСТЬ"</p>
            </footer>
        </div>
    );
}

export default App;
