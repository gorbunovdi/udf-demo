export let printUsersList = (store) => {
	console.log('Users:');
	store.get('users').map(
		user => console.log(user.get('id'), user.get('name'))
	);
}

export let printNumberOfUsers = (store) => {
	console.log('Number of users:', store.get('users').size);
}

export let printRandomUser = (store) => {
	if (store.get('printRandomUser') === true) {
		const randomUserIndex = Math.floor(Math.random() * store.get('users').size);
		const randomUserName = store.get('users').get(randomUserIndex).get('name');
		console.log('Random one: ' + `%c${randomUserName}`, 'font-weight: bold;');
	}
}
