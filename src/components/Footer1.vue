<!-- Footer.vue -->
<template>
  <footer class="footer-wrapper">
    <img class="footer-logo" src="../assets/LOGO_COMPLETO.png">
    <p class="copyright">Copyright © 2023 Dinamita.Inc</p>
    <div class="politics-legal-infomration">
      <span class="politics">Políticas de privacidad</span>
      <span> | </span>
      <span class="legal-information">Información legal</span>
    </div>
  </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer1',
  }
  </script>
  
  <style scoped>
  
  .footer-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: #000000;
    color: #fff;
    font-size: 0.95rem;
    font-weight: 400;
    padding-bottom: 20px;
  }
  
  .footer-logo {
    width: 100px;
  }
  
  .copyright {
    width: fit-content;
    margin: 5px;
  }
  
  .politics-legal-infomration {
    width: max-content;
  }
  
  footer {
    /* Estilo de tu footer, por ejemplo, posición fija en la parte inferior */
    bottom: 0;
    width: 100%;
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
  }

  </style>