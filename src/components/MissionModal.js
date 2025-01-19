import React from 'react';
import DropdownMenu from './Dropdown';

function MissionModal({ waypoints }) {
  return (
    <div className="modal">
      <h3>Mission Planner</h3>
      <table>
        <thead>
          <tr>
            <th>Waypoint</th>
            <th>Coordinates</th>
            <th>Distance (m)</th>
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {waypoints.length === 0 ? (
            <tr>
              <td colSpan="4">No waypoints to display</td>
            </tr>
          ) : (
            waypoints.map((point, index) => (
              <tr key={index}>
                <td>WP({index.toString().padStart(2, '0')})</td>
                <td>[{point.coords[0].toFixed(6)}, {point.coords[1].toFixed(6)}]</td>
                <td>{point.distance.toFixed(2)}</td>
                <td>
                  <DropdownMenu />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default MissionModal;
