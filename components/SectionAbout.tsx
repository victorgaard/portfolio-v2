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
        Currently exploring full time roles as a founding engineer (frontend
        focused) or design engineer. Open to any industry, though developer
        tools are especially close to my heart.
      </Typography.Paragraph>
      <Typography.Paragraph>
        Most recently, I was at{" "}
        <TextLink href="https://fleek.xyz" className="decoration-amber-400">
          Fleek
        </TextLink>
        , where I worked across our frontend stack and design system. I played a
        key role in building our AI Agents product from the ground up: shipping
        core features, refining interactions, and ensuring a strong foundation
        of accessibility and UI consistency.
      </Typography.Paragraph>
      <Typography.Paragraph>
        Before that, I was working at{" "}
        <TextLink href="https://tailwarden.com">Tailwarden</TextLink>, where I
        contributed to both our cloud visibility platform and Komiser, our open
        source tool with over 3 million downloads. I helped modernize the
        frontend, shipped key features, and improved developer experience using
        React, Next.js, and TypeScript.
      </Typography.Paragraph>
      <Typography.Paragraph>
        Earlier in my career, I was an experienced product designer working
        closely with end users and product teams in a variety of environments,
        from startups to enterprises and consulting firms.
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
