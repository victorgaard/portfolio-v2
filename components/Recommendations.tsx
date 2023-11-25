"use client";

import Section from "@components/Section";
import { recommendations } from "@static/global";
import { Recommendation } from "@components/Recommendation";

function Recommendations() {
  return (
    <Section id="recommendations" title="Worked together 💪" className="gap-10">
      {recommendations.map((recommendation) => (
        <Recommendation key={recommendation.name}>
          <Recommendation.Header
            name={recommendation.name}
            title={recommendation.title}
            relationship={recommendation.relationship}
            picture={recommendation.picture}
          />
          <Recommendation.Message>
            {recommendation.message}
          </Recommendation.Message>
        </Recommendation>
      ))}
    </Section>
  );
}

export default Recommendations;
