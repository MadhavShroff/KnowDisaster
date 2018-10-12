var vm = new Vue({
	el: '#head',
	data: {
		mHeading: 'KnowDisaster',
		styleTags:{
			color:'grey',
			fontWeight: 'bold',
            },
		
		tag:'Predict  Prepare  ', 
	}
})

 var spanMenu = new Vue({
 	el:'#spanMenu',

    

 	methods:
 	{
        openNav: function(event)
        {
            document.getElementById("sideNav").style.width = "15%",
            document.getElementById("container").style.marginLeft = "15%",
            document.body.style.backgroundColor = '#808e95'
        }
 	}
 })

 var spanNav = new Vue({
 	el:'#spanNav',

 	methods:{

 		closeNav: function(event)
 		{
 			document.getElementById("sideNav").style.width = "0%",
            document.getElementById("container").style.marginLeft= "0%",
            document.body.style.backgroundColor = "white"
 		}
 	}
 })