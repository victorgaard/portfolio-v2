import Section from "@components/Section";
import TextLink from "@components/TextLink";
import { Typography } from "@components/Typography";

function SectionSummary() {
  return (
    <Section id="summary" title="👋 Hey, I'm Victor">
      <Typography.Paragraph>
        I&apos;m a frontend engineer, optimistic nihilist and lifelong learner.
      </Typography.Paragraph>
      <Typography.Paragraph>
        I currently work at{" "}
        <TextLink href="https://tailwarden.com">Tailwarden</TextLink>, where I
        ship core features with my team using Next.js, React, and Typescript to
        help companies have more visibility into costs and usage from their
        cloud infrastructure.
      </Typography.Paragraph>
      <Typography.Paragraph>
        Before that, I was an experienced product designer working closely with
        end users and product teams in all kinds of setups: startups, scaleups,
        enterprises, consulting.
      </Typography.Paragraph>
      <Typography.Paragraph>
        My main goal today is pairing my UX and product background with web
        development to craft exceptional and technically robust products.
      </Typography.Paragraph>
      <Typography.Paragraph>
        Outside work, you will find me{" "}
        <TextLink
          href="https://victor.sawthat.band/?utm_source=victorsantoswork"
          className="decoration-sky-500"
        >
          at metal concerts
        </TextLink>
        , hiking into nature for{" "}
        <TextLink
          href="https://www.instagram.com/hunter.graphy"
          className="decoration-emerald-500"
        >
          landscape photography
        </TextLink>
        , or playing Hollow Knight.
      </Typography.Paragraph>
    </Section>
  );
}

export default SectionSummary;
