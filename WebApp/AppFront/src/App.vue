<template>
   <form class="app-form">
          <h1 id="head" style="color:#e2f1f8">Know Disaster</h1>
          

               
            
          <Number style="margin-top: 80px"></Number>
    </form>
</template>

<script>
/*eslint-disable*/
import HelloWorld from './components/HelloWorld'
//import HomePage from './components/HomePage'
import Number from './components/Number'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Number
  }
}


</script>

<style>



.app-form {
  //background: #222;
  //box-shadow: 0 0 1rem rgba(0,0,0,0.3);
  min-height: 10rem;
  margin: auto;
  max-width: 50%;
  padding: .5rem;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body, html {
  height: 100%;
}
body {
  font-family: 'Open Sans';
  font-weight: 100;
  display: flex;
  overflow: hidden;
}




</style>