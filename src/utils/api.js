class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    };

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    };
    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            method: 'GET',
            headers: this._headers,
        })
            .then((res) => this._checkResponse(res));
    };
    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers,
        })
            .then((res) => this._checkResponse(res))
    };
    editUserInfo(data) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.job,
            }),
        })
            .then((res) => this._checkResponse(res));
    };
    editAvatar(data) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar,
            }),
        })
            .then((res) => this._checkResponse(res));
    };
    addCard(data) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            'Content-Type': 'application/json',
            body: JSON.stringify({
                name: data.name,
                link: data.link,
            }),
        })
            .then((res) => this._checkResponse(res));
    };
    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers,
            'Content-Type': 'application/json',
        })
            .then((res) => this._checkResponse(res));
    };
    changeLikeCardStatus(cardId, isLiked) {
        if (isLiked) {
            return fetch(`${this._url}/cards/${cardId}/likes`, {
                method: "PUT",
                headers: this._headers,
            })
                .then((res) => this._checkResponse(res));
        } else {
            return fetch(`${this._url}/cards/${cardId}/likes`, {
                method: 'DELETE',
                headers: this._headers,
            })
                .then((res) => this._checkResponse(res));
        };
    };
};

const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-62',
    headers: {
        Authorization: 'f71e956f-38a7-4a42-a0a9-eb7efb8f8d45',
        'Content-Type': 'application/json',
    }
});

export default api;