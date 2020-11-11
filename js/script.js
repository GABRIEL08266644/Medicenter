//abre menu no celular
function menuToogle() {
    let menuArea = document.querySelector('.menu');
    if (menuArea.classList.contains('menu-open') == true ) {
        menuArea.classList.remove('menu-open');
    } else {
        menuArea.classList.add('menu-open');
    }
};

//abre o menu do "widget-depataments"
function widgetMenu() {
    let widgetarea = document.querySelector('.widget-depataments');
    if (widgetarea.classList.contains('widget-open') == true ) {
        widgetarea.classList.remove('widget-open');
    } else {
        widgetarea.classList.add('widget-open');
    }
};
