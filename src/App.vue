<template>
    <div id="app">
    <div><router-link to="/">Home</router-link></div>

    <div><router-link to="/catfacts">CatFact</router-link></div>
  </div>
  <router-view/>
  
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
