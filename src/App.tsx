import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages";
import Inbox from "./pages/inbox";
import { Toaster } from "./components/ui/sonner";
import RegisterPage from "./pages/register-page";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/inbox" element={<Inbox />} />
    </Routes>
    <Toaster theme="system" richColors toastOptions={{}} />
  </Router>
);

export default App;
