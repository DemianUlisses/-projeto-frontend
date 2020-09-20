function mapa(latiude,logetude) {
    this.latiude = latiude;
    this.logetude = logetude;
    

    this.getlatiude = function() {
        return this.name;
    };

 };

function initialize() {
    var bounds = new google.maps.LatLngBounds();
    var i;
  
    var polygonCoords = [
       new google.maps.LatLng(-23.554548, -46.607911),
       new google.maps.LatLng(-23.556043, -46.595058),
       new google.maps.LatLng(-23.564403, -46.593942),
       new google.maps.LatLng(-23.567884, -46.604757)
    ];
    
  
    for (i = 0; i < polygonCoords.length; i++) {
       bounds.extend(polygonCoords[i]);
    }
  
    var map = new google.maps.Map(document.getElementById("map_canvas2"), {
      zoom: 14,
      center: bounds.getCenter(),
      mapTypeId: "roadmap"
    });
  
  
    var sp_mooca = new google.maps.Polygon({
      paths: polygonCoords,
      strokeColor: '#0000ff',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#0000ff',
      fillOpacity: 0.35
    });
    sp_mooca.setMap(map);
   
}
  