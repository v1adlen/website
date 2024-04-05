window.addEventListener('scroll', function() {
    var container = document.querySelector('.container');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 70) { // Измените 200 на нужное вам значение прокрутки
        container.style.backgroundColor = '#15141D';
    } else {
        container.style.backgroundColor = ''; // Это удалит встроенный стиль, вернув цвет фона к его изначальному состоянию
    }
});
