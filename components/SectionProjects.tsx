"use client";

import Section from "@components/Section";
import { projects } from "@static/global";
import { Project } from "./Project";

function SectionProjects() {
  return (
    <Section id="projects" title="🚀 sideProjects();">
      {projects.map((project) => (
        <Project key={project.title} url={project.url}>
          <Project.Main>
            <Project.Picture picture={project.picture} />
            <Project.Content>
              <Project.Info
                title={project.title}
                description={project.description}
              />
              <Project.Links links={project.links} repo={project.github_repo} />
            </Project.Content>
          </Project.Main>
          <Project.Stack stack={project.stack} />
        </Project>
      ))}
    </Section>
  );
}

export default SectionProjects;
