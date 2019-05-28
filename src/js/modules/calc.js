export const calc = () => {
    
    let balcons = document.querySelectorAll('.balcon_icons a');
    let bigImage = document.querySelectorAll('.big_img img');

    let obj = {};
    for(let i = 1; i < bigImage.length; i++) {
        bigImage[i].classList.remove('show');
        bigImage[i].classList.add('hide');
    }
    balcons.forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            let target = e.target;
            for(let i = 0; i < balcons.length; i++) {
                if(target == balcons[i] || target === balcons[i].querySelector('img')) {                   
                    for(let i = 0; i < bigImage.length; i++) {
                        bigImage[i].classList.remove('show');
                        bigImage[i].classList.add('hide');
                    }
                    if (bigImage[i].classList.contains('hide')) {
                        bigImage[i].classList.remove('hide');
                        bigImage[i].classList.add('show');
                    }
                }
            }

        });
    });
};