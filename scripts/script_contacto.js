document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Por favor, completa todos los campos del formulario.');
        return;
    }

    alert(`¡Gracias por contactarnos, ${name}!\nHemos recibido tu mensaje y te responderemos a la brevedad.`);
    this.reset();
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

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const isNameValid = validateField(
        document.getElementById('name'),
        /^[A-Za-zÀ-ÿ\s]+$/,
        'El nombre solo puede contener letras y no debe comenzar con un espacio.'
    );

    const isTelefonoValid = validateField(
        document.getElementById('telefono'),
        /^\d+$/,
        'El número de teléfono es obligatorio y solo debe contener números.'
    );

    const isEmailValid = validateField(
        document.getElementById('email'),
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Introduce un correo electrónico válido.'
    );

    const isMessageValid = validateField(
        document.getElementById('message'),
        /.+/,
        'El mensaje no puede estar vacío.'
    );

    if (isNameValid && isTelefonoValid && isEmailValid && isMessageValid) {
        alert('Formulario enviado correctamente.');
        this.reset();
    }
});

document.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('blur', function () {
        if (this.id === 'name') {
            validateField(this, /^[A-Za-zÀ-ÿ\s]+$/, 'El nombre solo puede contener letras y no debe comenzar con un espacio.');
        } else if (this.id === 'telefono') {
            validateField(this, /^\d+$/, 'El número de teléfono es obligatorio y solo debe contener números.');
        } else if (this.id === 'email') {
            validateField(this, /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Introduce un correo electrónico válido.');
        } else if (this.id === 'message') {
            validateField(this, /.+/, 'El mensaje no puede estar vacío.');
        }
    });

    field.addEventListener('input', function () {
        if (this.value[0] === ' ') {
            this.value = this.value.trimStart();
        }
    });
});
