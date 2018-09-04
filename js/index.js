window.onload = () => {
	const columns = document.querySelectorAll('.payments-colunm');

	for(const columnKey in database){
		for(const object of database[columnKey]){
				const article = document.createElement('ARTICLE');
				article.classList.add('payment-detail');
				
				const innerHTML = filledInnerHTML(object);
				article.innerHTML = innerHTML;

				columns[columnKey].append(article);
			}
	}
};

function filledInnerHTML(object){
	return `
	<div class="payment-detail__body">
		<p class="payment-detail__title">${object.title}</p>
		<p class="payment-detail__discription">
			${object.discription}
		</p>
	</div>
	<p class="payment-detail__fee">${object.fee}</p>
	<footer class="payment-detail__footer">
		<div class="payment-detail__footer--left">
			<p class="payment-detail__profile-initials">${object.initials}</p>
			<p class="payment-detail__name">${object.name}</p>
		</div>
		<div class="payment-detail__footer--right">
			<img class="payment-detail__calendar" src="calendar-regular.svg">
			<p class="payment-detail__overdue-days">-${object.days} days overdue</p>
		</div>
	</footer>
	`;
}

const database = [
	[
		{
			title: 'Practice Fee #1',
			discription: 'Payment for preparation trainings for the Tournament.',
			fee: '$10',
			initials: 'SG',
			name: 'Serge Gilroy',
			days: '2',
		},
		{
			title: 'Tournament #2',
			discription: 'Payment for team participation in the tournament of the season.',
			fee: '$130',
			initials: 'MD',
			name: 'Martin Devan',
			days: '5',
		},
		{
			title: 'Pratice #2',
			discription: 'Payment for preparation trainings for the Tournament.',
			fee: '$300',
			initials: 'OC',
			name: 'Olivia Courtney',
			days: '10',
		},	
	],[
		{
			title: 'Equipment #1',
			discription: 'Payment for providing full equipment necessary for training.',
			fee: '$300',
			initials: 'EL',
			name: 'Emma Lindsie',
			days: '20',
		},
		{
			title: 'Practice Fee #1',
			discription: 'Payment for preparation trainings for the Tournament.',
			fee: '$240',
			initials: 'TD',
			name: 'Tom Dunno',
			days: '24',
		},
	],[
		{
			title: 'Practice Fee #1',
			discription: 'Payment for preparation tranings for the Tournament.',
			fee: '$180',
			initials: 'MR',
			name: 'Matthew Ray',
			days: '59',
		},
		{
			title: 'Tournament #1',
			discription: 'Payment for preparation tranings for the Tournament.',
			fee: '$300',
			initials: 'MR',
			name: 'Micheal Ross',
			days: '56',
		},
		{
			title: 'Tournament #1',
			discription: 'Payment for team participation in the tournament of the season.',
			fee: '$130',
			initials: 'MR',
			name: 'Leon Quinian Ross',
			days: '45',
		},
	]
];
