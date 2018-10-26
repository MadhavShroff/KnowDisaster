<template>

  	<ul>
  	<div class="underlay-photo"></div>
    <div class="underlay-black"></div> 
  	<li><a href="https://github.com/MadhavShroff/KnowDisaster/blob/master/README.md">About</a></li>
  	<li><router-link to="/WeatherData">Weather Data</router-link></li>
    <li><router-link to="/Heatmap">Heat Map</router-link></li>
  	<li><a href="#">Prediction Percentage</a></li>
  	<li><a href="#">Nearest relief Center</a></li>
  </ul>
  
</template>

<script>
/*eslint-disable*/
export default {
  name: 'know-disaster',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
li {
    
    float:left;
    display: flex;
}

li a:hover:not(.active) {
    background-color: #3c3c3c;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 30px;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #666666;
}

h1{font-family: Helvetica}
 </style>