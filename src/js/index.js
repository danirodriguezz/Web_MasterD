async function iniciarMap(){
    var coord;
    navigator.geolocation.getCurrentPosition(position => {
    coords = {lat: position.coords.latitude, lng: position.coords.latitude};
}, e => {
    if(e.code == 1) {
        coords = {lat:-34.5956145 ,lng: -58.4431949};
    }
});
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 10,
        center: coord
  });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
});
}

function resetForm() {
  document.getElementById("miFormulario").reset();
}

let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  navigator.geolocation.getCurrentPosition(position => {
    map = new Map(document.getElementById("map"), {
      center: { lat: position.coords.latitude, lng: position.coords.longitude },
      zoom: 12,
      mapId: "4504f8b37365c3d0",
    });
    const marker = new AdvancedMarkerElement({
      map,
      position: { lat: position.coords.latitude, lng: position.coords.longitude },
    });
  }, e => {
    if(e.code == 1) {
        map = new Map(document.getElementById("map"), {
          center: { lat: 28.4677891, lng: -16.2551733 },
          zoom: 12,
          mapId: "4504f8b37365c3d0",
        });
        const marker = new AdvancedMarkerElement({
          map,
          position: { lat: 28.4677891, lng: -16.2551733 },
        });
    }
  });
}

