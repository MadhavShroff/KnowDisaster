<template>
  <!--div>
    <input type="number" class ="numberInput" placeholder="Enter your Phone Number" v-model="EnterNum" pattern="[1-9]{1}[0-9]{9}">
    <input type="text" placeholder="Location" class="LocationInput" v-model="EnterNum">
  </div--> 
 <div>
  <input type="tel" class="user-number" autofocus="true" v-model="number"  placeholder="Enter your phone number" required
           pattern="[1-9]{1}[0-9]{9}" size="10" minlength="9" maxlength="12"/>
  <input type="text" class="user-location" v-model="location"  placeholder="Location"/> 
  <input type="submit" name="Login" v-on:click="sendAll()" value="Let me in" class="user-submit" />
  <button v-on:click="getLocation()" id="button">Get My Location</button>
  
  <div class="underlay-photo"></div>
  <div class="derlay-black"></div> 
</div>
</template>
 
<script>

  import { bus } from '../main'
/*eslint-disable*/
var lat,lon;
export default {
  name: 'phone-num',
  data () {
    return {
    	number:'',
    	location:'',
      submitted:false
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
 
        } else { 
        alert("Geolocation is not supported by this browser. You can type in your location.");
       }
    },
 sendAll: function()
     {
          var number = this.number;
          var location = this.location;
          var longitude = lon;
          var latitude = lat;

        if(number== 0) {
          alert("Number field cannot be empty.");
          return;
        }
        

        if(location != '')
        {

        	this.$http.post('https://localhost:3000/api/addnumloc') ,{number:number,location:location,latitude:"0",longitude:"0"}.then(function(response) {

                this.submitted = true;
        	},
               function(err) {
               	console.log(err.code);
               }
        	)
        } else {
        	this.$http.post('https://localhost:3000/api/addnumloc') ,{number:number,location:"0",latitude:lat,longitude:lon}.then(function(response){
                this.submitted = true;
        	   },
               function(err) {
               	console.log(err.code);
               }
        	 )
        }
        if(this.submitted == true)
        {
          this.$router.push('/Homepage');
          bus.$emit('phone-num',number);
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