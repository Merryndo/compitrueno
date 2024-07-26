function alerta() {
    Swal.fire({
        title: 'Lo sabía, no puedes resistirte a mis encantos!',
        icon: 'success',
        confirmButtonText: 'Cerrar',
        customClass: {
            popup: 'alerta-cute'
        }
    });
}
const noButton = document.querySelector('.no');

        noButton.addEventListener('mouseover', () => {

            noButton.style.top = `${Math.random() * 300}px`;

            noButton.style.left = `${Math.random() * 400}px`;

        });

        

        const noCover = document.createElement('div');

        noCover.classList.add('no-cover');

        noButton.appendChild(noCover);