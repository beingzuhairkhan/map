// import L from 'leaflet';
// import 'leaflet-draw';
class InteractiveMap {
    constructor(containerId, options = {}) {
        this.map = L.map(containerId, options);
        this.markers = [];
        this.initMap();
        this.initDrawingTools();
        this.initGeocoder();
    }

    initMap() {
        this.map.setView([20.5937, 78.9629], 5); // Centered on India
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(this.map);
    }

    addMarker(lat, lng, popupText) {
        const marker = L.marker([lat, lng]).addTo(this.map);
        if (popupText) {
            marker.bindPopup(popupText);
        }
        this.markers.push(marker);
        return marker;
    }

    searchLocation(location) {
        const geocoder = L.Control.Geocoder.nominatim();
        geocoder.geocode(location, (results) => {
            if (results.length > 0) {
                const { lat, lng } = results[0].center;
                this.setView(lat, lng, 13);
                this.addMarker(lat, lng, `Location: ${location}`);
            } else {
                alert("Location not found");
            }
        });
    }

    setView(lat, lng, zoom) {
        this.map.setView([lat, lng], zoom);
    }

    initGeocoder() {
        const geocoderControl = L.Control.geocoder({
            defaultMarkGeocode: false
        }).on('markgeocode', (e) => {
            const { center } = e.geocode;
            this.setView(center.lat, center.lng, 13);
            this.addMarker(center.lat, center.lng, e.geocode.name);
        }).addTo(this.map);
    }

    initDrawingTools() {
        const drawnItems = new L.FeatureGroup();
        this.map.addLayer(drawnItems);

        const drawControl = new L.Control.Draw({
            edit: {
                featureGroup: drawnItems
            },
            draw: {
                polygon: true,
                polyline: true,
                rectangle: true,
                circle: true,
                marker: true
            }
        });

        this.map.addControl(drawControl);

        this.map.on(L.Draw.Event.CREATED, (event) => {
            const layer = event.layer;
            drawnItems.addLayer(layer);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const map = new InteractiveMap('map', { zoomControl: true });

    // Adding event listener for the Search button
    const searchButton = document.querySelector("#geocoder-container button");
    const searchInput = document.querySelector("#geocoder-container input[type='text']");

    searchButton.addEventListener("click", () => {
        const location = searchInput.value.trim();
        if (location) {
            map.searchLocation(location);
        } else {
            alert("Please enter a location.");
        }
    });
});
// export default InteractiveMap;