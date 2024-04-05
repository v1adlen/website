function copyPhoneNumber(element) {
    var phoneNumber = element.textContent.trim(); // Получаем текст номера телефона и удаляем возможные пробелы в начале и конце
    navigator.clipboard.writeText(phoneNumber) // Копируем текст номера телефона в буфер обмена
        .then(function() {
            alert("Номер телефону скопійовано: " + phoneNumber); // Выводим уведомление об успешном копировании
        })
        .catch(function(error) {
            console.error("Номер телефону не скопійовано: ", error); // Выводим ошибку, если копирование не удалось
        });
}
