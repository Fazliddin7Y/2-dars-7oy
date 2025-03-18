import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddPosts from "./pages/AddPosts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addPosts" element={<AddPosts />} />
      </Routes>
    </Router>
  );
}

export default App;
