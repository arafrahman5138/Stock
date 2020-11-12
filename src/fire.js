import firebase from 'firebase';  

var firebaseConfig = {
    apiKey: "AIzaSyDVmCYBOxbyn1G8d133SMHBKTBqzQQM7xc",
    authDomain: "stock-market-react.firebaseapp.com",
    databaseURL: "https://stock-market-react.firebaseio.com",
    projectId: "stock-market-react",
    storageBucket: "stock-market-react.appspot.com",
    messagingSenderId: "758895760342",
    appId: "1:758895760342:web:3d295e3070dd6724f6ca77"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire