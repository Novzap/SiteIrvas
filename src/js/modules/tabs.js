export const tabs = (tabsLink, tabsContent, styleClass) => {
    "use strict";
    for(let i = 1; i < tabsContent.length; i++) {
        tabsContent[i].classList.remove('show');
        tabsContent[i].classList.add('hide');
    }
    tabsLink[0].classList.add(styleClass);
    tabsLink.forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            let target = e.target;
                for(let i = 0; i < tabsLink.length; i++) {
                    if(target == tabsLink[i] || target === tabsLink[i].querySelector('a') || target === tabsLink[i].querySelector('img')) {
                        for(let i = 0; i < tabsContent.length; i++) {
                            tabsContent[i].classList.remove('show');
                            tabsContent[i].classList.add('hide');
                            if(styleClass === 'active') {
                                tabsLink[i].querySelector('a').classList.remove(styleClass);
                            } else {
                                tabsLink[i].classList.remove(styleClass);
                            }
                        }
                        if (tabsContent[i].classList.contains('hide')) {
                            tabsContent[i].classList.remove('hide');
                            tabsContent[i].classList.add('show');
                            if(styleClass === 'active') {
                                tabsLink[i].querySelector('a').classList.add(styleClass);
                            } else {
                                tabsLink[i].classList.add(styleClass);
                            }
                        }
                    }
                }
        });
    });
};