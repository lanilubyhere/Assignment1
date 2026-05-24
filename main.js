function displayStaff() {

    let table = document.getElementById("staffTable");

    table.innerHTML = "";

    for(let i = 0; i < dataSet.length; i++) {

        table.innerHTML += `
        <tr>
            <td>${dataSet[i][0]}</td>
            <td>${dataSet[i][1]}</td>
            <td>${dataSet[i][2]}</td>
            <td>${dataSet[i][3]}</td>
            <td>${dataSet[i][4]}</td>
            <td>${dataSet[i][5]}</td>
        </tr>
        `;
    }
}

displayStaff();

function sortNameAsc() {

    dataSet.sort((a, b) => a[0].localeCompare(b[0]));

    displayStaff();
}

function sortNameDesc() {

    dataSet.sort((a, b) => b[0].localeCompare(a[0]));

    displayStaff();
}

function sortSalaryAsc() {

    dataSet.sort((a, b) =>
        parseInt(a[5].replace(/[$,]/g, "")) -
        parseInt(b[5].replace(/[$,]/g, ""))
    );

    displayStaff();
}

function sortSalaryDesc() {

    dataSet.sort((a, b) =>
        parseInt(b[5].replace(/[$,]/g, "")) -
        parseInt(a[5].replace(/[$,]/g, ""))
    );

    displayStaff();
}