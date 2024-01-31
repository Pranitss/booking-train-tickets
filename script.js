document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form values
    var origin = document.getElementById('origin').value;
    var destination = document.getElementById('destination').value;
    var date = document.getElementById('date').value;
    var departureTime = document.getElementById('departureTime').value;
    var passengers = document.getElementById('passengers').value;
    var food = document.getElementById('food').checked ? 'Yes' : 'No';
    var email = document.getElementById('email').value;

    // Example of displaying the result
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = `Ticket booked from ${origin} to ${destination} on ${date} (${departureTime} departure), for ${passengers} passengers. Food: ${food}`;

    // Send confirmation email (placeholder function)
    sendConfirmationEmail(email);
});

function sendConfirmationEmail(email) {
    // Placeholder for sending confirmation email (not functional in this example)
    console.log(`Confirmation email sent to: ${email}`);
}
