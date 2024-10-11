import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import '@fontsource/ibm-plex-mono';
import './App.css';


function App() {
return (
<div className = 'body'>
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
</div>
);
}

export default App;