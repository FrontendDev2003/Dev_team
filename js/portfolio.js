$(document).ready(function () {
    let currentIndex = 0; // Текущий индекс слайда
    const items = $(".portfolio__item"); // Все элементы с изображениями
    const totalItems = items.length; // Общее количество слайдов

    // Функция для изменения слайда
    function changeSlide(index) {
        // Рассчитываем смещение слайда по оси X
        const newTransformValue = -index * 100 + "%";
        $(".portfolio__gallery").css("transform", "translateX(" + newTransformValue + ")");
    }

    // Переход к следующему слайду
    $(".portfolio__arrow--right").click(function () {
        // Если индекс последнего слайда, переходим к первому
        currentIndex = (currentIndex + 1) % totalItems;
        changeSlide(currentIndex);
    });

    // Переход к предыдущему слайду
    $(".portfolio__arrow--left").click(function () {
        // Если индекс первого слайда, переходим к последнему
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        changeSlide(currentIndex);
    });
});


  
  
  
  
  
  
  