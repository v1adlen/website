document.addEventListener('DOMContentLoaded', function() {
    var phoneHeaderLinks = document.querySelectorAll('.phone_numbers a'); // Получаем все ссылки внутри элемента с классом 'phone_numbers'
    var phoneFooterLinks = document.querySelectorAll('.phone_footer .numbers a'); // Получаем все ссылки внутри элемента с классом 'phone_footer' и классом 'numbers'
  
    phoneHeaderLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке по умолчанию
  
        var phoneNumber = link.innerText.trim(); // Получаем текст ссылки (номер телефона) и убираем лишние пробелы
  
        // Создаем временный элемент для копирования текста
        var tempInput = document.createElement('textarea');
        tempInput.value = phoneNumber;
        document.body.appendChild(tempInput);
  
        // Выделяем текст во временном элементе
        tempInput.select();
        tempInput.setSelectionRange(0, 99999);
  
        // Копируем текст в буфер обмена
        document.execCommand('copy');
  
        // Удаляем временный элемент
        document.body.removeChild(tempInput);
  
        // Визуальное подтверждение копирования
        alert('Номер телефону скопійовано: ' + phoneNumber);
      });
    });

    phoneFooterLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
          event.preventDefault(); // Предотвращаем переход по ссылке по умолчанию
    
          var phoneNumber = link.innerText.trim(); // Получаем текст ссылки (номер телефона) и убираем лишние пробелы
    
          // Создаем временный элемент для копирования текста
          var tempInput = document.createElement('textarea');
          tempInput.value = phoneNumber;
          document.body.appendChild(tempInput);
    
          // Выделяем текст во временном элементе
          tempInput.select();
          tempInput.setSelectionRange(0, 99999);
    
          // Копируем текст в буфер обмена
          document.execCommand('copy');
    
          // Удаляем временный элемент
          document.body.removeChild(tempInput);
    
          // Визуальное подтверждение копирования
          alert('Номер телефону скопійовано: ' + phoneNumber);
        });
      });
  });

  

