import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="flex items-center justify-between min-h-9 w-full bg-white pr-9 pl-5 pt-2 pb-2.5 header-shadow">
      <div className="flex items-center justify-center">
        <img src="/assets/logo.png" alt="" />
      </div>
      <Button className="bg-[#6D31ED]" asChild>
        <a href="/">Logout</a>
      </Button>
    </header>
  );
}
