function checkIn(event) {
  // Prevent default form submission
  event.preventDefault();

  // Get form values
  var babyName = document.getElementById('babyName').value;
  var broughtBy = document.getElementById('broughtBy').value;
  var phone = document.getElementById('phone').value;
  var periodOfStay = document.getElementById('periodOfStay').value;
  var amountPaid = document.getElementById('amountPaid').value;
  var checkin = document.getElementById('checkin').value;
  var notes = document.getElementById('notes').value;

  // Validation: Ensure all fields are filled
  if (babyName.trim() === '' || broughtBy.trim() === '' || phone.trim() === '' || periodOfStay.trim() === '' || amountPaid.trim() === '' || checkin.trim() === '') {
      alert('Please fill in all required fields.');
      return;
  }

  // If all fields are filled, display success message
  alert('Baby check-in successful!');
  document.getElementById('checkinForm').reset();
}

// Attach the checkIn function to the form's submit event
document.getElementById('checkinForm').addEventListener('submit', checkIn);