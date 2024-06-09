import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import FormsToggler from "../general/forms-toggler";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
const loginFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." }),
});
export default function LoginForm() {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const isLoading = form.formState.isSubmitting;
  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    if (
      values.email === "dev@gmail.com" &&
      values.password === "dev@gmail.com"
    ) {
      toast.success("Logged in successfully.");
      navigate("/inbox");
    } else {
      toast.error("Invalid Username or password.");
    }
  }

  return (
    <Form {...form}>
      <form
        className="flex items-center justify-center w-full md:w-[457px] px-[22px]"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div>
          <div className="flex items-center justify-center mb-6">
            <img src="/assets/logo.png" alt="" />
          </div>
          <h3 className="text-[#9095A1] font-bold text-[34px] leading-[48px] mb-9 text-center">
            Log In
          </h3>
          <div className="flex flex-col gap-[13px] mb-[41px]">
            <FormField
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <Label className="max-w-max text-xs leading-[20px] text-[#FF56A5]">
                    Email
                  </Label>
                  <FormControl>
                    <Input placeholder="example@mail.com" {...field} />
                  </FormControl>
                  <FormMessage className="max-w-max" />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <Label className="max-w-max text-xs leading-[20px] text-[#FF56A5]">
                    Password
                  </Label>
                  <FormControl>
                    <Input placeholder="example@mail.com" {...field} />
                  </FormControl>
                  <FormMessage className="max-w-max" />
                </FormItem>
              )}
            />
          </div>
          <Button
            className="w-full bg-[#15ABFF] rounded-[4px] hover:bg-op mb-[45px]"
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? "Logging In..." : "Login"}
          </Button>
          <FormsToggler formName="login" />
        </div>
      </form>
    </Form>
  );
}
