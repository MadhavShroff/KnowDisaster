<template>
    <div>
        <h3>City Name: {{ c_name }}</h3>
        <h3>Average Temperature: {{ temp }}</h3>
        <h3>Maximum Temperature: {{ max_temp }}</h3>
        <h3>Minimum Temperature: {{ min_temp }}</h3>
        <h3>humidity: {{ humidity }}</h3>
        <h3>Weather description: {{ description }}</h3>
  </div>
  
</template>

<script>
  import Api from '@/services/Api'
/*eslint-disable*/
export default {
  name: 'know-disaster',
  data () {
    return {
      description:'',
      temp:0,
      min_temp: 0,
      max_temp: 0,
      humidity: 0,
      c_name: ''
    }
  },

  methods:
  {

  
  },

  created(){
    Api().get('/api/weather/9000822514').then(function(res)
    {
      cosole.log(res.data)
      // this.description = body.weather.description
      // this.temp = body.main.temp;
      // this.min_temp = body.main.temp_min;
      // this.max_temp = body.main.temp_max;
      // this.humidity = body.main.humidity;
      // this.c_name= body.name;
    }).catch((err)=>{
        console.log(err);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

 </style>