function checkIn(event) {
  // Prevent default form submission
  event.preventDefault();

  // Get form values
  let babyName = document.getElementById('babyName').value;
  let guardian = document.getElementById('guardian').value;
  let phone = document.getElementById('phone').value;
  let periodOfStay = document.getElementById('periodOfStay').value;
  let amountPaid = document.getElementById('amountPaid').value;
  let checkin = document.getElementById('checkin').value;
  let notes = document.getElementById('notes').value;

  // Validation: Ensure all fields are filled
  if (babyName.trim() === '' || guardian.trim() === '' || phone.trim() === '' || periodOfStay.trim() === '' || amountPaid.trim() === '' || checkin.trim() === '') {
      alert('Please fill in all required fields.');
      return;
  }

  // If all fields are filled, display success message
  alert('Baby check-in successful!');
  document.getElementById('checkinForm').reset();
}

// Attach the checkIn function to the form's submit event
document.getElementById('checkinForm').addEventListener('submit', checkIn);