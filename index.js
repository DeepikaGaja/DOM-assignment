
const button = document.getElementById("btn");

button.addEventListener("click", addStudent);

// code for adding student details
function addStudent(event) {
    
    let name = document.getElementById("sname").value;
    if(name == '') return;
    let id = document.getElementById("sid").value;
    if(id == '') return;
    let email = document.getElementById("email").value;
    if(email == '') return;
    let number = document.getElementById("no").value;
    if(number == '') return;

    event.preventDefault();

    
    localStorage.setItem("sname", JSON.stringify(name));
    localStorage.getItem("sname");
    localStorage.setItem("sid", JSON.stringify(id));
    localStorage.getItem("sid");
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.getItem("email");
    localStorage.setItem("no", JSON.stringify(number));
    localStorage.getItem("no");


    // create new row for student details
    let table = document.getElementById("center");
    let row1 = table.insertRow(table.rows.length);


    // Insert details in new row
    row1.insertCell(0).innerHTML = name;
    row1.insertCell(1).innerHTML = id;
    row1.insertCell(2).innerHTML = email;
    row1.insertCell(3).innerHTML = number;
    row1.insertCell(4).innerHTML ='<button onclick="editData(this)">Edit</button>' + '<button onclick="deleteData(this)">Delete</button>';

}

function editData(button) {

    let row = button.parentNode.parentNode;

    let nameCell = row.cells[0];
    let idCell = row.cells[1];
    let emailCell = row.cells[2];
    let noCell = row.cells[3];

    // Prompt the user to update values
    let sname1 = prompt("Enter the Name:", nameCell.innerHTML);
    let sid1 = prompt("Enter the ID:", idCell.innerHTML);
    let email1 = prompt("Enter the email:", emailCell.innerHTML);
    let no1 = prompt("Enter the numder:", noCell.innerHTML);


    nameCell.innerHTML = sname1;
    idCell.innerHTML = sid1;
    emailCell.innerHTML = email1;
    noCell.innerHTML = no1;
}

//code for deleting data
function deleteData(button) {

    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

