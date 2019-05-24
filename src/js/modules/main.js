
export const getPopup = (btn, popup, close) => {
    const popupShow = () => {
        if(btn === null) {
            popup.classList.add('js-popupShow');
            return;
        }
        for(let i = 0; i < btn.length; i++) {
            btn[0].addEventListener('click', function() {
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
            if(popup === e.target) {
                popup.classList.remove('js-popupShow');
            }
        });
    };
    popupShow();
    popupClose();
};