const baseUrl = "http://localhost:3000";

function fetchStudents() {
  return fetch(`${baseUrl}/students`).then((response) => {
    return response.json();
  });
}

fetchStudents()
  .then((students) => {
      console.log(students);
      renderStudents(students)
  })
  .catch((error) => console.error());

const list = document.querySelector(".students_list");

function renderStudents(students) {
  const markup = students
    .map((student) => {
      return `
        <li>
    <p>name: ${student.name}</p>
    <p>age: ${student.age}</p>
    <p>email: ${student.email}</p>
</li>
        `;
    })
    .join("");
  list.insertAdjacentHTML("beforeend", markup);
}
