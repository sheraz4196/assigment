import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages";
import Inbox from "./pages/inbox";
import { Toaster } from "./components/ui/sonner";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/register" element={<Homepage />} />
      <Route path="/inbox" element={<Inbox />} />
    </Routes>
    <Toaster />
  </Router>
);

export default App;
