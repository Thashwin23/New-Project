import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import MarksPage from "./Marks.js";
import StudentFrom from "./StudentFrom.js";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={Home} />
        <Route path="/marks/:id" element={Marks} /> */}
        <Route index element={<Home />} />
        <Route path="/marks/:id" element={<MarksPage />} />
        <Route path="studentForm" element={<StudentFrom />} />
      </Routes>
    </Router>
  );
}

export default App;
