// Function to update the financial report when the "Update" button is clicked
function updateReport() {
	// Get the revenue and expenses input values
	let revenue = parseFloat(document.getElementById('revenue').value);
	let expenses = parseFloat(document.getElementById('expenses').value);

	// Check if the input values are NaN (Not a Number) and set them to 0 if they are
	if (isNaN(revenue)) {
		revenue = 0;
	}

	if (isNaN(expenses)) {
		expenses = 0;
	}

	// Calculate the profit
	let profit = revenue - expenses;

	// Update the financial report table with the new values
	document.getElementById('revenue-amount').textContent = '$' + revenue.toFixed(2);
	document.getElementById('expenses-amount').textContent = '$' + expenses.toFixed(2);
	document.getElementById('profit-amount').textContent = '$' + profit.toFixed(2);

	// Create a bar chart using the Chart.js library
	let chart = new Chart(document.getElementById('chart'), {
		type: 'bar',
		data: {
			labels: ['Revenue', 'Expenses', 'Profit'],
			datasets: [{
				label: 'Financial Report',
				data: [revenue, expenses, profit],
				backgroundColor: ['#009933', '#cc0000', '#333'], // Set the bar colors
				borderWidth: 1,
				borderColor: '#fff'
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true,
						callback: function(value, index, values) {
							return '$' + value.toFixed(2); // Format y-axis tick labels as currency
						}
					}
				}]
			},
			legend: {
				display: false // Hide the chart legend
			}
		}
	});
}
