import logo from './logo.svg';
import './App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAfudaMLlJ2jCz4copemY4TzOaQNxR1cY",
  authDomain: "xmidas-d7272.firebaseapp.com",
  projectId: "xmidas-d7272",
  storageBucket: "xmidas-d7272.appspot.com",
  messagingSenderId: "513346303217",
  appId: "1:513346303217:web:6bb0db758b57edb7c86550",
  measurementId: "G-MF930ZHTNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
