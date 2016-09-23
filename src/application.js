import API from './api.js';
import { Dispatcher } from './dispatcher.js';
import { Store } from './store.js';

export default class Application {
	constructor() {
		this.api = new API();
		this.dispatcher = new Dispatcher(this);
		this.store = new Store();
	}

	get(name) {
		if (this.hasOwnProperty(name)) {
			return this[name];
		}

		throw `Service '${name}' not found`;
	}
}
