const formValidationConfig = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
};

const initialCards = [
    {
      name: 'Каолиновый карьер',
      link: 'https://images.unsplash.com/photo-1634767704190-74f517c9ab1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
      name: 'Таганай',
      link: 'https://images.unsplash.com/photo-1625589934405-a180c2e53aa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      name: 'Деревня Голубино',
      link: 'https://moya-planeta.ru/upload/images/xl/a1/8f/a18f565ad49e76f2cfb2cd05d47251859a8564f1.jpg'
    },
    {
      name: 'Озеро Джека Лондона',
      link: 'https://moya-planeta.ru/upload/images/xl/73/f0/73f0687eb0659d975338e290bef8545ab9b4ca60.jpg'
    },
    {
      name: 'Берег Каспия',
      link: 'https://moya-planeta.ru/upload/images/xl/6f/01/6f01b3440cf555e801e631e1805d572446781fb0.jpg'
    },
    {
      name: 'Остров Ушишир',
      link: 'https://moya-planeta.ru/upload/images/xl/65/ed/65ed66361008d56ad066b5ac32080f058d507896.jpg'
    }
  ];

const buttonOpenEditProfile = document.querySelector('.profile__button-edit');
const buttonOpenAddCardPopup = document.querySelector('.profile__button-add');
const buttonOpenEditAvatar = document.querySelector('.profile__button-avatar');

const formEditProfile = document.querySelector('.popup__form_edit');
const formAddCard = document.querySelector('.popup__form_add');
const formEditAvatar = document.querySelector('.popup__form_avatar');

const nameInput = document.querySelector('.popup__input_value_name');
const jobInput = document.querySelector('.popup__input_value_job');
// const inputAvatar = document.querySelector('.popup__input_value_avatar');
// const userAvatar = document.querySelector('.profile__avatar');

export { 
  // initialCards,
  formValidationConfig,
  buttonOpenEditProfile,
  buttonOpenAddCardPopup,
  buttonOpenEditAvatar,
  formEditProfile,
  formAddCard,
  formEditAvatar,
  nameInput,
  jobInput
 };