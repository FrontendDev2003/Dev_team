document.addEventListener("DOMContentLoaded", () => {
    const serviceItems = document.querySelectorAll(".services__list-item");

    // Проверяем видимость элемента
    const isElementInView = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom > 0
        );
    };

    // Добавляем класс при скролле
    const handleScroll = () => {
        serviceItems.forEach((item) => {
            if (isElementInView(item)) {
                item.classList.add("services__list-item--visible");
            } else {
                item.classList.remove("services__list-item--visible");
            }
        });
    };

    // Слушаем события
    window.addEventListener("scroll", handleScroll);

    // Проверяем состояние элементов при загрузке страницы
    handleScroll();
});
