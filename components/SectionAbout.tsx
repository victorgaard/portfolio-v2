import Section from "@components/Section";
import TextLink from "@components/TextLink";
import { Typography } from "@components/Typography";

function SectionSummary() {
  return (
    <Section id="summary" title="👋 Hey, I'm Victor">
      <Typography.Paragraph>
        I&apos;m a design engineer, optimistic nihilist and lifelong learner.
      </Typography.Paragraph>
      <Typography.Paragraph>
        I currently work at{" "}
        <TextLink
          href="https://fleek.xyz"
          className="decoration-amber-400"
        >
          Fleek
        </TextLink>
        , where I help my team in all things design system, frontend
        engineering, interaction design, and accessibility.
      </Typography.Paragraph>
      <Typography.Paragraph>
        Previously, I was working at{" "}
        <TextLink href="https://tailwarden.com">Tailwarden</TextLink>, where I
        helped my team shipping core features with React, Next.js and
        Typescript, so other companies could have more visibility into costs and
        usage from their cloud infrastructure.
      </Typography.Paragraph>
      <Typography.Paragraph>
        Before that, I was an experienced product designer working closely with
        end users and product teams in all kinds of setups: startups, scaleups,
        enterprises, and consulting.
      </Typography.Paragraph>
      <Typography.Paragraph>
        Outside of work, you will find me{" "}
        <TextLink
          href="https://victor.sawthat.band/?utm_source=victorsantoswork"
          className="decoration-sky-500"
        >
          at metal concerts
        </TextLink>
        , wandering in the wilderness{" "}
        <TextLink
          href="https://www.instagram.com/hunter.graphy"
          className="decoration-emerald-500"
        >
          with a camera
        </TextLink>
        , or playing Hollow Knight.
      </Typography.Paragraph>
    </Section>
  );
}

export default SectionSummary;
