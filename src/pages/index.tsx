import Poster from "@/components/general/poster";
import LoginForm from "@/components/forms/login-form";
import { useLocation } from "react-router-dom";
import RegisterForm from "@/components/forms/register-form";
function Homepage() {
  const location = useLocation();
  return (
    <section className="flex h-screen max-h-screen w-screen">
      {location.pathname === "/" ? <LoginForm /> : <RegisterForm />}
      <Poster />
    </section>
  );
}

export default Homepage;
