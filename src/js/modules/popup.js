import {getPopup} from "./main.js";
export const popup = () => {
    let close = document.querySelectorAll('.popup_content .popup_close'),
        Phonelinks = document.querySelectorAll('.phone_link'),
        popupEngineer = document.querySelector('.popup_engineer'),
        popupEngineerBtn = document.querySelectorAll('.popup_engineer_btn'),
        popup = document.querySelector('.popup');
    const getPopupengineer = () => {
        getPopup(popupEngineerBtn, popupEngineer, close);
    };
    const getPopupPhone = () => {
        getPopup(Phonelinks, popup, close);
    };
    const getPopupTimeOut = () => {
        setTimeout(function() {
            getPopup(null, popup, close);
        },60000);
    };
    getPopupengineer();
    getPopupPhone();
    getPopupTimeOut();
};