var plag = document.getElementById('lat');
var plong = document.getElementById('long');
var dife = document.getElementById('Dif');

        document.addEventListener('DOMContentLoaded', function(){

        var target = document.querySelector('#map');
        
        navigator.geolocation.getCurrentPosition( async function(position) {
    
            var mySet = new Set();

            const latitude   = position.coords.latitude;
            const longitude  = position.coords.longitude;
            var coordinate = new google.maps.LatLng(latitude, longitude);
    
            mySet.add(latitude);
            mySet.add(longitude);
            mySet.add(coordinate);

  

            var optionsMap = {
                        center : coordinate,
                        zoom: 19,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
            };
    
            var map = new google.maps.Map(target, optionsMap);

            mySet.has(latitude);
 
            plag.innerHTML  = latitude;
            plong.innerHTML = longitude;
            dife.innerHTML  =   differec(latitude,longitude);
        });
       
        function differec (latitude,longitude) {
            return latitude - longitude;
        };

        function init() {
          var myLatlng = new google.maps.LatLng(34.04, -118.24);
          var myOptions = {
            zoom: 13,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
      
          var map = new google.maps.Map(document.getElementById('map'), myOptions);
      
        }
   


        
    });
