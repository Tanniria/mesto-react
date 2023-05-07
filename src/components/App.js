import React, { useState, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ConfirmPopup from "./ConfirmPopup";
import api from '../utils/api';

export default function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
    const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});
    const [currentUser, setCurrentUser] = useState({});
    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([userInfo, cards]) => {
                setCurrentUser(userInfo);
                setCards(cards);
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`)
            })
    }, []);

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    };
    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    };
    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    };
    function handleCardClick(card) {
        setSelectedCard(card);
        setIsImagePopupOpen(true);
    };
    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsImagePopupOpen(false);
        setIsConfirmPopupOpen(false);
    };
    function handleUpdateUser(data) {
        setIsLoading(true);
        api
            .editUserInfo(data)
            .then((res) => {
                setCurrentUser(res);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`)
            })
            .finally(() => {
                setIsLoading(false);
            })
    };
    function handleUpdateAvatar(data) {
        setIsLoading(true);
        api
            .editAvatar(data)
            .then((res) => {
                setCurrentUser(res);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`)
            })
            .finally(() => {
                setIsLoading(false);
            })
    };
    function handleAddPlaceSubmit(card) {
        setIsLoading(true);
        api
            .addCard(card)
            .then((newCard) => {
                setCards([newCard, ...cards]);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`)
            })
            .finally(() => setIsLoading(false));
    };
    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api
            .changeLikeCardStatus(card._id, !isLiked)
            .then((newCard) => {
                setCards((state) =>
                    state.map((c) => (c._id === card._id ? newCard : c))
                );
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`)
            })
    };
    function handleCardDelete() {
        setIsLoading(true);
        api
            .deleteCard(selectedCard._id)
            .then(() => {
                setCards((cards) =>
                    cards.filter((item) => item._id !== selectedCard._id));
            })
            .then(() => closeAllPopups())
            .catch((err) => {
                console.log(`Ошибка: ${err}`)
            })
            .finally(() => setIsLoading(false))
    };
    function handleDeleteIcon(card) {
        setSelectedCard(card);
        setIsConfirmPopupOpen(true);
    };
    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Header />
                <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                    onCardLike={handleCardLike}
                    onCardDelete={handleDeleteIcon}
                    cards={cards} />
                <Footer />
                <EditProfilePopup
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    onUpdateUser={handleUpdateUser}
                    isLoading={isLoading} />
                <EditAvatarPopup
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                    onUpdateAvatar={handleUpdateAvatar}
                    isLoading={isLoading} />
                <AddPlacePopup
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                    onAddPlace={handleAddPlaceSubmit}
                    isLoading={isLoading} />
                <ConfirmPopup
                    isOpen={isConfirmPopupOpen}
                    onClose={closeAllPopups}
                    onConfirm={handleCardDelete}
                    isLoading={isLoading} />
                <ImagePopup
                    card={selectedCard}
                    isOpen={isImagePopupOpen}
                    onClose={closeAllPopups} />
            </div>
        </CurrentUserContext.Provider>
    );
};