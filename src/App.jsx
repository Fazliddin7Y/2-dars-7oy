import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profiles from "./pages/Profiles";
import Posts from "./pages/Posts";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Bosh sahifa</Link>
        <Link to="/about">Biz haqimizda</Link>
        <Link to="/profiles">Profiles</Link>
        <Link to="/posts">Posts</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </Router>
  );
}

export default App;
