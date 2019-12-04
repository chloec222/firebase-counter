// Set up helpers
var qs = selector => document.querySelector(selector);
var counterBtn = qs(".counter__btn");
var countSpan = qs(".counter__count");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDvZX-OHNy_FEGpZsscJ-Svg2shqwQPPQQ",
  authDomain: "fsf-counter-demo.firebaseapp.com",
  databaseURL: "https://fsf-counter-demo.firebaseio.com",
  projectId: "fsf-counter-demo",
  storageBucket: "fsf-counter-demo.appspot.com",
  messagingSenderId: "604340790600",
  appId: "1:604340790600:web:987d1cad731346c2d2bf7d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize db and count refs
var db = firebase.firestore();
var counterRef = db.collection("counter").doc("Gfo0bReF1XorHTSQ79Kt");

counterBtn.addEventListener("click", () => {
  counterRef
    .update({ count: firebase.firestore.FieldValue.increment(1) })
    .then(() => console.log("[DEBUG] successfully updated count"));
});

counterRef.onSnapshot(doc => {
  console.log(`count updated to ${JSON.stringify(doc.data())}`);
  countSpan.textContent = doc.data().count;
});
