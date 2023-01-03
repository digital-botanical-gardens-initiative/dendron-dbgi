---
id: pydikqycpcrnouzggmjil9f
title: drone-map
desc: ''
updated: 1672785630962
created: 1655665529382
---
To do the drone map, we firstly put 8 ground markers (Figure 3) all around the botanical garden. Thes control points (Figure 1) are geolocated with a differential GPS that permits to obtain data with an error of less than 3 centimenters (Figure 2). After that, we make the drone fly with an app called "DroneDeploy" that automatically makes fly the drone (Figure 3) and takes pictures of the zone to have a complete mapping.

![ground control points](assets/images/ground_control_points.png){max-width : 600px, display: block, margin: 0 auto}*Figure 1 : Map of the Fribourg botanical garden with control points ([[biblio._d]]).*

![GPS](assets/images/gps.jpg){max-width : 600px, display: block, margin: 0 auto}*Figure 2 : Leica differential GPS with the GSM technology*

![drone](assets/images/drone.jpg){max-width : 600px, display: block, margin: 0 auto}*Figure 3 : DJI Mavic pro 2 drone with the first ground marker*

With these steps, we obtain approximatively 260 high quality pictures with the geolocated ground markers visible on them. We treat them with the agisoft software to obtain the geolocated map (Figure 4) on QGIS. To see the details of the operations, you can click [there](methodology.agisoft.md).

![DBGI map](assets/images/DBGI_map.png){max-width : 600px, display: block, margin: 0 auto}*Figure 4 : DBGI map with the pilot samples ([[_d]]).*

To add the samples (Figure 4), we have made a vector points layer in QGIS. Then we sync this QGIS project online in QFIeldCloud. With the QField app, we can go with a smartphone on the field and add the samples one by one when we prelevate. Then, we can push the field data and synchronize them with the QGIs project

Then, we can extract the WGS84 coordinates from the QGIS project in a CSV to add them on Inaturalist to have the high precision sample geolocation.

## Acknowledgements

The creation of the drone map has been made possible with the help the Geosciences department, geography unit of the University of Fribourg. Special thanks are due to Reynald Delaloye (UNIFR) and Horst Machguth (UNIFR) for the Differential GPS and drone loan and the explanations provided about their utilisation.

## Map with open layers

<script src="https://cdn.jsdelivr.net/npm/ol@v7.2.2/dist/ol.js"></script>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v7.2.2/ol.css">

</div id="map">

<script var view = new View({
  center: [-9101767, 2822912],
  zoom: 14
});

var map = new Map({
     target: 'map',
  controls: defaultControls().extend([
    new FullScreen({
      source: 'fullscreen'
    })
  ]),
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: view
});
></script>
</div>

</div id="map2">
<script
var map = new ol.Map({
  target: 'map2',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([0, 0]),
    zoom: 2
  })
});
></script>
</div>

</div id="map3"></div>
<script
var map = new ol.Map({
  target: 'map3',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([0, 0]),
    zoom: 2
  })
});
></script>

<!DOCTYPE html>
<html>
<body>

<script>
var map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([0, 0]),
    zoom: 2
  })
});
</script>

</body>
</html>

## Map with leaflet

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
  integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
  crossorigin=""/>

<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
  integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
  crossorigin=""></script>

  <div id="map"></div>

<script var map = L.map('map');
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
  maxZoom: 18
}).addTo(map);
map.setView([51.505, -0.09], 13);
></script>