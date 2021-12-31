import { Routes, Route, Link } from "react-router-dom";
import { Main, Album } from './pages';

function App() {
  return (
    <div className="App">
        {/* Header Here */}
        <div>
          <h1>My Collections</h1>
        </div>

        {/*  Router Here */}
        <div>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/albums/:folder" element={<Album />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
