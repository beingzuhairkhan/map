
# 🌍 Interactive Map Library

A simple and powerful interactive map library built with **Leaflet**. Create stunning interactive maps with markers, polygons, and seamless integration of GeoJSON data effortlessly.

## 🚀 Installation

You can install the package using npm or Yarn:

```bash
npm install interactive-map-library
```

Or, if you're using Yarn:

```bash
yarn add interactive-map-library
```

## 🛠️ Usage

### 1. Include the Library in Your HTML

Make sure to include the Leaflet CSS and JS files in your HTML. You can link them directly from a CDN or use the version installed via npm.

```html
<link rel="stylesheet" href="node_modules/leaflet/dist/leaflet.css" />
<script src="node_modules/leaflet/dist/leaflet.js"></script>
```

### 2. Create an HTML File

Create an HTML file (e.g., `index.html`) to utilize the interactive map. Here’s a simple example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Map Test</title>
    <link rel="stylesheet" href="node_modules/leaflet/dist/leaflet.css" />
    <style>
        #map {
            height: 500px; /* Set map height */
            width: 100%;   /* Set map width */
            border: 1px solid #ccc; /* Optional border for aesthetics */
            border-radius: 8px; /* Rounded corners */
        }
    </style>
</head>
<body>
    <div id="map"></div>
    <script type="module">
        import InteractiveMap from 'interactive-map-library'; // Import your library

        // Create a new instance of the map
        const map = new InteractiveMap('map', { zoom: 13, center: [51.505, -0.09] });

        // Add a marker to the map
        map.addMarker(51.5, -0.09, 'Hello, World!');

        // Load the GeoJSON data
        fetch('dummyData.geojson')
            .then(response => response.json())
            .then(data => {
                // Add GeoJSON data to the map
                data.features.forEach(feature => {
                    if (feature.geometry.type === 'Point') {
                        map.addMarker(feature.geometry.coordinates[1], feature.geometry.coordinates[0], feature.properties.title);
                    } else if (feature.geometry.type === 'Polygon') {
                        map.addPolygon(feature.geometry.coordinates, feature.properties.title);
                    }
                });
            });
    </script>
</body>
</html>
```

### 3. GeoJSON Data

Create a GeoJSON file (e.g., `dummyData.geojson`) with your markers and polygons data. Here's a simple example:

```json
{
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-0.09, 51.505]
            },
            "properties": {
                "title": "Marker 1"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [-0.1, 51.5],
                        [-0.1, 51.51],
                        [-0.09, 51.51],
                        [-0.09, 51.5],
                        [-0.1, 51.5]
                    ]
                ]
            },
            "properties": {
                "title": "Polygon 1"
            }
        }
    ]
}
```

## 📖 API

### `InteractiveMap(mapId, options)`

- **mapId**: The ID of the HTML element where the map will be rendered.
- **options**: An object containing map options like zoom level and center coordinates.

### `addMarker(lat, lng, title)`

- **lat**: Latitude of the marker.
- **lng**: Longitude of the marker.
- **title**: Title of the marker displayed in a tooltip.

### `addPolygon(coordinates, title)`

- **coordinates**: An array of coordinates for the polygon.
- **title**: Title of the polygon displayed in a tooltip.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## ✨ Features

- **Easy to Use**: Simple API for adding markers and polygons.
- **Responsive**: Automatically adapts to various screen sizes.
- **Customizable**: Customize the look and feel of your map with Leaflet's rich options.

## 🌟 Getting Started

1. Install the library via npm or Yarn.
2. Include Leaflet in your HTML file.
3. Create your HTML and JavaScript files.
4. Enjoy creating interactive maps!

---

