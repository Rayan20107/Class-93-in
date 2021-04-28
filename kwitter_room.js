
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAjWIw6U6G1OWPVWGz4KpEMXI5sOAMcTtA",
      authDomain: "kwitter-41534.firebaseapp.com",
      databaseURL: "https://kwitter-41534-default-rtdb.firebaseio.com",
      projectId: "kwitter-41534",
      storageBucket: "kwitter-41534.appspot.com",
      messagingSenderId: "40165184399",
      appId: "1:40165184399:web:b44c58699b47f8faa3b1fa"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
