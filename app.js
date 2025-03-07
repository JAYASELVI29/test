
function showRowData(button) {
    let row = button.closest("tr");
    let cells = row.getElementsByTagName("td");
    let headers = document.querySelectorAll("thead th");
    
    let tableContent = "<table class='table table-bordered'><thead><tr>";
    for (let i = 0; i < headers.length - 1; i++) {
        tableContent += `<th>${headers[i].innerText}</th>`;
    }
    tableContent += "</tr></thead><tbody><tr>";
    for (let i = 0; i < cells.length - 1; i++) {
        tableContent += `<td>${cells[i].innerText}</td>`;
    }
    tableContent += "</tr></tbody></table>";
    
    document.getElementById("modalBody").innerHTML = tableContent;
    let modal = new bootstrap.Modal(document.getElementById("viewModal"));
    modal.show();
}