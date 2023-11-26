import { experience } from "@static/global";
import { Experience } from "@components/Experience";
import Section from "@components/Section";

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
          <Experience.Content>
            {exp.responsibilities.map((responsibility) => (
              <Experience.Item key={responsibility}>
                {responsibility}
              </Experience.Item>
            ))}
          </Experience.Content>
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
