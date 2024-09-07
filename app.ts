// Get references to HTML elements
const formContainer = document.getElementById('formContainer') as HTMLElement;
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const toggleButton = document.getElementById('toggleButton') as HTMLButtonElement;
const resumeContainer = document.getElementById('resumeContainer') as HTMLElement;
const resumeContent = document.getElementById('resumeContent') as HTMLElement;
const editButton = document.getElementById('editButton') as HTMLButtonElement;

// Initialize form state: true means the form is in edit mode, false means it is displaying the resume.
let isEditing = true;

// Function to save the resume data and display it
function saveResume() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const mobile = (document.getElementById('mobile') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

    // Create the resume content with proper IDs to reference each section
    const generatedResume = `
        <h3>Personal Information:</h3>
        <p id="resumeName"><strong>Name:</strong> ${name}</p>
        <p id="resumeEmail"><strong>Email:</strong> ${email}</p>
        <p id="resumeMobile"><strong>Mobile:</strong> ${mobile}</p>

        <h3>Education:</h3>
        <p id="resumeEducation">${education}</p>

        <h3>Skills:</h3>
        <p id="resumeSkills">${skills}</p>

        <h3>Experience:</h3>
        <p id="resumeExperience">${experience}</p>
    `;

    // Display the generated resume and hide the form
    resumeContent.innerHTML = generatedResume;
    formContainer.style.display = 'none';
    resumeContainer.style.display = 'block';
    toggleButton.textContent = 'Edit';

    isEditing = false; // Toggle state to 'viewing'
}

// Function to populate the form with existing resume data for editing
function editResume() {
    // Use IDs to select specific fields in the resume for easier editing
    const nameMatch = document.getElementById('resumeName')?.textContent?.replace("Name: ", "");
    const emailMatch = document.getElementById('resumeEmail')?.textContent?.replace("Email: ", "");
    const mobileMatch = document.getElementById('resumeMobile')?.textContent?.replace("Mobile: ", "");
    const educationMatch = document.getElementById('resumeEducation')?.textContent;
    const skillsMatch = document.getElementById('resumeSkills')?.textContent;
    const experienceMatch = document.getElementById('resumeExperience')?.textContent;

    // Populate the form fields with the data from the resume
    (document.getElementById('name') as HTMLInputElement).value = nameMatch || '';
    (document.getElementById('email') as HTMLInputElement).value = emailMatch || '';
    (document.getElementById('mobile') as HTMLInputElement).value = mobileMatch || '';
    (document.getElementById('education') as HTMLTextAreaElement).value = educationMatch || '';
    (document.getElementById('skills') as HTMLTextAreaElement).value = skillsMatch || '';
    (document.getElementById('experience') as HTMLTextAreaElement).value = experienceMatch || '';

    // Show the form and hide the resume
    formContainer.style.display = 'block';
    resumeContainer.style.display = 'none';
    toggleButton.textContent = 'Save';

    isEditing = true; // Toggle state to 'editing'
}

// Toggle button listener (Save/Edit)
toggleButton.addEventListener('click', () => {
    if (isEditing) {
        // Save the resume
        saveResume();
    } else {
        // Go back to editing
        editResume();
    }
});

// Edit button listener for the generated resume
editButton.addEventListener('click', () => {
    // Go back to editing when the "Edit" button in the resume section is clicked
    editResume();
});