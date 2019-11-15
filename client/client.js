const empArray = [];
let monthlyTotal = 0;


$(document).ready(init);

function init() {
    console.log('init complete');
    $('#addEmpForm').on('submit', submitAddEmpForm);
    $('.employees').on('click','.btn-delete', deleteEmp);
}

function submitAddEmpForm() {
    event.preventDefault();
    console.log('submit clicked');
    console.log(empArray);

    const empObject = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        id: parseInt($('#id').val()),
        title: $('#title').val(),
        salary: parseInt($('#salary').val()),
    }

    addToEmployees(empObject);
    resetInputs();
}

function addToEmployees(empObject) {
    empArray.push(empObject);
    render();
}

function deleteEmp() {
    console.log('delete clicked');
    console.log(empArray);
    const id = $(this).parent().data('id');
    empArray.splice(id, 1);
    render();
}

function resetInputs() {
    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#salary').val('');
}

function render() {
    $('.employees').empty();
    findTotal();

    for (let i = 0; i < empArray.length; i++) {
        const emp = empArray[i];

        $('.employees').append(`
            <tr>
                <td>${emp.firstName}</td>
                <td>${emp.lastName}</td>
                <td>${emp.id}</td>
                <td>${emp.title}</td>
                <td>$${emp.salary}</td>
                <td  data-id="${i}"><button class="btn-delete">Delete</button></td>
            </tr>
        `);
    }

    function findTotal() {
        totalCost = 0;
        for(let emp of empArray) {
            totalCost += emp.salary;
        }
    }

    $('.monthlyTotal').text(`Monthly Total: $${totalCost}`);
}