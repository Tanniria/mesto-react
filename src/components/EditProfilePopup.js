import React, { useState, useContext, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


export default function EditProfilePopup({
    isOpen,
    onClose,
    onUpdateUser,
    isLoading
}) {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    function handleChangeName(evt) {
        setName(evt.target.value)
    };
    function handleChangeDescription(evt) {
        setDescription(evt.target.value)
    };
    function handleSubmit(evt) {
        evt.preventDefault();
        onUpdateUser({
            name,
            job: description,
        });
    };
    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about)
    },
        [currentUser, isOpen]);

    return (
        <PopupWithForm
            name='profile'
            title='Редактировать профиль'
            buttonText={isLoading ? 'Сохранение...' : 'Сохранить'}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <label>
                <input
                    className="popup__input popup__input_value_name"
                    id="name__input"
                    type="text"
                    name="name"
                    placeholder="Имя"
                    minLength="2"
                    maxLength="40"
                    required
                    onChange={handleChangeName}
                    value={name} />
                <span
                    className="popup__input-error"
                    id="name__input-error"></span>
            </label>
            <label>
                <input className="popup__input popup__input_value_job"
                    id="job__input"
                    type="text"
                    name="job"
                    placeholder="О себе"
                    minLength="2"
                    maxLength="200"
                    required
                    onChange={handleChangeDescription}
                    value={description} />
                <span
                    className="popup__input-error"
                    id="job__input-error"></span>
            </label>
        </PopupWithForm>
    );
};