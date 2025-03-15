// Configuration Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialisation de Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("textInput");

    // Charger les données sauvegardées au démarrage
    database.ref("userInput").once("value", snapshot => {
        if (snapshot.exists()) {
            inputField.value = snapshot.val();
        }
    });

    // Sauvegarder chaque modification
    inputField.addEventListener("input", function () {
        database.ref("userInput").set(inputField.value);
    });
});
