import React from 'react';
import FetchDataComponent from './FetchData'; // Renamed the imported component

const App = () => {
  return (
    <div className="App">
      <FetchDataComponent /> {/* Use the renamed component here */}
    </div>
  );
};

export default App;
