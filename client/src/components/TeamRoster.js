// src/TeamRoster.js
import React from 'react';

// Пример данных о игроках
const players = [
    { id: 1, name: 'Игрок 1', position: 'Нападающий' },
    { id: 2, name: 'Игрок 2', position: 'Полузащитник' },
    { id: 3, name: 'Игрок 3', position: 'Защитник' },
    { id: 4, name: 'Игрок 4', position: 'Вратарь' },
];

function TeamRoster() {
    return (
        <div>
            <h1>Состав команды</h1>
            <ul>
                {players.map(player => (
                    <li key={player.id}>
                        {player.name} - {player.position}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TeamRoster;
