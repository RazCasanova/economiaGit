var ctx = document.getElementById("my").getContext('2d');
var my = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ['Alemania', 'Francia', 'Italia', 'España', 'Polonia', 'Países Bajos', 'Bélgica','Suecia','Austria','República Checa'],
		datasets: [{
			label: 'PPA per cápita (2013)',
			data: [30100, 28800, 26200, 27900, 13300, 32500, 29300,30300,31800,20300],
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

