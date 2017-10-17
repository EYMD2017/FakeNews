function myMap() {
					var myCenter = new google.maps.LatLng(47.1430079,10.5392215);
					var mapCanvas = document.getElementById("map");
					var mapOptions = {center: myCenter, zoom: 13};
					var map = new google.maps.Map(mapCanvas, mapOptions);
					/* This is the array for the information*/
					var markers = [
						{ 
						name: "Poundland: cheap cutlery, crockery and much more", 
						lat: 47.0734517, 
						lng: 15.0183986,
						},
						{
						name: "Metro Bank: Bank account without appointment",
						lat: 52.20494, 
						lng: 0.1202897,
						},
						{
						name: "Sainsbury: Food shopping in the centre of Cambridge",
						lat: 52.2025619, 
						lng: 10.122336,
						},
						{
						name: "Wilko: cheap Hardware store",
						lat: 52.2068046, 
						lng: 0.1282579,
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