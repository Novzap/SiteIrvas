export const sizeImgScreen = () => {
    let linkImg = document.querySelectorAll('.works a');
    let div = document.createElement('div');
    div.classList.add('wrap-img');
    let bigImg = document.querySelectorAll('.lupa');
    for(let i = 0; i < linkImg.length; i++) {
        linkImg[i].appendChild(div);
    }
    let div2 = document.querySelectorAll('.wrap-img');
    for(let i = 0; i < div2.length; i++) {
        div2[i].appendChild(bigImg[i]);
    }
    linkImg.forEach(item => {
        item.addEventListener('click', function(e) {
          e.preventDefault();
          div.classList.add('show');
          div.firstChild.style.display = 'block';
  
        });
    });
    div.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if(e.target === this) {
            this.classList.remove('show');
        }
    });
};