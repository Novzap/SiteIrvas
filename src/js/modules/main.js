import {getPopup} from "./popup.js";
import {tabs} from "./tabs.js";
import {sizeImgScreen} from "./ImgFullScreen.js";
import {timer} from "./timer.js";
import {forms} from "./forms.js";
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

export const getTabs = () => {
    let tabsLink = document.querySelectorAll('.glazing_block');
    let tabsContent = document.querySelectorAll('.glazing .row');
    let DecorationLink = document.querySelectorAll('.decoration_item div');
    let DecorationContent = document.querySelectorAll('.decoration_content .decoration-item-content');

    tabs(tabsLink, tabsContent, 'active');
    tabs(DecorationLink, DecorationContent, 'after_click');
};

export const img = () => {
    sizeImgScreen();
};

export const getTimer = () => {
    timer();
};

export const getForms = () => {
    forms();
};