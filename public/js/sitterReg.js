function register() {
    // Retrieve form data
    let fullName = document.getElementById("fullName").value;
    let location = document.getElementById("location").value;
    let nin = document.getElementById("nin").value;
    let contact = document.getElementsByName("contact")[0].value;
    let recommender = document.getElementById("recommender").value;
    let educationLevel = document.getElementById("educationLevel").value;
    let dob = document.getElementById("dob").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let sitterNumber = document.getElementById("sitterNumber").value;

    // Create a JavaScript object with form data
    let sitterData = {
      fullName: fullName,
      location: location,
      nin: nin,
      contact: contact,
      recommender: recommender,
      educationLevel: educationLevel,
      dob: dob,
      gender: gender,
      sitterNumber: sitterNumber
    };

    // Convert the object to a JSON string
    let sitterDataJSON = JSON.stringify(sitterData);

    // Store the JSON string in local storage
    localStorage.setItem("sitterData", sitterDataJSON);
    
    alert("Sitter registered successfully!");
  }