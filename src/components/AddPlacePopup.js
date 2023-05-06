import React, { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup({
    isOpen,
    onClose,
    onAddPlace,
    isLoading
}) {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    function handleChangeName(e) {
        setName(e.target.value);
    };
    function handleChangeLink(e) {
        setLink(e.target.value);
    };
    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({
            name,
            link,
        });
    };

    useEffect(() => {
        setName('');
        setLink('');
    }, [isOpen]);

    return (
        <PopupWithForm
            name='place'
            title=' Новое место'
            buttonText={isLoading ? 'Создание...' : 'Создать'}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <label>
                <input
                    className="popup__input popup__input_value_title"
                    id="title__input"
                    type="text"
                    name="name"
                    placeholder="Название"
                    minLength="2"
                    maxLength="30"
                    required
                    onChange={handleChangeName}
                    value={name}
                />
                <span
                    className="popup__input-error"
                    id="title__input-error">
                </span>
            </label>
            <label>
                <input
                    className="popup__input popup__input_value_link"
                    id="link__input"
                    name="link"
                    placeholder="Ссылка на картинку"
                    type="url"
                    required
                    onChange={handleChangeLink}
                    value={link} />
                <span
                    className="popup__input-error"
                    id="link__input-error">
                </span>
            </label>
        </PopupWithForm>
    );
};
