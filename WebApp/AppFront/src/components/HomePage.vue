<template>
  <div id="buttons">
  	<ul>
  	<li><a href="https://github.com/MadhavShroff/KnowDisaster/blob/master/README.md">About</a></li>
  	<li><a href="#">Heat Map</a></li>
  	<li><a href="#">Weather data</a></li>
  	<li><a href="#">Nearest relief Center</a></li>
  </ul>
  </div>
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