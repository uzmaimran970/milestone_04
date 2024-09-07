// Get references to HTML elements
var formContainer = document.getElementById('formContainer');
var resumeForm = document.getElementById('resumeForm');
var toggleButton = document.getElementById('toggleButton');
var resumeContainer = document.getElementById('resumeContainer');
var resumeContent = document.getElementById('resumeContent');
var editButton = document.getElementById('editButton');
// Initialize form state: true means the form is in edit mode, false means it is displaying the resume.
var isEditing = true;
// Function to save the resume data and display it
function saveResume() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    // Create the resume content with proper IDs to reference each section
    var generatedResume = "\n        <h3>Personal Information:</h3>\n        <p id=\"resumeName\"><strong>Name:</strong> ".concat(name, "</p>\n        <p id=\"resumeEmail\"><strong>Email:</strong> ").concat(email, "</p>\n        <p id=\"resumeMobile\"><strong>Mobile:</strong> ").concat(mobile, "</p>\n\n        <h3>Education:</h3>\n        <p id=\"resumeEducation\">").concat(education, "</p>\n\n        <h3>Skills:</h3>\n        <p id=\"resumeSkills\">").concat(skills, "</p>\n\n        <h3>Experience:</h3>\n        <p id=\"resumeExperience\">").concat(experience, "</p>\n    ");
    // Display the generated resume and hide the form
    resumeContent.innerHTML = generatedResume;
    formContainer.style.display = 'none';
    resumeContainer.style.display = 'block';
    toggleButton.textContent = 'Edit';
    isEditing = false; // Toggle state to 'viewing'
}
// Function to populate the form with existing resume data for editing
function editResume() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    // Use IDs to select specific fields in the resume for easier editing
    var nameMatch = (_b = (_a = document.getElementById('resumeName')) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.replace("Name: ", "");
    var emailMatch = (_d = (_c = document.getElementById('resumeEmail')) === null || _c === void 0 ? void 0 : _c.textContent) === null || _d === void 0 ? void 0 : _d.replace("Email: ", "");
    var mobileMatch = (_f = (_e = document.getElementById('resumeMobile')) === null || _e === void 0 ? void 0 : _e.textContent) === null || _f === void 0 ? void 0 : _f.replace("Mobile: ", "");
    var educationMatch = (_g = document.getElementById('resumeEducation')) === null || _g === void 0 ? void 0 : _g.textContent;
    var skillsMatch = (_h = document.getElementById('resumeSkills')) === null || _h === void 0 ? void 0 : _h.textContent;
    var experienceMatch = (_j = document.getElementById('resumeExperience')) === null || _j === void 0 ? void 0 : _j.textContent;
    // Populate the form fields with the data from the resume
    document.getElementById('name').value = nameMatch || '';
    document.getElementById('email').value = emailMatch || '';
    document.getElementById('mobile').value = mobileMatch || '';
    document.getElementById('education').value = educationMatch || '';
    document.getElementById('skills').value = skillsMatch || '';
    document.getElementById('experience').value = experienceMatch || '';
    // Show the form and hide the resume
    formContainer.style.display = 'block';
    resumeContainer.style.display = 'none';
    toggleButton.textContent = 'Save';
    isEditing = true; // Toggle state to 'editing'
}
// Toggle button listener (Save/Edit)
toggleButton.addEventListener('click', function () {
    if (isEditing) {
        // Save the resume
        saveResume();
    }
    else {
        // Go back to editing
        editResume();
    }
});
// Edit button listener for the generated resume
editButton.addEventListener('click', function () {
    // Go back to editing when the "Edit" button in the resume section is clicked
    editResume();
});
