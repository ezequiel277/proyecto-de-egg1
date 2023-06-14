// Código JS para validar el inicio de sesión
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = form.querySelector('#username').value.trim();
    const password = form.querySelector('#password').value.trim();

    if (username === 'admin' && password === 'admin') {
        alert('Inicio de sesión exitoso');
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});
