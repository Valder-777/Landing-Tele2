
    (function () {
    var updateCity = document.getElementById("updateCity"); //Записываем в переменную кнопку геолокации
    var cancelButton = document.getElementById("cancel"); // Записываем в переменную кнопку "закрыть (модальное окно с выбором города)"
    var cityPopup = document.querySelector(".popup-city"); // Записываем в переменную диалоговое окно (модальное окно с выбором города)"

    // Кнопка "Update button" открывает модальное окно
    updateCity.addEventListener("click", function () {
      cityPopup.classList.toggle("visible")
    });

    // Кнопка "cancelButton" закрывает модальное окно
    cancelButton.addEventListener("click", function () {
      cityPopup.classList.toggle("visible")
    });

    // Записываем в переменную все кнопки с классом ".button-change-city"
    var cityButtons = document.querySelectorAll(".cities-wrapper__btn"); 
    cityButtons.forEach((button) => {
      // Проходимся по всем кнопкам
      button.addEventListener("click", function () {

        // Вешаем на каждую кнопку функцию, которая записывает в LocalStorage название города
        let cityName = this.textContent;

        localStorage.setItem("selectedCity", cityName);

        document.getElementById("main-city").textContent = cityName;
        // Меняем город в шапке сайта на город, выбранный в модальном окне
        cityPopup.classList.toggle("visible")
        // Закрываем модальное окно
      });
    });

    // Загружаем выбранный город из локального хранилища при загрузке страницы
    var selectedCity = localStorage.getItem("selectedCity");
    if (selectedCity) {
      document.getElementById("main-city").textContent = selectedCity;
    }

  })();


  // Модальное окно для кнопки "Принять участие"
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("updatePromo");
  var span = document.getElementsByClassName("close")[0];

  // При нажатии кнопки окно открывается
  btn.onclick = function () {
    modal.style.display = "block";
  }

  // Клик по кнопке <span> (x) закрывает окно
  span.onclick = function () {
    modal.style.display = "none";
  }

  // Клик за областью окна закрывает окно
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  //Валидация формы
    let inputs = document.querySelectorAll('input[data-rules]');

    inputs.forEach((input) => {
      input.addEventListener('input', function () {
        let check;

        switch (this.dataset.rules) {
          case 'tel':
            check = /^[+]?\d+$/.test(this.value);
            break;
        }
        if (check) {
          this.classList.remove('invalid');
          this.classList.add('valid');
        } else {
          this.classList.remove('valid');
          this.classList.add('invalid');
        }
      })
    })
    
