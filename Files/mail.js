const firebaseConfig = {
    apiKey: "AIzaSyAMNaEGai7OfUBSm0a_DnafR34OgQ6eqv4",
    authDomain: "form-b72a8.firebaseapp.com",
    databaseURL: "https://form-b72a8-default-rtdb.firebaseio.com",
    projectId: "form-b72a8",
    storageBucket: "form-b72a8.appspot.com",
    messagingSenderId: "1060006193651",
    appId: "1:1060006193651:web:c0799c4117f784c57b8a86"
  };
 
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var number = getElementVal("number");
  var msgContent = getElementVal("msgContent");
  var latitude = getElementVal("latitude");
  var longitude = getElementVal("longitude");


  saveMessages(name, number, msgContent,latitude,longitude);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, number, msgContent,latitude,longitude) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    number: number,
    msgContent: msgContent,
	latitude: latitude,
	longitude: longitude,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};