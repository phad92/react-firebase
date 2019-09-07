import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyArekg0CN5UB7VrXsW1BlumbClgPIiiViI",
    authDomain: "test-app-6004d.firebaseapp.com",
    databaseURL: "https://test-app-6004d.firebaseio.com",
    projectId: "test-app-6004d",
    storageBucket: "test-app-6004d.appspot.com",
    messagingSenderId: "764019485414",
    appId: "1:764019485414:web:c48e9f3c07e194c1"
};

firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref();

export const todosRef = databaseRef.child('todos');
