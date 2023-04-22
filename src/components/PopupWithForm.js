import React from "react";

export default function PopupWithForm(props) {
    return (
        <div className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <h2 className="popup__title">{props.title}</h2>
                <form className={`popup__form popup__form_${props.name}`}
                    name={props.name} 
                    method="post" 
                    noValidate>
                    {props.children} 
                <button className="popup__button-save" 
                    type="submit"
                    aria-label="Сохранить">
                    {`${props.buttonText || 'Сохранить'}`}</button>
                </form>
                <button className="popup__button-close" 
                    type="button" 
                    aria-label="Выход"
                    onClick={props.onClose}></button>
            </div>
        </div>
    );
};