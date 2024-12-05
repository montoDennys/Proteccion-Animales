function mostrarFormulario() {
    const form = document.getElementById('add-post-form');
    form.classList.toggle('hidden');
}

document.getElementById('postForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const excerpt = document.getElementById('excerpt').value;

    if (title === '' || excerpt === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const post = document.createElement('article');
    post.classList.add('post');
    post.innerHTML = `
        <h3 class="post-title">${title}</h3>
        <p class="post-date">Publicado el: ${new Date().toLocaleDateString()}</p>
        <p class="post-excerpt">${excerpt}</p>
        <a href="#" class="read-more">Leer más</a>
    `;

    document.getElementById('blog-posts').appendChild(post);

    document.getElementById('postForm').reset();

    mostrarFormulario();
});
