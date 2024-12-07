import { ThemeToggle } from "./Theme";

export function Navbar() {
  return (
    <nav className="fixed top-0 lg:top-6 px-8 py-3 border-b lg:border-2 border-zinc-500/25 w-screen lg:max-w-6xl xl:max-w-screen-2xl mx-auto left-0 right-0 lg:rounded-2xl bg-zinc-50/50 dark:bg-zinc-950/50 backdrop-blur-sm shadow-transparent z-10">
      <div className="flex justify-between items-center">
        <h1 className="text-xl">@msboffl</h1>
        <ul className="flex space-x-6 uppercase">
          <li>About</li>
          <li>Work</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
}
