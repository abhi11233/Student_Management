let students = [];

document.getElementById("studentForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const id = document.getElementById("studentId").value;
    const name = document.getElementById("studentName").value;
    const course = document.getElementById("course").value;

    const existingStudent = students.find(student => student.id === id);

    if (existingStudent) {
        alert("Student ID already exists!");
        return;
    }

    students.push({
        id: id,
        name: name,
        course: course
    });

    displayStudents();

    document.getElementById("studentForm").reset();
});