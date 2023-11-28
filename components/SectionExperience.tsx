"use client";

import Section from "@components/Section";
import { experience } from "@static/global";
import { Experience } from "@components/Experience";

function SectionExperience() {
  return (
    <Section id="experience" title="Experience 💻">
      {experience.map((exp) => (
        <Experience key={exp.company} url={exp.url}>
          <Experience.Header>
            <Experience.Logo src={exp.logo} />
            <Experience.Summary
              role={exp.role}
              company={exp.company}
              start={exp.start}
              end={exp.end}
            />
          </Experience.Header>
          <Experience.Content>
            <Experience.Description>{exp.description}</Experience.Description>
            <Experience.Responsibilities
              responsibilities={exp.responsibilities}
            />
          </Experience.Content>
          <Experience.Footer>
            <Experience.Links links={exp.links} />
            <Experience.Stack stack={exp.stack} />
          </Experience.Footer>
        </Experience>
      ))}
    </Section>
  );
}

export default SectionExperience;
