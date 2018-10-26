<template>
     <div>
  	 <div id="floating-panel">
      <button onclick="toggleHeatmap()">Toggle Heatmap</button>
      <button onclick="changeGradient()">Change gradient</button>
      <button onclick="changeRadius()">Change radius</button>
      <button onclick="changeOpacity()">Change opacity</button>
    </div>
    <div id="map"></div>
  </div>
</template>

<script>
  import { bus } from '../main'
/*eslint-disable*/
var map, heatmap;

export default {
  name: 'heat-map',
  data () {
    return {
      
      user_lat: [],
      user_long: [],
      map_center_lat: '',
      map_center_long: '',
      number: 0
          }

 },

methods: {

  initMap: function(){
    map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: {lat: map_center_lat, lng: map_center_long},
          mapTypeId: 'satellite'
        });

        heatmap = new google.maps.visualization.HeatmapLayer({
          data: getPoints(),
          map: map
        });
  },

  toggleHeatmap: function(){
  heatmap.setMap(heatmap.getMap() ? null : map);
  },

  changeGradient: function(){
     var gradient = [
          'rgba(0, 255, 255, 0)',
          'rgba(0, 255, 255, 1)',
          'rgba(0, 191, 255, 1)',
          'rgba(0, 127, 255, 1)',
          'rgba(0, 63, 255, 1)',
          'rgba(0, 0, 255, 1)',
          'rgba(0, 0, 223, 1)',
          'rgba(0, 0, 191, 1)',
          'rgba(0, 0, 159, 1)',
          'rgba(0, 0, 127, 1)',
          'rgba(63, 0, 91, 1)',
          'rgba(127, 0, 63, 1)',
          'rgba(191, 0, 31, 1)',
          'rgba(255, 0, 0, 1)'
        ]
        heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
      },

  changeRadius:function(){
     heatmap.set('radius', heatmap.get('radius') ? null : 20);
  },

  changeOpacity:function()
  {
    heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
  },

  getPoints:function()
  {
    for(var i = 0;i<user_lat.length;i++)
      return new google.maps.LatLng(user_lat[i], user_long[i])
  }
},

created(){

      bus.$on('phone-num',(data)=>{
        this.number = data;
      })
      this.$http.get("/posts"),{number:number}.then(function(res){
       this.user_long = res.long;
       this.user_lat = res.lat;
       this.map_center_lat = res.center.lat;
       this.map_center_long = res.center.long;
      })
}

  }






</script>

<style>
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #map {
        height: 100%;
      }
      /* Optional: Makes the sample page fill the window. */
      
      #floating-panel {
        position: absolute;
        top: 10px;
        left: 25%;
        z-index: 5;
        background-color: #fff;
        padding: 5px;
        border: 1px solid #999;
        text-align: center;
        font-family: 'Roboto','sans-serif';
        line-height: 30px;
        padding-left: 10px;
      }
      #floating-panel {
        background-color: #fff;
        border: 1px solid #999;
        left: 25%;
        padding: 5px;
        position: absolute;
        top: 10px;
        z-index: 5;
      }
    </style>