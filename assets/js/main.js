const xAxise = ['MAR 10', 'MAR 11', 'MAR 12', 'MAR 13', 'MAR 14', 'MAR 15', 'MAR 16'];
const yAxise = [1, 1.2, 1.6, 1.4, 3.2, 2.2, 2.4, 0.5, 4.5, 2.8, 0.5, 3.2, 0.7, 1.5, 0.8];
const ctx = document.getElementById('chart').getContext('2d');
const chart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: xAxise,
		datasets: [{
			label: '',
			data: yAxise,
			backgroundColor: 'rgba(42, 125, 42, 0.2)',
			borderColor: 'rgba(42, 125, 42, 0.2)',
			borderWidth: 0
		}]
	},
	options: {
		responsive: true,
		maintainAspectRatio: false,
		legend: {
			display: false
		}
	}
});
