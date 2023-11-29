"use client";

import { useEffect, useState } from "react";

function useFetchGithubStars(repo: string) {
  const url = "https://api.github.com/repos/";
  const [stars, setStars] = useState(0);

  useEffect(() => {
    fetch(`${url}/repo`)
      .then((res) => res.json())
      .then((data) => setStars(data.stargazers_count));
  }, [repo]);

  return stars;
}
