document.addEventListener('DOMContentLoaded', function() {
    // Получаем все иконки внутри футера
    const icons = document.querySelectorAll('.footer a');

    // Добавляем обработчик события для каждой иконки
    icons.forEach(icon => {
        icon.addEventListener('click', (event) => {
            event.preventDefault(); // Предотвращаем стандартное действие браузера
            // Ваш код обработчика события
            // Например, можно добавить функциональность для каждой иконки здесь
            console.log('Иконка нажата!');
        });
    });
});
