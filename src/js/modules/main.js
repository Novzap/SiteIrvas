
export const getPopup = (btn, popup, close) => {
    const popupShow = () => {
        btn.addEventListener('click', function() {
            popup.classList.add('js-popupShow');
        });
    };
    const popupClose = () => {
        popup.addEventListener('click', function(e) {
            if(popup === e.target) {
                popup.classList.remove('js-popupShow');
            }
        });
        close.addEventListener('click', function() {
            popup.classList.remove('js-popupShow');
        });
    };
    popupShow();
    popupClose();
};