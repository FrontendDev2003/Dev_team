// Function to track elements entering/exiting the viewport
function handleContactsVisibility() {
    const contactItems = document.querySelectorAll('.contacts__item');
    const windowHeight = window.innerHeight;

    contactItems.forEach((item) => {
        const { top, bottom } = item.getBoundingClientRect();

        // If the top of the element is within 90% of the window height
        if (top < windowHeight * 0.9 && bottom > 0) {
            item.classList.add('visible'); // Add class when in view
        } else {
            item.classList.remove('visible'); // Remove class when out of view
        }
    });
}

// Attach scroll event handler
window.addEventListener('scroll', handleContactsVisibility);

// Trigger visibility check on page load
handleContactsVisibility();

