document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;  // Obtiene la respuesta siguiente al botón
        answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';  // Alterna entre mostrar/ocultar
    });
});
