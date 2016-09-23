import {
	printUsersList,
	printNumberOfUsers,
	printRandomUser
} from './helpers.js';

import Application from './application.js';

const app = new Application();

app.get('store').subscribe( printUsersList );
app.get('store').subscribe( printNumberOfUsers );
app.get('store').subscribe( printRandomUser );

const dispatcher = app.get('dispatcher');

dispatcher.createUser({name: 'Jake the Dog'});

dispatcher.createUser({name: 'Finn the Human'});

dispatcher.disableRandomUser();

dispatcher.createUser({name: 'Ice King'});

dispatcher.updateUserName({id: 3, name: 'Nice King'});
