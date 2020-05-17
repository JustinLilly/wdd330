import { Student } from './student.js';

document.querySelector('input[type="submit"]').addEventListener('click', saveForm);
document.querySelector('body').addEventListener('load', loadTable);
function saveForm(event) {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let iNumber = document.getElementById("iNumber").value;

    let student = new Student(firstName, lastName, iNumber);

    let students = JSON.parse(localStorage.getItem('students'));
    students.push(student);

    if(localStorage.getItem('students')){ 
        students = JSON.parse(localStorage.getItem('students'));
    }

    // let student = {
    //     firstName: firstName, 
    //     lastName: lastName, 
    //     iNumber: iNumber
    // };

    loadTable();
    document.forms[0].reset();

    event.preventDefault();
}

function loadTable() {
    let students = JSON.parse(localStorage.getItem('students'));

    students.forEach(
        students => {
            document.querySelector('tbody').append(
                `<tr>
                    <td>${student.FirstName}</td>
                    <td>${student.LastName}</td>
                    <td>${student.INumber}</td>
                </tr>
                `
            );
        }
    )
}