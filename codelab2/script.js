const form = document.querySelector('#custom-form');

form.addEventListener('submit', event => {
    event.preventDefault();
    let fullName = form.elements['fullName'].value;
    let email = form.elements['email'].value;
    let address = form.elements['address'].value;

    if (fullName == '' || email == '' || address == '') {
        alert('Anda harus mengisi data dengan lengkap');
    }
});