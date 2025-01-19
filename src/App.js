import React, { useState } from 'react';
import MapView from './components/MapView';
import MissionModal from './components/MissionModal';
import PolygonModal from './components/PolygonModal';
import { calculateDistance } from './utils/distanceUtils';
import './App.css';

function App() {
  const [lineStringCoords, setLineStringCoords] = useState([]);
  const [polygonCoords, setPolygonCoords] = useState([]);
  const [isInitialModalOpen, setIsInitialModalOpen] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);

  const handleDrawClick = () => {
    setIsInitialModalOpen(true);
  };

 
  const handleCloseInitialModal = () => {
    setIsInitialModalOpen(false);
    setIsDrawing(true); 
  };

  const handleImportPolygon = () => {
    console.log('Polygon imported:', polygonCoords);
    setPolygonCoords([]); 
  };

  
  const handleAddWaypointDistances = (coords) => {
    return coords.map((coord, index) => {
      if (index === 0) return { coords: coord, distance: 0 }; 
      const distance = calculateDistance(coords[index - 1], coord);
      return { coords: coord, distance };
    });
  };

  
  const waypoints = handleAddWaypointDistances(lineStringCoords);

  return (
    <div className="app">
      <button className="draw-button" onClick={handleDrawClick}>
        Draw on the Map
      </button>

     
      {isInitialModalOpen && (
        <div className="mid">
          <h3>Waypoint Navigation</h3>
          <p>Click on the map to mark points of the route and then press complete the route.</p>
          <div className="parent-container">
            <button className="generate-button" onClick={handleCloseInitialModal}>
              Generate Data
            </button>
          </div>
        </div>
      )}

      
      <MapView
  isDrawing={isDrawing}
  lineStringCoords={lineStringCoords} 
  polygonCoords={polygonCoords} 
  setLineStringCoords={setLineStringCoords}
  setPolygonCoords={setPolygonCoords}
/>
      
      <MissionModal waypoints={waypoints} />

      
      <PolygonModal polygonCoords={polygonCoords} onImportPolygon={handleImportPolygon} />
    </div>
  );
}

export default App;
