import Hero from "@components/Hero";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Section from "@components/Section";
import { Typography } from "@components/Typography";

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
          <div className="flex flex-col gap-16">
            <Hero />
            <Navbar sectionIds={sectionIds} />
          </div>
          <Footer />
        </aside>
        <div>
          <Section id="about">
            <Typography.H3>About</Typography.H3>
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
          </Section>
          <Section id="recommendations">
            <Typography.H3>Recommendations</Typography.H3>
            <Typography.Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              illum atque consequatur, iusto eum sed recusandae a placeat ut
              adipisci ullam, mollitia tempore? Molestiae, dolorum! Sit
              exercitationem quisquam itaque illum?
            </Typography.Paragraph>
          </Section>
          <Section id="projects">
            <Typography.H3>Projects</Typography.H3>
            <Typography.Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              illum atque consequatur, iusto eum sed recusandae a placeat ut
              adipisci ullam, mollitia tempore? Molestiae, dolorum! Sit
              exercitationem quisquam itaque illum?
            </Typography.Paragraph>
          </Section>
          <Section id="experience">
            <Typography.H3>Experience</Typography.H3>
            <Typography.Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              illum atque consequatur, iusto eum sed recusandae a placeat ut
              adipisci ullam, mollitia tempore? Molestiae, dolorum! Sit
              exercitationem quisquam itaque illum?
            </Typography.Paragraph>
          </Section>
          <Section id="playground">
            <Typography.H3>Playground</Typography.H3>
            <Typography.Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              illum atque consequatur, iusto eum sed recusandae a placeat ut
              adipisci ullam, mollitia tempore? Molestiae, dolorum! Sit
              exercitationem quisquam itaque illum?
            </Typography.Paragraph>
          </Section>
        </div>
      </div>
    </main>
  );
}
