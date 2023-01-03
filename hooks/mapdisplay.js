var view = new View({
  center: [-9101767, 2822912],
  zoom: 14
});

var map = new Map({
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
  target: 'map',
  view: view
});