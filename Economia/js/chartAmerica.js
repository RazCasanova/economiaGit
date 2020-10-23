var ctx = document.getElementById("myChartAmerica").getContext('2d');
var myChartAmerica = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ['Estados Unidos', 'Canada', 'México', 'Brasil', 'Chile', 'Colombia', 'Argentina','Perú','Urugay','Costa Rica'],
		datasets: [{
			label: 'Países por PIB (PPA) per cápita (2019)',
			data: [50000, 50000, 25000, 20000, 15000, 18000, 17000,10000,10000,11000],
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

