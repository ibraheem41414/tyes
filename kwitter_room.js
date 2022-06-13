
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBOhbR_lrXJvfJuZ-dCDWqOs1FpVcXMZUI",
      authDomain: "kwitter-2bf9f.firebaseapp.com",
      databaseURL: "https://kwitter-2bf9f-default-rtdb.firebaseio.com",
      projectId: "kwitter-2bf9f",
      storageBucket: "kwitter-2bf9f.appspot.com",
      messagingSenderId: "1010405448798",
      appId: "1:1010405448798:web:1872adf3d20aa2241628cf"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     function addRoom()
     {
           room_name = document.getElementById("room_name").value;
            
           firebase.database().ref("/").child(room_name).update({
     
           });
     
           localStorage.setItem("room_name", room_name);
     
           window.location = "kwitter_page.html";
     
     
     
     }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name -"+ Roon_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_name +"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();



function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}


      
