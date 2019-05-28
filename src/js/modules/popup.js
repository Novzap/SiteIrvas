export const getPopup = (btn, popup, close, closeDown) => {
    "use strict";
    const popupShow = () => {
        if(btn === null) {
            popup.classList.add('js-popupShow');
            return;
        }
        for(let i = 0; i < btn.length; i++) {
            btn[i].addEventListener('click', function(e) {
                e.preventDefault();
                popup.classList.add('js-popupShow');
            });
        }


    };
    const popupClose = () => {
        for(let i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                popup.classList.remove('js-popupShow');
            });
        }
            popup.addEventListener('click', function(e) {
                if(popup === e.target && !closeDown) {
                    popup.classList.remove('js-popupShow');
                }
            });
    };
    popupShow();
    popupClose();
    return popup;
};