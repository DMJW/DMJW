import React from 'react';
import MyDrwnTop from '../img/DrawingsByMT.png';

export default function artsbyMe() {
  return (
    <div>
      <div className="artMeTop">
        <img src={MyDrwnTop} />
      </div>
      <div>
        <h3>Select A Drawing type or use the finder</h3>
        <p style={{ fontSize: 20 }}>Find a drawing here.</p>
        <input
          style={{ backgroundColor: '#15ff00', textAlign: 'center' }}
          onKeyUp="Search()"
        />
        <button
          style={{ backgroundColor: 'blue', color: 'white' }}
          onClick="Search()"
        >
          FIND(Still making😅!)
        </button>
        <p>Search Reasult</p>
      </div>
    </div>
  );
}
