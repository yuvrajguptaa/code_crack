// JavaScript for appointment.html

document.getElementById('appointmentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    var name = document.getElementById('name').value;
    var contact = document.getElementById('contact').value;
    var doctor = document.getElementById('doctor').value; // Fetch the selected doctor's value
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    // Simple validation
    if (!name || !contact || !doctor || !date || !time) {
        alert('Please fill in all fields.');
        return;
    }

    // Create appointment object
    var appointment = {
        name: name,
        contact: contact,
        doctor: doctor,
        date: date,
        time: time
    };

    // Save appointment to localStorage
    var appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.push(appointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));

    // Show success message
    alert('Appointment made successfully!');

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('contact').value = '';
    document.getElementById('doctor').value = ''; // Reset the selected doctor
    document.getElementById('date').value = '';
    document.getElementById('time').value = '';
});
