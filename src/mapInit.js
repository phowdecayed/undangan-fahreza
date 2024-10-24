export function initMap() {
  const mapOptions = {
    center: { lat: -6.9175, lng: 107.6191 }, // Coordinates for Bandung
    zoom: 15,
  };
  const map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  
  const marker = new google.maps.Marker({
    position: { lat: -6.9175, lng: 107.6191 }, // Adjust these coordinates to match the exact location of Seskoad Grand Ballroom
    map: map,
    title: "Seskoad Grand Ballroom"
  });
}
