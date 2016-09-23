import Immutable from 'immutable';

export const ADDED_USER = 'ADDED_USER';
export const UPDATED_USER_NAME = 'UPDATED_USER_NAME';
export const DISABLED_RANDOM_USER = 'DISABLED_RANDOM_USER';

export class Store {
	callbacks = [];

	constructor() {
		this.initStore();
	}

	initStore() {
		this.store = new Immutable.fromJS(
			{ printRandomUser: true, users: [] }
		);
	}

	dispatch(action) {
		this.store = this.applyAction(this.store, action);
		this.notify(action);
	}

	applyAction(store, action) {
		switch (action.type) {

			case ADDED_USER: 
				return this.addUserAction(store, action.payload);

			case UPDATED_USER_NAME: 
				return this.updateUserNameAction(store, action.payload);

			case DISABLED_RANDOM_USER: 
				return this.disableRandomUserAction(store);

			default:
				return store;
		}
	}

	addUserAction(store, newUserData) {
		const newUserDataImmutable = Immutable.fromJS(newUserData);
		return store.updateIn(
			['users'],
			users => users.push(newUserDataImmutable)
		);
	}

	updateUserNameAction(store, updateUserData) {
		return store.updateIn(
			['users'],
			users => users.update(
				users.findIndex(user => +user.get('id') === +updateUserData.id),
				user => user.set('name', updateUserData.name)
			)
		);
	}

	disableRandomUserAction(store) {
		return store.set('printRandomUser', false);
	}

	subscribe(callback) {
		this.callbacks.push(callback);
	}

	notify(action) {
		console.log(`%cAction ${action.type} dispatched`, 'color: green; font-weight: bold;');
		this.callbacks.map(callback => callback(this.store));
	}
}
