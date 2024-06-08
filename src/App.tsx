import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages";
import Inbox from "./pages/inbox";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/register" element={<Homepage />} />
      <Route path="/index" element={<Inbox />} />
    </Routes>
  </Router>
);

export default App;
