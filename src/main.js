
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


const firebaseConfig = {
  apiKey: "AIzaSyDT2VrRHXEwu9w4sOlc_P7OBhooCShLteA",
  authDomain: "vue-training-project-vminin.firebaseapp.com",
  projectId: "vue-training-project-vminin",
  storageBucket: "vue-training-project-vminin.appspot.com",
  messagingSenderId: "310993800845",
  appId: "1:310993800845:web:6b7df9bd76ae066fc71cc4",
  measurementId: "G-STVL22KFYY",
  databaseURL: "https://vue-training-project-vminin-default-rtdb.europe-west1.firebasedatabase.app"
};

firebase.initializeApp(firebaseConfig)

let app

firebase.auth().onAuthStateChanged(()=> {
if (!app) {
  app = createApp(App).use(store).use(router).mount('#app')
} 
})


