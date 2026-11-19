const baseUrl = "http://localhost:3000";

function fetchStudents() {
    return fetch(`${baseUrl}/students`)
        .then(response => {
        return response.json()
    })
}

fetchStudents()
    .then(students => {
    console.log(students)
    })
.catch(error => console.error()
)