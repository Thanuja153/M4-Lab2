/*eslint-env browser*/

//Employee Array
const EmployeesArray = [[90909015, "Thanuja Pavani Satti", 1423, "tps@gmail.com", "Executive"],
    [99089768, "Satya Uday Sanku", 3183, "sus@gmail.com", "Administrative"],
    [98709875, "Puneet Patil", 7947, "pp@vectagmail.com", "Sales"],
    [93456547, "Preeti Kulkarni", 6548, "pk@gmail.com", "Marketing"],
    [90908989, "Nikitha Raavi", 1205, "nr@vgmail.com", "Quality Assurance"]];

//Storing Data
if (localStorage.getItem('employees') !== null) {
    EmployeesArray = JSON.parse(localStorage.getItem('employees'));
}

const addform       = document.getElementById('addForm');
const empTable    = document.getElementById('empTable');
const empCount    = document.getElementById('empCount');
Gridbuilding()

// Adding Data
addform.addEventListener('submit', (e) => {
    e.preventDefault();
    const empID       = parseInt(document.getElementById('id').value);
    const empName     = document.getElementById('name').value;
    const empExt      = parseInt(document.getElementById('extension').value);
    const empEmail    = document.getElementById('email').value;
    const empDept     = document.getElementById('department').value;
    const arrNewEmployee = [empID, empName, empExt, empEmail, empDept];
    EmployeesArray.push(arrNewEmployee);
    buildGrid();
    addform.reset();
    addform.id.focus();
})

//Removing Data
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        if (confirm('Please confirm that you want to delete this employee from the system?')) {
            const rowIndex = e.target.parentNode.parentNode.rowIndex
            EmployeesArray.splice(rowIndex - 1, 1);
            Gridbuilding();
        }
    }
});

// Building the Grid

function Gridbuilding() {
    empTable.lastElementChild.remove()
    const tbody = document.createElement('tbody')
    for (const employee of EmployeesArray) {
        tbody.innerHTML += 
        `<tr>
            <td>${employee[0]}</td>
            <td>${employee[1]}</td>
            <td>${employee[2]}</td>
            <td>${employee[3]}</td>
            <td>${employee[4]}</td>
            <td><button class="btn btn-sm btn-danger delete">X</button></td>
        </tr>
        `}
empTable.appendChild(tbody);
empCount.value = `(${EmployeesArray.length})`;

//Storing Data
    
localStorage.setItem('employees', JSON.stringify(EmployeesArray));
}