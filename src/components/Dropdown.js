import React from 'react';

function DropdownMenu({ onInsertPolygonBefore, onInsertPolygonAfter }) {
  return (
    <div className="dropdown">
      <button onClick={onInsertPolygonBefore}>Insert Polygon Before</button>
      <button onClick={onInsertPolygonAfter}>Insert Polygon After</button>
    </div>
  );
}

export default DropdownMenu;