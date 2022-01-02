import { Routes, Route } from "react-router-dom";
import { Box } from '@chakra-ui/react';
import { Main, Album } from './pages';

function App() {
  return (
    <Box className="App" bg="blue.900">
        {/* Header Here */}

        {/*  Router Here */}
        <Box bg="blue.900">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/albums/:folder" element={<Album />} />
          </Routes>
        </Box>
    </Box>
  );
}

export default App;
