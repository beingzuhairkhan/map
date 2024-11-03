
# 🌍 Interactive Map Library

A simple and powerful interactive map library built with **Leaflet**. Create stunning interactive maps with markers, polygons, and seamless integration of GeoJSON data effortlessly.

## 🚀 Installation

To get started, first install the library using npm:

```bash
npm install interactive-map-library
```

## 🛠️ Usage

### 1. Create an HTML File

After installing the library, create an HTML file (e.g., `index.html`) to utilize the interactive map. Here’s a simple example:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Map</title>
    
    <!-- Leaflet CSS -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <link rel="stylesheet" href="https://unpkg.com/leaflet-draw/dist/leaflet.draw.css" />
    
    <!-- Custom CSS -->
    <style>
        .leaflet-control-geocoder {
            border-radius: 4px;
            padding: 5px;
            display: flex;
            align-items: center;
            gap: 5px;
        }

        .leaflet-draw {
            background-color: white;
        }

        #geocoder-container {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
        }

        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }

        #map {
            height: 500px;
            width: 100%;
            border: 2px solid #007BFF;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            margin: 20px auto;
        }

        #geocoder-container .leaflet-control-geocoder input[type="text"] {
            width: 100%;
            max-width: 300px;
            padding: 10px;
            border: 2px solid #007BFF;
            font-size: 14px;
            outline: none;
            border-radius: 8px 0 0 8px;
            transition: border-color 0.3s, box-shadow 0.3s;
        }

        #geocoder-container .leaflet-control-geocoder input[type="text"]:focus {
            border-color: #0056b3;
            box-shadow: 0 0 5px rgba(0, 91, 179, 0.5);
        }

        #geocoder-container .leaflet-control-geocoder button {
            background-color: #007BFF;
            color: white;
            border: 2px solid #007BFF;
            padding: 10px 16px;
            font-size: 14px;
            cursor: pointer;
            border-radius: 0 8px 8px 0;
            transition: background-color 0.3s, box-shadow 0.3s;
        }

        #geocoder-container .leaflet-control-geocoder button:hover {
            background-color: #0056b3;
            box-shadow: 0 0 5px rgba(0, 91, 179, 0.5);
        }
    </style>
</head>

<body>
    <div id="map"></div>
    <div id="geocoder-container">
        <div class="leaflet-control-geocoder">
            <input type="text" placeholder="Search location..." />
            <button>Search</button>
        </div>
    </div>

    <!-- Leaflet JS -->
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <script src="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.js"></script>
    <script src="https://unpkg.com/leaflet-draw/dist/leaflet.draw.js"></script>

    <!-- External JavaScript File -->
    <script src="./node_modules/interactive-map-library/index.js"></script>
</body>

</html>
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

1. Install the library via npm.
2. Include Leaflet in your HTML file.
3. Create your HTML and JavaScript files.
4. Enjoy creating interactive maps!

---
```
