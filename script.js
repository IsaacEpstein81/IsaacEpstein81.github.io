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
    let revenue = parseFloat(document.querySelector(`#scenario${scenario} .input-revenue`).value);

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
    document.getElementById(`revenue-value-${scenario}`).textContent = formatNumber(revenue);

    // Calculate total expenses
    let totalExpenses = salaries + rent + cloud + software + marketing + legal + insurance + flights + misc;

    // Add monthly revenue to funding for the months calculation
    let totalFunds = funds + revenue; // This includes the revenue

    // Calculate profit/loss
    let profitLoss = revenue - totalExpenses;

    // Format profit/loss
    let formattedProfitLoss = profitLoss < 0 ? `-$${Math.abs(profitLoss).toLocaleString()}` : `$${profitLoss.toLocaleString()}`;

    // Display total expenses, remaining funds, profit/loss, and revenue
    document.getElementById(`total-expenses-${scenario}`).textContent = formatNumber(totalExpenses);
    document.getElementById(`remaining-funds-${scenario}`).textContent = formatNumber(totalFunds);
    document.getElementById(`revenue-income-${scenario}`).textContent = formatNumber(revenue);  // Add revenue display
    document.getElementById(`profit-loss-${scenario}`).textContent = formattedProfitLoss;

    // Check if revenue is greater than total expenses, if so, it's profitable
    let monthsLeft;
    if (revenue >= totalExpenses) {
        monthsLeft = "Profitable"; // Revenue covers expenses and will go on indefinitely
    } else {
        // Otherwise, calculate how many months the funding will last
        monthsLeft = (totalFunds / totalExpenses).toFixed(2);
    }

    // Update the months left result
    document.getElementById(`months-left-${scenario}`).textContent = monthsLeft;
}
