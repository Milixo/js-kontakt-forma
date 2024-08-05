document.querySelector('#contactForm').addEventListener('submit', function(event) {
    var name = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var message = document.querySelector('#message').value;
    var errorContainer = document.querySelector('#errorContainer');
    errorContainer.innerHTML = '';  // Clear previous errors

    if (!name || !email || !message) {
        event.preventDefault();
        errorContainer.textContent = 'Sva polja moraju biti popunjena!';
    }
});
