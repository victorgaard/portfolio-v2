import Section from "@components/Section"
import TextLink from "@components/TextLink"
import { Typography } from "@components/Typography"

function SectionSummary() {
  return (
    <Section id="summary" title="👋 Hey, I'm Victor">
      <Typography.Paragraph>
        I&apos;m a design engineer, optimistic nihilist and lifelong learner.
      </Typography.Paragraph>
      <Typography.Paragraph>
        Currently, I&apos;m building FastAPI Cloud at{" "}
        <TextLink
          href="https://fastapilabs.com"
          className="decoration-purple-400"
        >
          FastAPI Labs
        </TextLink>
        , working closely with the brilliant minds that made FastAPI, one of the
        fastest-growing backend frameworks in the world.
      </Typography.Paragraph>
      <Typography.Paragraph>
        Before that I was at{" "}
        <TextLink href="https://fleek.xyz" className="decoration-amber-400">
          Fleek
        </TextLink>
        , where I contributed across the frontend stack and design system. I
        played a key role in shaping our AI Agents product from the ground up:
        shipping core features, refining interactions, and ensuring a strong
        foundation of accessibility and UI consistency.
      </Typography.Paragraph>
      <Typography.Paragraph>
        Earlier in my career, I was a product designer partnering with end users
        and product teams across startups, enterprises, and consulting firms.
      </Typography.Paragraph>
      <Typography.Paragraph>
        Outside of work, you will likely find me{" "}
        <TextLink
          href="https://victor.sawthat.band/?utm_source=victorsantoswork"
          className="decoration-sky-500"
        >
          at a metal show
        </TextLink>
        , wandering the wilderness{" "}
        <TextLink
          href="https://www.instagram.com/hunter.graphy"
          className="decoration-emerald-500"
        >
          with a camera
        </TextLink>
        , or getting lost in <span className="line-through">Hollow Knight</span>{" "}
        Silksong.
      </Typography.Paragraph>
    </Section>
  )
}

export default SectionSummary
