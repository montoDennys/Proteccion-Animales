document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector(".formulario");

    function mostrarError(input, mensaje) {
        let error = input.nextElementSibling;
        if (!error || !error.classList.contains("error-mensaje")) {
            error = document.createElement("div");
            error.classList.add("error-mensaje");
            error.style.color = "red";
            error.style.marginTop = "5px";
            input.after(error);
        }
        error.textContent = mensaje;
    }

    // Función para limpiar el mensaje de error debajo del campo
    function limpiarError(input) {
        const error = input.nextElementSibling;
        if (error && error.classList.contains("error-mensaje")) {
            error.remove();
        }
    }

    formulario.addEventListener("input", (event) => {
        const input = event.target;

        if (["nombre", "email", "mensaje", "telefono"].includes(input.id)) {
            if (input.value.startsWith(" ")) {
                input.value = input.value.trimStart(); 
                mostrarError(input, "El primer carácter no puede ser un espacio.");
            } else {
                limpiarError(input);
            }
        }

        if (input.id === "email") {
            const emailRegexPermitidos = /^[a-zA-Z0-9@._-]*$/; 
            if (!emailRegexPermitidos.test(input.value)) {
                input.value = input.value.replace(/[^a-zA-Z0-9@._-]/g, ""); 
                mostrarError(input, "El correo contiene caracteres no válidos.");
            } else {
                limpiarError(input);
            }
        }

        // Validar solo números en el campo de teléfono
        if (input.id === "telefono") {
            if (/\D/.test(input.value)) {
                input.value = input.value.replace(/\D/g, ""); 
                mostrarError(input, "Solo se permiten números en este campo.");
            } else {
                limpiarError(input);
            }
        }
    });

    // Validaciones al enviar el formulario
    formulario.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevenir el envío
        let valido = true;

        // Validar nombre
        const nombre = document.getElementById("nombre");
        if (!/^[a-zA-Z\s]+$/.test(nombre.value)) {
            mostrarError(nombre, "El nombre solo debe contener letras y espacios.");
            valido = false;
        }

        // Validar teléfono
        const telefono = document.getElementById("telefono");
        if (telefono.value === "" || !/^\d+$/.test(telefono.value)) {
            mostrarError(telefono, "El teléfono es obligatorio y debe contener solo números.");
            valido = false;
        }

        // Validar correo
        const email = document.getElementById("email");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            mostrarError(email, "Ingresa un correo válido.");
            valido = false;
        }
        if (email.value.startsWith(" ")) {
            mostrarError(email, "El correo no puede iniciar con un espacio.");
            valido = false;
        }

        // Validar tipo de ayuda
        const tipoAyuda = document.getElementById("tipo-ayuda");
        if (tipoAyuda.value === "") {
            mostrarError(tipoAyuda, "Por favor, selecciona una opción.");
            valido = false;
        } else {
            limpiarError(tipoAyuda);
        }

        // Validar mensaje
        const mensaje = document.getElementById("mensaje");
        if (mensaje.value.length > 200) {
            mostrarError(mensaje, "El mensaje no puede superar los 200 caracteres.");
            valido = false;
        }

        // Si todo es válido
        if (valido) {
            alert("Formulario enviado correctamente.");
            formulario.reset(); // Limpiar el formulario
            document.querySelectorAll(".error-mensaje").forEach((error) => error.remove());
        }
    });
});
