var firebaseConfig = {
    apiKey: "AIzaSyC7kyMsWTw5brBehSYc9Pf-g7rJhwOa1Is",
    authDomain: "project94-b1972.firebaseapp.com",
    databaseURL: "https://project94-b1972-default-rtdb.firebaseio.com",
    projectId: "project94-b1972",
    storageBucket: "project94-b1972.appspot.com",
    messagingSenderId: "722492663279",
    appId: "1:722492663279:web:6ff7d22f6826f01493421a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name : user_name,
          message : msg,
          like : 0
    });
    document.getElementById("msg").value = "";
}