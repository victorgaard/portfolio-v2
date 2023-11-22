import Navbar from "./components/Navbar";
import { Typography } from "./components/Typograph";

export default function Home() {
  const sectionIds = [
    "home",
    "testimonials",
    "projects",
    "experience",
    "playground",
  ];
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between bg-zinc-950">
      <Navbar sectionIds={sectionIds} />
      <header
        id="home"
        className="flex h-[calc(100dvh-100px)] w-full max-w-5xl flex-col items-center justify-center sm:h-[calc(100vh-100px)]"
      >
        <Typography.H1>Frontend Engineering next level</Typography.H1>
      </header>
      <section id="testimonials" className="h-[2000px] w-full bg-gray-600" />
      <section id="projects" className="h-[2000px] w-full bg-white" />
      <section id="experience" className="h-[2000px] w-full bg-gray-600" />
      <section id="playground" className="h-[2000px] w-full bg-white" />
    </main>
  );
}
