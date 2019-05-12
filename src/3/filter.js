    const companies = [
        'Walmart', 
        'State Grid',
        'Sinopec Group',
        'China National Petroleum',
        'Royal Dutch Shell',
        'Toyota Motor',
        'Volkswagen',
        'BP',
        'Exxon Mobil',
        'Berkshire Hathaway'
    ];
    
    const table = document.getElementById("table");
    const input = document.getElementById("input");
    const form = document.getElementById("form");
    
    function init() {
        addElements(companies);
        form.addEventListener("submit", onFormSubmit);
    }
    
    function addElements(array) {
        for(let i = 0; i < array.length; i++) {
            let company = array[i];
            addRowToTable(company);
        }
    }
    
    function addRowToTable(element) {
        let row = document.createElement("tr");
        row.classList.add("table__row");
        row.innerHTML = `<td class="table__cell"> ${element} </td>`;
        table.appendChild(row);
    } 
    
    function onFormSubmit() {
        event.preventDefault();
        let filtered = [];
        let substring = input.value.toLowerCase();
        for (let i = 0; i < companies.length; i++) {
            let element = companies[i].toLowerCase();
            if (element.includes(substring)) {
                filtered.push(companies[i]);
            }
        }
        updateTable(filtered);
    }
    
    function updateTable(filteredArray) {
        table.innerHTML ="";
        addElements(filteredArray);
    }

    init();


