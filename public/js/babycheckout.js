// JavaScript code for form validation and submission
document.getElementById('checkoutForm').addEventListener('submit', function(event) {
  // Prevent default form submission
  event.preventDefault();

  // Get form values
  var name = document.getElementById('name').value;
  var pickedBy = document.getElementById('pickedBy').value;
  var phone = document.getElementById('phone').value;
  var checkout = document.getElementById('checkout').value;
  var notes = document.getElementById('notes').value;

  // Perform validation
  if (name.trim() === '' || pickedBy.trim() === '' || phone.trim() === '' || checkout.trim() === '') {
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