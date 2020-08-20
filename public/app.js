var firebaseConfig = {
    apiKey: "AIzaSyCKMkj3UYJjXH_3PqutIEoZM0Lta2GLhx4",
    authDomain: "pagina-proyecto-ecb7f.firebaseapp.com",
    databaseURL: "https://pagina-proyecto-ecb7f.firebaseio.com",
    projectId: "pagina-proyecto-ecb7f",
    storageBucket: "pagina-proyecto-ecb7f.appspot.com",
    messagingSenderId: "379600626625",
    appId: "1:379600626625:web:e3abb822b68a4d71014540"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db=firebase.firestore();

  
  //login y registro
var emailUser = document.getElementById('emailUser')
var passUser = document.getElementById('passUser')


function limpiarDatosLogin() {
  emailUser.value = "";
  passUser.value = "";
}


function registrarUsuario(){
        firebase.auth().createUserWithEmailAndPassword(emailUser.value, passUser.value)
        .then(()=>{
            console.log("el usuario se ha registardo")
           
        })
        .catch(function(error) {
           
            console.log("error", error.message)
          });
          limpiarDatosLogin();
}  

 

function login() {
 
  firebase.auth().signInWithEmailAndPassword(emailUser.value, passUser.value)
      .then((user) => {
          sessionStorage.setItem('login', user.email);
          window.location.href = 'nosotros.html';
      })
      .catch(function (error) {
          console.log("Error: ", error.message);
          limpiarDatosLogin();
      });
}
