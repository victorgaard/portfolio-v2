import Navbar from "./components/Navbar";
import ThemeDropdown from "./components/ThemeDropdown";
import { Typography } from "./components/Typography";

export default function Home() {
  const sectionIds = [
    "about",
    "recommendations",
    "projects",
    "experience",
    "playground",
  ];
  return (
    <main className="relative min-h-screen px-24">
      <div className="relative mx-auto grid w-full max-w-5xl grid-cols-2">
        <aside className="sticky left-0 top-0 flex h-screen flex-col justify-between py-20">
          <div className="flex flex-col gap-1.5">
            <Typography.H2 className="font-bold tracking-tight">
              Victor F. Santos
            </Typography.H2>
            <Typography.H5 className="font-medium tracking-tight">
              Frontend Engineer
            </Typography.H5>
            <Typography.Paragraph className="max-w-xs [text-wrap:balance]">
              Building things to look cool as shit and who knows where it goes?
            </Typography.Paragraph>
          </div>
          <Navbar sectionIds={sectionIds} />
          <ThemeDropdown />
        </aside>
        <div className="py-20">
          <section id="about" className="h-[2000px] flex flex-col gap-6 w-full [text-wrap:balance]">
            <Typography.Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              illum atque consequatur, iusto eum sed recusandae a placeat ut
              adipisci ullam, mollitia tempore? Molestiae, dolorum! Sit
              exercitationem quisquam itaque illum?
            </Typography.Paragraph>
            <Typography.Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              illum atque consequatur, iusto eum sed recusandae a placeat ut
              adipisci ullam, mollitia tempore? Molestiae, dolorum! Sit
              exercitationem quisquam itaque illum?
            </Typography.Paragraph>
          </section>
          <section id="recommendations" className="h-[2000px] w-full" />
          <section id="projects" className="h-[2000px] w-full" />
          <section id="experience" className="h-[2000px] w-full" />
          <section id="playground" className="h-[2000px] w-full" />
        </div>
      </div>
    </main>
  );
}
