import {getPopup} from "./popup.js";
import {tabs} from "./tabs.js";
import {sizeImgScreen} from "./ImgFullScreen.js";
import {timer} from "./timer.js";
import {forms} from "./forms.js";
import {calc} from "./calc.js";
export const popup = () => {
    let close = document.querySelectorAll('.popup_content .popup_close'),
        Phonelinks = document.querySelectorAll('.phone_link'),
        popupEngineer = document.querySelector('.popup_engineer'),
        popupEngineerBtn = document.querySelectorAll('.popup_engineer_btn'),
        popup = document.querySelector('.popup'),
        calcBtn = document.querySelectorAll('.popup_calc_btn.glazing_price_btn'),
        popupCalc = document.querySelector('.popup_calc'),
        popupCalcClose = document.querySelectorAll('.popup_calc_close'),
        calcBtn2 = document.querySelector('.popup_calc .popup_calc_button'),
        a,
        b,
        obj = {},
        popupCalc2 = document.querySelector('.popup_calc_profile'),
        calcBtn3 = document.querySelector('.popup_calc_profile_button'),
        popupCalc3 = document.querySelector('.popup_calc_end');
        let popupClose2 = document.querySelectorAll('.popup_calc_profile_close');
        let popupClose3 = document.querySelectorAll('.popup_calc_end_close');
        let width = document.querySelector('#width');
        let height = document.querySelector('#height');

    const getPopupengineer = () => {
        getPopup(popupEngineerBtn, popupEngineer, close, false);
    };
    const getPopupPhone = () => {
        getPopup(Phonelinks, popup, close, false);
    };
    const getPopupTimeOut = () => {
        setTimeout(function() {
            getPopup(null, popup, close, false);
        },60000);
    };
    const getPopupCalc = () => {
        a = getPopup(calcBtn, popupCalc, popupCalcClose, true);
        calcBtn2.addEventListener('click', function() {
            a.classList.remove('js-popupShow');
            b = getPopup(null, popupCalc2, popupClose2, true);
             
            obj.width = width.value;
            obj.height = height.value;
        });
        width.addEventListener('input', function(e) {
            if(width.name !== 'email' && width.name !== 'user_name') {
                if(e.data.search(/[0-9\+]/)) {
                    this.value = '';
                }
            }
        });
        height.addEventListener('input', function(e) {
            if(height.name !== 'email' && height.name !== 'user_name') {
                if(e.data.search(/[0-9\+]/)) {
                    this.value = '';
                }
            }
        });
    };

        calcBtn3.addEventListener('click', function() {
            b.classList.remove('js-popupShow');  
            getPopup(null, popupCalc3, popupClose3, true);
            obj.mode = document.querySelector('input[name="checkbox-test"]:checked').value;
            console.log(obj);
        });

    getPopupengineer();
    getPopupPhone();
    getPopupTimeOut();
    getPopupCalc();
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

export const calcPopup = () => {
    calc();
};