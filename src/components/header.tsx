import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <div className="absolute w-full flex justify-center py-10">
      <div className="w-full max-w-7xl pl-20">
        <ThemeToggle />
      </div>
    </div>
  );
}
