import "./App.css";
import LoginForm from "./components/forms/login-form";
import Poster from "./components/gernal/poster";

function App() {
  return (
    <section className="flex h-screen max-h-screen w-screen">
      <LoginForm />
      <Poster />
    </section>
  );
}

export default App;
