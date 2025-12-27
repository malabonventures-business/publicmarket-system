<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBRwPNnRNJ_kTB93XnsxI3XceQufyW2hhc",
  authDomain: "publicmarket-possystem.firebaseapp.com",
  projectId: "publicmarket-possystem",
  storageBucket: "publicmarket-possystem.firebasestorage.app",
  messagingSenderId: "26710815694",
  appId: "1:26710815694:web:10692a34face2aad5bb19f",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
</script>
