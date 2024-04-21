  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getDatabase,ref,set,get } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB4fQT7OerflSy6bh7gbRHJgkfsM3vHK1A",
    authDomain: "reportfeedfur.firebaseapp.com",
    projectId: "reportfeedfur",
    storageBucket: "reportfeedfur.appspot.com",
    messagingSenderId: "65608361609",
    appId: "1:65608361609:web:5a4e5d4eeb587320b6c858"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db=getDatabase(app);
  console.log(db);
  function writedata(userid,name,address,contact,food){
    set(ref(db,'user/'+userid),{
        Name:name,
        Incidence_Location:address,
        Contact:contact,
        Abusse_to_report:food
    })
  }
  document.querySelector("#btn").addEventListener("click",(e)=>{
    e.preventDefault();
    const name=document.querySelector("#name").value;
    const address=document.querySelector("#Address").value;
    const contact=document.querySelector("#contact").value;
    const food=document.querySelector("#food").value;
    writedata(name,name,address,contact,food);
    alert("Done");
  })
  console.log("Good");
