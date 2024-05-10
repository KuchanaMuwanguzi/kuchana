// JavaScript code for form validation and submission
document.getElementById('checkoutForm').addEventListener('submit', function(event) {
  // Prevent default form submission
  event.preventDefault();

  // Get form values
  let babyName = document.getElementById('babyName').value;
  let guardian = document.getElementById('guardian').value;
  let phone = document.getElementById('phone').value;
  let checkout = document.getElementById('checkout').value;
  let notes = document.getElementById('notes').value;

  // Perform validation
  if (babyName.trim() === '' || guardian.trim() === '' || phone.trim() === '' || checkout.trim() === '') {
      alert('Please fill in all required fields.');
  } else {
      // Display success message
      alert('Check-out successful!');
      // You can also reset the form after successful submission
      document.getElementById('checkoutForm').reset();
  }
});

function goBack() {
  window.history.back();
}