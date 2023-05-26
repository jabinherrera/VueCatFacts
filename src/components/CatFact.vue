<template>
    <div>
      <button @click="getCatFact">Obtener dato curioso de gatos</button>
      <p>{{ catFact }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        catFact: ''
      };
    },
    methods: {
      getCatFact() {
        fetch('https://catfact.ninja/fact')
          .then(response => response.json())
          .then(data => {
            this.catFact = data.fact;
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  };
  </script>