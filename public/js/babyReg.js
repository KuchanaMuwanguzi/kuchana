document.getElementById('Fillform').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get form values
  let fullName = document.getElementById("fullName").value;
  let location = document.getElementById("location").value;
  let motherName = document.getElementById("motherName").value;
  let motherContact = document.getElementsByName("motherContact").value;
  let fatherName = document.getElementById("fatherName").value;
  let fatherContact = document.getElementById("fatherContact").value;
  let dob = document.getElementById("dob").value;
  let gender = document.querySelector('input[name="gender"]:checked').value;
  let babyNumber = document.getElementById("babyNumber").value;
  
  // Create an object with form data
  let babyData = {
      fullName: fullName,
      location: location,
      motherName: motherName,
      motherContact: motherContact,
      fatherName: fatherName,
      fatherContact: fatherContact,
      dob: dob,
      gender: gender,
      babyNumber: babyNumber
    };
  
  // Convert data to JSON string
  let babyDataJSON = JSON.stringify(babyData);
  
  // Save data to local storage
  localStorage.setItem('babyData', babyDataJSON);
  
  // Display success message
  alert('Baby registration successful!');
  
  // Reset form
  document.getElementById('Fillform').reset();
});