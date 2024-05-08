document.getElementById('adminForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    // Validation
    if (!username || !email || !password) {
      alert('All fields are required');
      return;
    }
    
    // Create an object with form data
    let adminData = {
      username: username,
      email: email,
      password: password
    };
    
    // Convert data to JSON string
    let adminDataJSON = JSON.stringify(adminData);
    
    // Save data to local storage
    localStorage.setItem('adminData', adminDataJSON);
    
    // Display success message
    //alert('Admin registration successful!');
    
    // Reset form
    document.getElementById('adminForm').reset();
  });
  