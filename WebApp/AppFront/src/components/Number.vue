<template>
  <!--div>
    <input type="number" class ="numberInput" placeholder="Enter your Phone Number" v-model="EnterNum" pattern="[1-9]{1}[0-9]{9}">
    <input type="text" placeholder="Location" class="LocationInput" v-model="EnterNum">
  </div--> 
 <div>
  <input type="number" class="user-number" id="box1" autofocus="true" required="true" placeholder="Enter your phone number" pattern="[1-9]{1}[0-9]{9}"/>
  <input type="text" class="user-location" id="box2"  placeholder="Location"/>
  <input type="submit" name="Login" v-on:click="sendAll()" value="Let me in" class="user-submit" />
  <button v-on:click="getLocation()" id="button">Get My Location</button>
  <div class="underlay-photo"></div>
  <div class="underlay-black"></div> 
</div>
</template>
 
<script>
/*eslint-disable*/
var lat,lon;
export default {
  name: 'phone-num',
  data () {
    return {
    	number:'',
    	location:'',
    	latitude:'',
    	longitude:''
    }
  },

  methods: {
    
 getLocation: function () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            
        function(position){
	            lat = position.coords.latitude;
                lon = position.coords.longitude;
                alert("We have your location");
	
    },



     function(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.")
                        break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
            }
        }

       );
 
 }else { 
        alert("Geolocation is not supported by this browser. You can type in your location.");
       }
    },


 sendAll: function()

     {
        var u_num = document.getElementById('box1').value;
        var u_loc = document.getElementById('box2').value;

        if(u_loc != '')
        {
        	alert("heere");
        	var number = u_num;
        	var location = u_loc;

        	this.$http.post('post?data') ,{number:number,location:location,latitude:"",longitude:""}.then(function(response){

                if(response.ok == true)
                {
                	//
                }
        	},
               function(err)
               {
               	console.log(err.code);
               }
        	)
        }else{

        	alert("wait");
        	var number = u_num;
        	var location = u_loc;
        	var longitude = lon;
        	var latitude = lat;

        	this.$http.post('post?data') ,{number:number,location:"",latitude:latitude,longitude:longitude}.then(function(response){

                if(response.ok == true)
                {
                	//
                }
        	},
               function(err)
               {
               	console.log(err.code);
               }
        	)

        }
     }
 
  } 
}


</script>

<style>

@import url(https://fonts.googleapis.com/css?family=Open+Sans:100,300,400,700);
@import url(//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css);


.user-number, .user-location{
  background: transparent;
  border: 0 solid;
  border-bottom: 1px solid rgba(white, .5);
  color: white;
  display: block;
  margin: 1rem;
  padding: .5rem;
  transition: 250ms background ease-in;
  width: calc(100% - 3rem);
  &:focus {
    background: #666666;
    color: black;
    transition: 250ms background ease-in;
  }
}

.user-submit {
  border: 1px solid white;
  background: transparent;
  color: white;
  display: block;
  margin: 1rem auto;
  min-width: 1px;
  padding: .25rem;
  transition: 250ms background ease-in;
  &:hover, &:focus {
    background: white;
    color: black;
    transition: 250ms background ease-in;
  }
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
  -webkit-filter: grayscale(30%);
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

#button {
  display: block;
  padding: .8rem;
  font-size: 74%;
  bottom: 0;
  left:47%;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: white;
  background-color: #666666;
  border: none;
  position: absolute;
  border-radius: 2px;
  opacity: 0.6;
}

#button:hover {background-color: #3c3c3c}

#button:active {
  background-color: #666666;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

</style>