import Summary from "@components/Summary";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Section from "@components/Section";
import { Typography } from "@components/Typography";
import Recommendations from "@components/Recommendations";
import About from "@components/About";

export default function Home() {
  return (
    <main className="relative min-h-screen px-8 md:px-24">
      <div className="relative mx-auto grid w-full max-w-5xl md:grid-cols-2">
        <aside className="left-0 top-0 flex flex-col-reverse justify-between gap-8 py-8 md:sticky md:h-screen md:flex-col md:gap-0 md:py-20">
          <div className="flex flex-col gap-16">
            <Summary />
            <Navbar />
          </div>
          <Footer />
        </aside>
        <div>
          <About />
          <Recommendations />
          <Section id="projects">
            <Typography.Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              illum atque consequatur, iusto eum sed recusandae a placeat ut
              adipisci ullam, mollitia tempore? Molestiae, dolorum! Sit
              exercitationem quisquam itaque illum?
            </Typography.Paragraph>
          </Section>
          <Section id="open source">
            <Typography.Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              illum atque consequatur, iusto eum sed recusandae a placeat ut
              adipisci ullam, mollitia tempore? Molestiae, dolorum! Sit
              exercitationem quisquam itaque illum?
            </Typography.Paragraph>
          </Section>
          <Section id="experience">
            <Typography.Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              illum atque consequatur, iusto eum sed recusandae a placeat ut
              adipisci ullam, mollitia tempore? Molestiae, dolorum! Sit
              exercitationem quisquam itaque illum?
            </Typography.Paragraph>
          </Section>
          <Section id="playground">
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
