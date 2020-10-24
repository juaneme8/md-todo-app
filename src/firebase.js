import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyBUtYO_TjVmAlTq13zQNx32fyB7gvfAlRk',
	authDomain: 'todo-app-77371.firebaseapp.com',
	databaseURL: 'https://todo-app-77371.firebaseio.com',
	projectId: 'todo-app-77371',
	storageBucket: 'todo-app-77371.appspot.com',
	messagingSenderId: '613216900405',
	appId: '1:613216900405:web:947da9bf55e8c1184ee87c',
	measurementId: 'G-YGRLZT4JX0',
});

const db = firebaseApp.firestore();

export default db;
