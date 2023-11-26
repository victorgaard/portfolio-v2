import { experience } from "@static/global";
import { Experience } from "@components/Experience";
import Section from "@components/Section";
import TextLink from "./TextLink";
import { LinkIcon } from "@heroicons/react/24/outline";
import { Typography } from "./Typography";

function SectionExperience() {
  return (
    <Section id="experience" title="Experience 💻">
      {experience.map((exp) => (
        <Experience key={exp.company}>
          <Experience.Header>
            <Experience.Logo src={exp.logo} />
            <Experience.Summary
              role={exp.role}
              company={exp.company}
              start={exp.start}
              end={exp.end}
            />
          </Experience.Header>
          <div className="flex flex-col gap-2">
            <Typography.Paragraph>
              Tailwarden is a cloud infrastructure visibility product built on
              top of Komiser, our open source tool. As a Frontend engineer I:
            </Typography.Paragraph>
            <Experience.Content>
              <Experience.Item>
                Developed core features for Tailwarden: cloud inventory, tag
                management, filters, custom views, reporting widgets, and more.
              </Experience.Item>
              <Experience.Item>
                Improved our practices by documenting components on Storybook,
                writing unit tests for utils with Jest, and writing component
                tests with Testing Library.
              </Experience.Item>
              <Experience.Item>
                Actively participated in the hiring process of new engineers,
                helping with technical challenges assessment, interviewing, and
                onboarding.
              </Experience.Item>
              <Experience.Item>
                Helped maintain Komiser by migrating the old codebase from
                Angular to React. Wrote documentation for contributors looking
                to contribute with the frontend part. Implemented Storybook and
                testing.
              </Experience.Item>
            </Experience.Content>
          </div>
          <div className="flex gap-4">
            {exp.links.map((link) => (
              <TextLink
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-sm"
              >
                <LinkIcon className="h-3 w-3 text-zinc-600 dark:text-zinc-400" />
                {link.label}
              </TextLink>
            ))}
          </div>
          <Experience.Footer>
            {exp.stack.map((tech) => (
              <Experience.Stack key={tech}>{tech}</Experience.Stack>
            ))}
          </Experience.Footer>
        </Experience>
      ))}
    </Section>
  );
}

export default SectionExperience;
