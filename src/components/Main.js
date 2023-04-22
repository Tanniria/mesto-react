import React, { useState, useEffect} from 'react';
import api from '../utils/api';
import Card from './Card';

export default function Main ({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    // useEffect(() => {
    //     const useDataFromServer = [api.getUserInfo(), api.getInitialCards()];
    //     let myId;
    //     Promise.all(useDataFromServer)
    //     .then(([data, cards]) => {
    //         setUserName(data.name);
    //         setUserDescription(data.about);
    //         setUserAvatar(data.avatar);
    //         setCards(cards);
    //     })
        // .catch((err) => {
        //     console.log(`Ошибка: ${err}`)
        //   });
    // }, []);
    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
        .then(([data, cards]) => {
            setUserName(data.name);
            setUserDescription(data.about);
            setUserAvatar(data.avatar);
            setCards(cards);
        })
        .catch((err) => {
            console.log(`Ошибка: ${err}`)
        })
    }, []);

    return (
        <main className="main">
            <section className="profile">
            <div className="profile__container-avatar">
                <button className="profile__button-avatar"
                    type="button"
                    aria-label="Кнопка редактирования аватара"
                    onClick={onEditAvatar}>
                </button>
                <img className="profile__avatar"
                    src={userAvatar}
                    alt={userName}/>
            </div>
            
            <div className="profile__form">
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button className="profile__button-edit"
                    type="button"
                    aria-label="Редактировать"
                    onClick={onEditProfile}></button>
                </div>
                <p className="profile__job">{userDescription}</p>
            </div>
            <button className="profile__button-add"
            type="button"
            aria-label="Добавить"
            onClick={onAddPlace}></button>
            </section>

            <section className="feed">
                <ul className="feed__list">
                    {cards.map((card) => { 
                        <Card 
                            card={card} 
                            key={card._id}
                            onCardClick={onCardClick}/>
                    })}
                </ul>
            </section>
        </main>
    );
};