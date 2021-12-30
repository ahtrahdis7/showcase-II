import { useEffect, useState } from 'react';

function App() {
  const [ files, setFiles ] = useState([]);

  useEffect(() => {
    // api call to get all required files
  }, [files]);

  return (
    <div className="App">
        <h1>Hello World</h1>
    </div>
  );
}

export default App;
