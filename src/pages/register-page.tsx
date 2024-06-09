import Poster from "@/components/general/poster";
import RegisterForm from "@/components/forms/register-form";
function RegisterPage() {
  return (
    <section className="flex h-screen max-h-screen w-screen">
      <RegisterForm />
      <Poster />
    </section>
  );
}

export default RegisterPage;
