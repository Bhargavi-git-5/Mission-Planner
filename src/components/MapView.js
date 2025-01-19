import React, { useEffect } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import { Tile as TileLayer } from 'ol/layer';
import { OSM } from 'ol/source';
import { Draw } from 'ol/interaction';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';

function MapView({ isDrawing, setLineStringCoords, setPolygonCoords }) {
  useEffect(() => {
    const vectorSource = new VectorSource();
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        vectorLayer,
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });

    let draw;
    if (isDrawing) {
    
      const drawType = 'Polygon'; 

      draw = new Draw({
        source: vectorSource,
        type: drawType,
      });

      map.addInteraction(draw);

      draw.on('drawend', (event) => {
        const coordinates = event.feature.getGeometry().getCoordinates();
        if (drawType === 'Polygon') {
          setPolygonCoords(coordinates[0]); 
        } else {
          setLineStringCoords(coordinates); 
        }
      });
    }

    return () => {
      map.setTarget(null); 
    };
  }, [isDrawing, setLineStringCoords, setPolygonCoords]);

  return <div id="map" style={{ width: '100%', height: '500px' }}></div>;
}

export default MapView;
