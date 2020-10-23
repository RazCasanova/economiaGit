
var ctx = document.getElementById("myChartAfrica").getContext('2d');
var myChartAfrica = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ['Seychelles', 'Equatorial Guinea', 'Mausitius', 'Gabon', 'Botswana', 'South Africa', 'Namibia','Libya','Angola','Algeria'],
		datasets: [{
			label: 'Dólares por día por persona (2017)',
			data: [42, 34, 26, 21, 20, 16, 14,13,12,11],
			backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)'
			],
			borderColor: [
			'rgba(255,99,132,1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)'
			],
			borderWidth: 1
		}]
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		}
	}
});

 