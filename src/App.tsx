import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  </Router>
);

export default App;
