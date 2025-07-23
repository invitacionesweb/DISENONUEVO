const scriptUrl = 'https://script.google.com/macros/s/AKfycbw2ycg-irHpdrDTGdr6Nk5N7RlDGVIIupz75zFzYk6Lf-DjzGpoc_nW6XC3mXPJOAQ/exec';
const form = document.forms['asistenciaform'];

form.addEventListener('submit', e => {
    e.preventDefault()

    fetch(scriptUrl, {method: 'POST', body: new FormData(form)})
        .then(response => Swal.fire({
            title: "¡MUCHAS GRACIAS!",
            text: "Formulario Enviado",
            icon: "success"
        }))
        .then(() => { window.location.reload() })
        .catch(error => console.error('Error', error.message))
})
