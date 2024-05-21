document.getElementById('Fillform').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get form values
  let fullName = document.getElementById("fullName").value;
  let location = document.getElementById("location").value;
  let parentName = document.getElementById("parentName").value;
  let parentContact = document.getElementsByName("parentContact").value;
  let dob = document.getElementById("dob").value;
  let gender = document.querySelector('input[name="gender"]:checked').value;
  let babyNumber = document.getElementById("babyNumber").value;
  
  // Create an object with form data
  let babyData = {
      fullName: fullName,
      location: location,
      parentName: parentName,
      parentContact: parentContact,
      dob: dob,
      gender: gender,
      babyNumber: babyNumber
    };
  
  // Convert data to JSON string
  let babyDataJSON = JSON.stringify(babyData);
  
  // Save data to local storage
  localStorage.setItem('babyData', babyDataJSON);
  
  // Display success message
  //alert('Baby registration successful!');
  
  // Reset form
  document.getElementById('Fillform').reset();
});