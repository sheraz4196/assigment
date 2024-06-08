type FormsTogglerProps = {
  formName: "login" | "register";
};
export default function FormsToggler({ formName }: FormsTogglerProps) {
  return (
    <p className="max-w-max text-xs leading-[20px] text-[#15ABFF]">
      <a href={formName === "login" ? "/register" : "/"}>
        {formName === "login"
          ? `Don't have an account? Sign Up`
          : `Already have an account? Login`}
      </a>
    </p>
  );
}
