export default class API {
	nextId = 1;
	saveUser(userData) {
		// Save to database
		return Object.assign({}, userData, {id: this.nextId++});
	}
}
