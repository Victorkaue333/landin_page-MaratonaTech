/**
 * Main application logic
 */

// Initialize Lucide Icons
// Checks if the library is loaded to avoid errors if the CDN fails
if (typeof lucide !== 'undefined') {
    lucide.createIcons();
}

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    revealElements.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
// Trigger once on load
revealOnScroll();

// FAQ Accordion Logic
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('i');

    question.addEventListener('click', () => {
        const isOpen = answer.style.maxHeight;
        
        // Close all others (Accordion style)
        document.querySelectorAll('.faq-answer').forEach(el => el.style.maxHeight = null);
        document.querySelectorAll('.faq-question i').forEach(el => el.style.transform = 'rotate(0deg)');

        // Toggle current
        if (!isOpen) {
            answer.style.maxHeight = answer.scrollHeight + "px";
            // Lucide chevron animation logic
            if(icon) icon.style.transform = 'rotate(180deg)';
        }
    });
});