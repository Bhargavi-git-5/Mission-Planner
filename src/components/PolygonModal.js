import React from 'react';
import '../styles/Modal.css';

function PolygonModal({ polygonCoords, onImportPolygon }) {
  if (!polygonCoords || polygonCoords.length === 0) return null;

  return (
    <div className="modal">
      <h3>Polygon Coordinates</h3>
      <table>
        <thead>
          <tr>
            <th>Point</th>
            <th>Coordinates</th>
          </tr>
        </thead>
        <tbody>
          {polygonCoords.map((coord, index) => (
            <tr key={index}>
              <td>P{index + 1}</td>
              <td>[{coord[0].toFixed(6)}, {coord[1].toFixed(6)}]</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="import-button" onClick={onImportPolygon}>
        Import Points
      </button>
    </div>
  );
}

export default PolygonModal;