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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   function adduser()
{
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({

        purpose:"adding the user"

    });
}
 //Start code
 console.log(Room_names);
 row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)>#"+RoomNames+"</div><hr>";
 document.getElementById("output").innerHTML +=row;
 //End code
 });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
       window.location="kwitter_page.html";
}


