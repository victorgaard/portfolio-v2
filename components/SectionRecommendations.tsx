"use client";

import Section from "@components/Section";
import { recommendations } from "@static/global";
import { Recommendation } from "@components/Recommendation";

function SectionRecommendations() {
  return (
    <Section id="recommendations" title="Worked together 💪" className="gap-12">
      {recommendations.map((recommendation, idx) => {
        const id = idx + 1;
        return (
          <Recommendation key={recommendation.name} id={id}>
            <Recommendation.Header
              name={recommendation.name}
              title={recommendation.title}
              relationship={recommendation.relationship}
              picture={recommendation.picture}
            />
            <Recommendation.Message id={id}>
              {recommendation.message}
            </Recommendation.Message>
          </Recommendation>
        );
      })}
    </Section>
  );
}

export default SectionRecommendations;
