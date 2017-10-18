function myMap() {
					var myCenter = new google.maps.LatLng(47.336940,19.6776573);
					var mapCanvas = document.getElementById("map");
					var mapOptions = {center: myCenter, zoom: 1};
					var map = new google.maps.Map(mapCanvas, mapOptions);
					/* This is the array for the information*/
					var markers = [
						{ 
						name: "Boston, MC" 
						lat: 42.360082, 
						lng: -71.05888,
						},
						{
						name: "New York, NY"
						lat: 40.712775, 
						lng: -74.005973,
						},
						{
						name: "Washington DC",
						lat: 38.907192, 
						lng: -77.036871,
						},
						{
						name: "Chicago, IL",
						lat: 41.878114, 
						lng: -87.629798,
						},
						{
						name: "Antwerp, BE", 
						lat: 51.219448, 
						lng: 4.402464,
						},
						{
						name: "London, UK",
						lat: 51.507351, 
						lng: -0.127758,
						},
						{
						name: "Milan",
						lat: 45.464204, 
						lng: 9.189982,
						},
						{
						name: "Rijeka, Croatia",
						lat: 45.327063, 
						lng: 14.442176,
						},
						{
						name: "Sydney, Australia",
						lat: -33.86882, 
						lng: 151.209296,
						},
						{
						name: "Chemnitz, Germany",
						lat: 50.827845, 
						lng: 12.92137,
						},
						
					];
							 marker_objects = [];
								/*here starts the loop for setting the markers*/  
							    for (var i = 0; i < markers.length; i++) {
							            var data = markers[i];
							            var content = data.name;
							            var myLatlng = new google.maps.LatLng(data.lat, data.lng);
							            var marker = new google.maps.Marker({
							                position: myLatlng,
							                map: myMap,
							                name: content,
							        	});
							            /* here starts the Infowindow */
							            var infowindow = new google.maps.InfoWindow();

									    google.maps.event.addListener(marker, "click", (function (marker) {
									      return function(evt) {
									        infowindow.setContent(marker.name);
									        infowindow.open(map, marker);
									      }
									    })(marker));

									    	marker.setMap(map);

									   		 marker_objects.push(marker);
									                    
								}

	}; 