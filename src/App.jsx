import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProfileDetails from './pages/ProfileDetails';
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/profile/:id" element={<ProfileDetails />} /> */}
      </Routes>
    </Router>
  );
}

export default App;