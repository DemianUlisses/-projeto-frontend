var plag = document.getElementById('lat');
var plong = document.getElementById('long');

        document.addEventListener('DOMContentLoaded', function(){

        var target = document.querySelector('#map');
        
        navigator.geolocation.getCurrentPosition(function(position) {
    
           
            const latitude   = position.coords.latitude;
            const longitude  = position.coords.longitude;
            const coordinate = new google.maps.LatLng(latitude, longitude);
    
            
            var optionsMap = {
                        center : coordinate,
                        zoom: 19,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
            };
    
            var map = new google.maps.Map(target, optionsMap);
    
            var configMarker = {
                                 position : coordinate,
                                 map : map,
                                 title: "Você está Nesse local!"
                                };
            var marker = new google.maps.Marker(configMarker);

            plag.innerHTML  = latitude;
            plong.innerHTML = longitude;
    
        });
    });
