import { useState } from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('white');
  const colors = ['lightpink', 'lightblue', 'lightcoral', 'lightgreen', 'lightyellow', 'lightgrey'];

  return (
    <div style={{ 
      backgroundColor: bgColor, 
      height: '100vh', 
      width: '100vw', 
      fontFamily: 'Poppins', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      flexDirection: 'column' 
    }}>
      <h1 style={{ color: 'black', fontWeight: '400' }}>Click to Change Background Color</h1>
      <div>
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setBgColor(color)}
            style={{
              backgroundColor: color,
              border: 'none',
              padding: '10px 20px',
              margin: '10px',
              borderRadius: '10px',
              cursor: 'pointer',
              fontSize: '16px',
              fontFamily: 'Poppins',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
