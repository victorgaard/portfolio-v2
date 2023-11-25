import Summary from "@components/Summary";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Section from "@components/Section";
import { Typography } from "@components/Typography";
import TextLink from "@components/TextLink";

export default function Home() {
  const sectionIds = [
    "about",
    "recommendations",
    "projects",
    "open source",
    "experience",
    "playground",
  ];
  return (
    <main className="relative min-h-screen px-8 md:px-24">
      <div className="relative mx-auto grid w-full max-w-5xl md:grid-cols-2">
        <aside className="left-0 top-0 flex flex-col-reverse justify-between gap-8 py-8 md:sticky md:h-screen md:flex-col md:gap-0 md:py-20">
          <div className="flex flex-col gap-16">
            <Summary />
            <Navbar sectionIds={sectionIds} />
          </div>
          <Footer />
        </aside>
        <div>
          <Section id="about" title="Hey, I'm Victor 👋">
            <Typography.Paragraph>
              I&apos;m a frontend engineer, optimistic nihilist and lifelong
              learner.
            </Typography.Paragraph>
            <Typography.Paragraph>
              I currently work at{" "}
              <TextLink
                href="https://tailwarden.com"
                target="_blank"
                rel="noreferrer"
              >
                Tailwarden
              </TextLink>
              , where I ship core features with my team using Next.js, React,
              and Typescript to help companies have more visibility into costs
              and usage from their cloud infrastructure.
            </Typography.Paragraph>
            <Typography.Paragraph>
              Before that, I was an experienced product designer working closely
              with end users and product teams in all kinds of setups: startups,
              scaleups, enterprises, consulting.
            </Typography.Paragraph>
            <Typography.Paragraph>
              My main goal today is pairing my UX and product background with
              web development to craft exceptional and technically robust
              products.
            </Typography.Paragraph>
            <Typography.Paragraph>
              Outside of work, you will find me{" "}
              <TextLink
                href="https://victor.sawthat.band/?utm_source=victorsantoswork"
                className="decoration-sky-500"
                target="_blank"
                rel="noreferrer"
              >
                at metal concerts
              </TextLink>
              , hiking into the nature for{" "}
              <TextLink
                href="https://www.instagram.com/hunter.graphy"
                className="decoration-emerald-500"
                target="_blank"
                rel="noreferrer"
              >
                landscape photography
              </TextLink>
              , or playing Hollow Knight.
            </Typography.Paragraph>
          </Section>
          <Section id="recommendations">
            <Typography.Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              illum atque consequatur, iusto eum sed recusandae a placeat ut
              adipisci ullam, mollitia tempore? Molestiae, dolorum! Sit
              exercitationem quisquam itaque illum?
            </Typography.Paragraph>
          </Section>
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
