/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components


import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyDJKfsw5qK3C1slWF5pZ7deX1deRAYfUSI",
    authDomain: "metacalor-login-register.firebaseapp.com",
    projectId: "metacalor-login-register",
    storageBucket: "metacalor-login-register.appspot.com",
    messagingSenderId: "642935163037",
    appId: "1:642935163037:web:025dee418ec5b85512ac74",
    measurementId: "G-5N0EPWJY1V"
  };
  
  // Initialize Firebase
initializeApp(firebaseConfig);



import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
