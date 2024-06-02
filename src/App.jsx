
import './App.css';
import Box from '@mui/material/Box'
import TopBar from './views/Topbar/TopBar';
import Home from './views/Home/Home';
import About from './views/About/About';
import Skills from './views/Skills/Skills';
import Experience from './views/Experience/Experience';

function App() {
  return (
    <Box>
      <TopBar></TopBar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Experience></Experience>
    </Box>
  );
}

export default App;
