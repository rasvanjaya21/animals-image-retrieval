import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/predict").then(res => res.json()
    
    ).then(data => {
      setData(data);
      console.log(data);

    });
  }, []);

  return (
    <div>
      {(typeof data.predictions === "undefined") ? (
        <div> Loading... </div>
      ) : (
         data.predictions.map((val, key) => (
          <div key={key}> {val} </div>
        ))
      )}
        
    </div>
  );
}

export default App;
