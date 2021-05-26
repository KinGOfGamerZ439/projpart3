// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAlZ6DXFZk-TLm-e6v-RSW1yRk3PEdtT6U",
    authDomain: "spookbook-597ae.firebaseapp.com",
    projectId: "spookbook-597ae",
    storageBucket: "spookbook-597ae.appspot.com",
    messagingSenderId: "723359402546",
    appId: "1:723359402546:web:609e2625572ac2f4ec8a2b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send()
{
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({

      name:user_name,
      message:msg,
      like:0

    });
   document.getElementById("msg").value="";


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
