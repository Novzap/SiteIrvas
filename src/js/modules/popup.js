import {getPopup} from "./main.js";
export const popup = () => {
    let popups = [document.querySelector('.popup_engineer')];
    const popupengineer = () => {
        getPopup(document.querySelector('.popup_engineer_btn'), popups[0], document.querySelector('.popup_engineer .popup_close'));
    };
    popupengineer();
};