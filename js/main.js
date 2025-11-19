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

// ---------------------------
// Validação básica de Auth
// ---------------------------
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value.trim();
            const pass = document.getElementById('login-password').value;
            const feedback = document.getElementById('login-feedback');
            feedback.className = 'form-feedback';

            if (!email || !pass) {
                feedback.textContent = 'Preencha e-mail e senha.';
                feedback.classList.add('error');
                return;
            }

            // Simulação: aqui você integraria com sua API
            feedback.textContent = 'Autenticando...';
            feedback.classList.add('success');

            setTimeout(() => {
                feedback.textContent = 'Login bem-sucedido (simulado). Redirecionando...';
                // exemplo de redirecionamento para index
                window.location.href = 'index.html';
            }, 900);
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('reg-name').value.trim();
            const email = document.getElementById('reg-email').value.trim();
            const pass = document.getElementById('reg-password').value;
            const passConfirm = document.getElementById('reg-password-confirm').value;
            const feedback = document.getElementById('register-feedback');
            feedback.className = 'form-feedback';

            if (!name || !email || !pass || !passConfirm) {
                feedback.textContent = 'Preencha todos os campos.';
                feedback.classList.add('error');
                return;
            }

            if (pass.length < 6) {
                feedback.textContent = 'A senha deve ter pelo menos 6 caracteres.';
                feedback.classList.add('error');
                return;
            }

            if (pass !== passConfirm) {
                feedback.textContent = 'As senhas não coincidem.';
                feedback.classList.add('error');
                return;
            }

            feedback.textContent = 'Criando conta...';
            feedback.classList.add('success');

            setTimeout(() => {
                feedback.textContent = 'Conta criada (simulado). Redirecionando para login...';
                window.location.href = 'login.html';
            }, 1000);
        });
    }
});