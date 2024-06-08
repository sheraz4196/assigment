import Poster from "@/components/general/poster";
import LoginForm from "@/components/forms/login-form";
function Homepage() {
  return (
    <section className="flex h-screen max-h-screen w-screen">
      <LoginForm />
      <Poster />
    </section>
  );
}

export default Homepage;
