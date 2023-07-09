window.addEventListener('DOMContentLoaded', (event) => {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const employeeTable = document.getElementById('employee-table');
    const employeeRows = employeeTable.getElementsByTagName('tr');

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const searchTerm = searchInput.value.toLowerCase();

        for (let i = 1; i < employeeRows.length; i++) {
            const employeeName = employeeRows[i].getElementsByTagName('td')[0].textContent.toLowerCase();

            if (employeeName.includes(searchTerm)) {
                employeeRows[i].style.display = '';
            } else {
                employeeRows[i].style.display = 'none';
            }
        }
    });
});