import { Routes, Route, Link } from "react-router-dom";
import { Box, Text } from '@chakra-ui/react';
import { Main, Album } from './pages';

function App() {
  return (
    <Box className="App" bg="blue.900">
        {/* Header Here */}
        <Box style={{
          display: 'flex',
          justifyContent: 'center',
          height: 200,
          alignItems: 'center',
        }}>
          <Text color="blue.200" fontSize={24} fontWeight={600}>My Collections</Text>
        </Box>

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
