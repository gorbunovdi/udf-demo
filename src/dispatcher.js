import {
	ADDED_USER,
	UPDATED_USER_NAME,
	DISABLED_RANDOM_USER
} from './store.js';

export class Dispatcher {
	constructor(container) {
		this.container = container;
	}

	createUser(newUserData) {
		const createdUser = this.container.get('api')
			.saveUser(newUserData);

		this.container.get('store')
			.dispatch({ type: ADDED_USER, payload: createdUser });
	}

	updateUserName(updateUserData) {
		this.container.get('store')
			.dispatch({ type: UPDATED_USER_NAME, payload: updateUserData });
	}

	disableRandomUser() {
		this.container.get('store')
			.dispatch({ type: DISABLED_RANDOM_USER, payload: {} });
	}
}
