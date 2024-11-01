// index.js
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

class InteractiveMap {
    constructor(containerId, options = {}) {
        this.map = L.map(containerId, options);
        this.initMap();
    }

    initMap() {
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
    }

    addMarker(lat, lng, popupText) {
        const marker = L.marker([lat, lng]).addTo(this.map);
        if (popupText) {
            marker.bindPopup(popupText);
        }
        return marker;
    }

    setView(lat, lng, zoom) {
        this.map.setView([lat, lng], zoom);
    }
}

export default InteractiveMap;
