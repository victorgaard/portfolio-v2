"use client";

import Section from "@components/Section";
import { recommendations } from "@static/global";
import { Recommendation } from "@components/Recommendation";
import TextLink from "./TextLink";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function SectionRecommendations() {
  const [isShowingAllRecommendations, setIsShowingAllRecommendations] =
    useState(false);
  return (
    <Section id="recommendations" className="gap-0">
      {recommendations
        .slice(0, isShowingAllRecommendations ? recommendations.length : 3)
        .map((recommendation) => {
          return (
            <Recommendation
              key={recommendation.name}
              name={recommendation.name}
            >
              <Recommendation.Header
                name={recommendation.name}
                title={recommendation.title}
                relationship={recommendation.relationship}
                picture={recommendation.picture}
              />
              <Recommendation.Message name={recommendation.name}>
                {recommendation.message}
              </Recommendation.Message>
            </Recommendation>
          );
        })}
      <TextLink
        href={`#recommendation-${recommendations[recommendations.length - 2].name}`}
        target="_self"
        className="mt-12 flex cursor-pointer items-center gap-2"
        onClick={() =>
          setIsShowingAllRecommendations(!isShowingAllRecommendations)
        }
      >
        {isShowingAllRecommendations ? (
          <>
            <ChevronUpIcon className="h-4 w-4" />
            Show less
          </>
        ) : (
          <>
            <ChevronDownIcon className="h-4 w-4" />
            Show all recommendations
          </>
        )}
      </TextLink>
    </Section>
  );
}

export default SectionRecommendations;
