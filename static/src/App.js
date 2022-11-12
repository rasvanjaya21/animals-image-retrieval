import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/api")
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				console.log(data);
			});
  }, []);

  return (
    <>
    <link rel="shortcut icon" href="{{ url_for('static/build', filename='favicon.ico') }}"/>

    <div>
      {(typeof data.predictions === "undefined") ? (
        <div> Loading... </div>
        ) : (
          data.predictions.map((val, key) => (
            <div className="text-red-400" key={key}> {val} </div>
            ))
            )}
        
    </div>
    </>
  );
}

export default App;
