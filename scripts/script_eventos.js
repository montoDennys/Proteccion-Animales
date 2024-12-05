// Lista de eventos 
const eventos = [
    {
        titulo: "Campaña de Esterilización Gratuita",
        fecha: "2024-12-15",
        hora: "10:00 AM",
        lugar: "Parque Central",
        descripcion: "Un evento para ofrecer esterilización gratuita a mascotas."
    },
    {
        titulo: "Marcha por la Protección Animal",
        fecha: "2024-12-20",
        hora: "4:00 PM",
        lugar: "Centro Cívico",
        descripcion: "Marcha para promover leyes que protejan a los animales."
    },
    {
        titulo: "Evento de Adopción",
        fecha: "2024-11-25",
        hora: "9:00 AM",
        lugar: "Refugio San Benito",
        descripcion: "Encuentra tu próximo amigo peludo en nuestro evento de adopción."
    },
    {
        titulo: "Charla sobre Bienestar Animal",
        fecha: "2024-10-10",
        hora: "6:00 PM",
        lugar: "Biblioteca Municipal",
        descripcion: "Una charla educativa sobre el bienestar animal."
    }
];

function cargarEventos() {
    const contenedor = document.getElementById('events-list');
    contenedor.innerHTML = ''; 
    const ahora = new Date();
    eventos.forEach(evento => {
        const fechaEvento = new Date(evento.fecha);
        const esFuturo = fechaEvento >= ahora;

        const card = document.createElement('div');
        card.classList.add('event-card');
        card.setAttribute('data-futuro', esFuturo);

        card.innerHTML = `
            <h3>${evento.titulo}</h3>
            <p class="event-date">Fecha: ${fechaEvento.toLocaleDateString()}</p>
            <p>Hora: ${evento.hora}</p>
            <p class="event-location">Lugar: ${evento.lugar}</p>
            <p>${evento.descripcion}</p>
        `;
        contenedor.appendChild(card);
    });
}

function mostrarEventos(tipo) {
    const cards = document.querySelectorAll('.event-card');
    cards.forEach(card => {
        const esFuturo = card.getAttribute('data-futuro') === 'true';
        if (tipo === 'futuros' && esFuturo) {
            card.style.display = 'block';
        } else if (tipo === 'pasados' && !esFuturo) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Cargar todos los eventos al iniciar
document.addEventListener('DOMContentLoaded', cargarEventos);
