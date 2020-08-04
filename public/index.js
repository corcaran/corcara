  var firebaseConfig = {
    apiKey: "AIzaSyAlHBu2EvcDkzxqKbVCj6W3IIAcFk2W_4M",
    authDomain: "turismo-corcarano.firebaseapp.com",
    databaseURL: "https://turismo-corcarano.firebaseio.com",
    projectId: "turismo-corcarano",
    storageBucket: "turismo-corcarano.appspot.com",
    messagingSenderId: "341993189768",
    appId: "1:341993189768:web:bff7dcc040e4d958678a3d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

  function agregar(){
    alert('listo')
  }