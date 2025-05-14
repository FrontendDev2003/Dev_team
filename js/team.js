document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = document.querySelectorAll('.team__member');

    const handleScroll = () => {
        const windowHeight = window.innerHeight;

        teamMembers.forEach(member => {
            const memberRect = member.getBoundingClientRect();

            // Элемент видим, если его верхняя часть попадает в 80% области видимости
            if (memberRect.top < windowHeight * 0.8 && memberRect.bottom > 0) {
                member.classList.add('visible');
            } else {
                member.classList.remove('visible');
            }
        });
    };

    // Добавляем обработчик на прокрутку
    window.addEventListener('scroll', handleScroll);

    // Проверяем элементы при загрузке страницы
    handleScroll();
});

