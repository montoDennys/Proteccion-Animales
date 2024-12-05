document.getElementById('donationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const amount = document.getElementById('amount').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;

    // Validar nombre
    const nameValid = validateField(
        document.getElementById('name'),
        /^[A-Za-zÀ-ÿ\s]+$/,
        'El nombre solo puede contener letras y no debe comenzar con un espacio.',
    );
    if (!nameValid) isValid = false;

    // Validar correo
    const emailValid = validateField(
        document.getElementById('email'),
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Introduce un correo electrónico válido.',
    );
    if (!emailValid) isValid = false;

    // Validar monto
    const amountValid = validateField(
        document.getElementById('amount'),
        /^\d+(\.\d{1,2})?$/,  // Validar monto con hasta 2 decimales
        'El monto debe ser un número válido.',
    );
    if (!amountValid) isValid = false;

    // Si todo es válido
    if (isValid) {
        alert(`Gracias por tu donación de $${amount} USD!`);
        this.reset(); // Reinicia el formulario después del envío
    }
});

function validateField(field, regex, errorMsg) {
    const errorElement = document.getElementById(`${field.id}-error`);
    const value = field.value.trim();

    if (value === '' || !regex.test(value)) {
        errorElement.textContent = errorMsg;
        errorElement.style.display = 'block';
        field.classList.add('error');
        return false;
    } else {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
        field.classList.remove('error');
        return true;
    }
}

document.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('input', function () {
        if (this.value[0] === ' ') {
            this.value = this.value.trimStart();
        }
    });
});
