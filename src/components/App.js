import React, { useState } from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';

export default function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});
    const [isPopupWithFormOpen, setPopupWithFormOpen] = useState(false);

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }
    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }
    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }
    function handleCardClick(card) {
        setSelectedCard(card);
        setIsImagePopupOpen(true);
    }
    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsImagePopupOpen(false);
        setPopupWithFormOpen(false);
    }

    return (
        <div className="page">
            <Header />
            <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            />
            <Footer/>
            <PopupWithForm
                name='profile'
                title='Редактировать профиль'
                buttonText='Сохранить'
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}>
                <label>
                    <input className="popup__input popup__input_value_name"
                        id="name__input"
                        name="name"
                        placeholder="Имя"
                        type="text"
                        minLength="2"
                        maxLength="40"
                        required/>
                    <span className="popup__input-error"
                        id="name__input-error"></span>
                </label>
                <label>
                    <input className="popup__input popup__input_value_job"
                        id="job__input"
                        name="job"
                        placeholder="О себе"
                        type="text"
                        minLength="2"
                        maxLength="200"
                        required/>
                    <span className="popup__input-error"
                        id="job__input-error"></span>
                </label>
            </PopupWithForm>
            <PopupWithForm
                name='place'
                title='Новое место'
                buttonText='Создать'
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}>
                <label>
                    <input className="popup__input popup__input_value_title"
                        id="title__input"
                        name="name"
                        placeholder="Название"
                        type="text"
                        minLength="2"
                        maxLength="30"
                        required/>
                    <span className="popup__input-error"
                        id="title__input-error"></span>
                </label>
                <label>
                    <input className="popup__input popup__input_value_link"
                        id="link__input"
                        name="link" 
                        placeholder="Ссылка на картинку"
                        type="url" 
                        required/>
                    <span className="popup__input-error"
                        id="link__input-error"></span>
                </label>
            </PopupWithForm>
            <PopupWithForm
                name='avatar'
                title='Обновить аватар'
                buttonText='Сохранить'
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}>
                <label>
                    <input className="popup__input popup__input_value_avatar"
                        id ="avatar__input"
                        name="avatar"
                        placeholder="Введите ссылку"
                        type="url"
                        required/>
                    <span className="popup__input-error"
                    id="avatar__input-error"></span>
                </label>
            </PopupWithForm>
            <PopupWithForm
                title='Вы уверены?'
                buttonText='Да'
                isOpen={isPopupWithFormOpen}
                onClose={closeAllPopups}>
            </PopupWithForm>
            <ImagePopup 
                card={selectedCard}
                isOpen={isImagePopupOpen}
                onClose={closeAllPopups}/>
        </div>
    );
}