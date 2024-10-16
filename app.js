// Get references to the form and table
const studentForm = document.getElementById('studentForm');
const studentTableBody = document.getElementById('StudentTable').getElementsByTagName('tbody')[0];

// Function to save student data to localStorage
function saveStudentToLocalStorage(student) {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));
}

// Function to display a single student's data in the table
function addStudentToTable(student) {
    const newRow = studentTableBody.insertRow();
    newRow.innerHTML = `
        <td>${student.name}</td>
        <td>${student.id}</td>
        <td>${student.email}</td>
        <td>${student.contact}</td>
    `;
}

// Function to load and display students saved in localStorage
function displaySavedStudents() {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    students.forEach(student => addStudentToTable(student));
}

// Function to handle form submission
studentForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the form values
    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;

    // Create a student object
    const student = { name, id, email, contact };

    // Add the new student to the table
    addStudentToTable(student);

    // Save the student to localStorage
    saveStudentToLocalStorage(student);

    // Clear the form
    studentForm.reset();
});

// Load and display students on page load
document.addEventListener('DOMContentLoaded', displaySavedStudents);

