function myMap() {
					var myCenter = new google.maps.LatLng(47.336940,19.6776573);
					var mapCanvas = document.getElementById("map");
					var mapOptions = {center: myCenter, zoom: 2};
					var map = new google.maps.Map(mapCanvas, mapOptions);
					/* This is the array for the information*/
					var markers = [
						{ 
						name: "Migrants abusing a church: Hungary", 
						lat: 47.336940, 
						lng: 19.6776573,
						},
						{
						name: "Migrants abusing a church: UK",
						lat: 52.20494, 
						lng: 0.1202897,
						},
						{
						name: "Migrants abusing a church: USA",
						lat: 52.645403, 
						lng: -56.586718,
						},
						
						{
						name: "Migrants abusing a church: Sweden",
						lat: 59.337625, 
						lng: 18.085730,
						},
{
						name: "Migrants abusing a church: Hungary", 
						lat: 47.336940, 
						lng: 19.6776573,
						},
						{
						name: "Migrants abusing a church: Switzerland",
						lat: 46.658684, 
						lng: 7.893413,
						},
						{
						name: "Migrants abusing a church: Canada",
						lat: 45.401400, 
						lng: -75.704159,
						},
						{
						name: "Migrants abusing a church: France",
						lat: 48.853868, 
						lng: 2.349461,
						},
						{
						name: "Migrants abusing a church: Belgium",
						lat: 48.853868, 
						lng: 2.349461,
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