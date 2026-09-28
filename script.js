let students = [];

document.getElementById("studentForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const id = document.getElementById("studentId").value.trim();
    const name = document.getElementById("studentName").value.trim();
    const course = document.getElementById("course").value.trim();

    if (id === "" || name === "" || course === "") {
        alert("Please fill all fields.");
        return;
    }

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

    alert("Student added successfully!");
});

function displayStudents() {
    const table = document.getElementById("studentTable");

    table.innerHTML = "";

    students.forEach(student => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.course}</td>
        `;

        table.appendChild(row);
    });
}