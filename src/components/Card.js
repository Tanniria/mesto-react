import React from "react";

export default function Card({ card, onCardClick }) {
    function handleClick() {
        onCardClick(card);
    }

    return (
        <li className="feed__item">
            <button className="feed__button-delete"></button>
            <img className="feed__img" 
                src={card.link} 
                alt={card.name} 
                onClick={handleClick} />
            <div className="feed__overview">
                <h2 className="feed__title">{card.name}</h2>
                <div className="feed__like-container">
                    <button className="feed__button-like"
                    type="button"
                    aria-label="Лайк"></button>
                    <p className="feed__like-counter">
                        {card.likes.length}</p>
                </div>
            </div>
        </li>
    );
};