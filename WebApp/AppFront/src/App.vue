<template>
   <form class="app-form">
          <h1 id="head" style="color:#e2f1f8">Know Disaster</h1>
          

           
           <router-view></router-view> 
          
    </form>
</template>

<script>
/*eslint-disable*/
import HelloWorld from './components/HelloWorld'
import HomePage from './components/HomePage'
import Number from './components/Number'
import { bus } from './main.js'

export default {
  name: 'App',

  

  components: {
    HelloWorld,
    Number,
    HomePage
  }
}


</script>

<style>



.app-form {
  min-height: 10rem;
  margin: auto;
  max-width: 50%;
  padding: .5rem;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
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

[class*=underlay] {
  left: 0;
  min-height: 100%;
  min-width: 100%;
  position: fixed;
  top: 0;
}
.underlay-photo {
  animation: hue-rotate 6s infinite;
  background: #808e95;
  background-size: cover;
  -webkit-filter: grayscale(20%);
  z-index: -1;
}
.underlay-black {
  background: rgba(0,0,0,0.7);
  z-index: -1;
}

@keyframes hue-rotate {
  from {
    -webkit-filter: grayscale(30%) hue-rotate(0deg);
  }
  to {
    -webkit-filter: grayscale(30%) hue-rotate(360deg);
  }
}



</style>