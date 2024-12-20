function calculateBudget(scenario) {
    // Get input values for the given scenario
    let salaries = parseFloat(document.querySelector(`#scenario${scenario} .input-salaries`).value);
    let rent = parseFloat(document.querySelector(`#scenario${scenario} .input-rent`).value);
    let cloud = parseFloat(document.querySelector(`#scenario${scenario} .input-cloud`).value);
    let software = parseFloat(document.querySelector(`#scenario${scenario} .input-software`).value);
    let marketing = parseFloat(document.querySelector(`#scenario${scenario} .input-marketing`).value);
    let legal = parseFloat(document.querySelector(`#scenario${scenario} .input-legal`).value);
    let insurance = parseFloat(document.querySelector(`#scenario${scenario} .input-insurance`).value);
    let flights = parseFloat(document.querySelector(`#scenario${scenario} .input-flights`).value);
    let misc = parseFloat(document.querySelector(`#scenario${scenario} .input-misc`).value);
    let funds = parseFloat(document.querySelector(`#scenario${scenario} .input-funds`).value);

    // Function to add commas to numbers
    function formatNumber(num) {
        return num.toLocaleString();
    }

    // Display the current values next to sliders
    document.getElementById(`salary-value-${scenario}`).textContent = formatNumber(salaries);
    document.getElementById(`rent-value-${scenario}`).textContent = formatNumber(rent);
    document.getElementById(`cloud-value-${scenario}`).textContent = formatNumber(cloud);
    document.getElementById(`software-value-${scenario}`).textContent = formatNumber(software);
    document.getElementById(`marketing-value-${scenario}`).textContent = formatNumber(marketing);
    document.getElementById(`legal-value-${scenario}`).textContent = formatNumber(legal);
    document.getElementById(`insurance-value-${scenario}`).textContent = formatNumber(insurance);
    document.getElementById(`flights-value-${scenario}`).textContent = formatNumber(flights);
    document.getElementById(`misc-value-${scenario}`).textContent = formatNumber(misc);
    document.getElementById(`funds-value-${scenario}`).textContent = formatNumber(funds);

    // Calculate total expenses and months left
    let totalExpenses = salaries + rent + cloud + software + marketing + legal + insurance + flights + misc;
    let monthsLeft = (funds / totalExpenses).toFixed(2);

    // Update the results for the scenario
    document.getElementById(`total-expenses-${scenario}`).textContent = formatNumber(totalExpenses);
    document.getElementById(`remaining-funds-${scenario}`).textContent = formatNumber(funds);
    document.getElementById(`months-left-${scenario}`).textContent = monthsLeft;
}
