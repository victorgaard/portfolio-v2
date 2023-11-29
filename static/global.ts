import { Experience, Project, Recommendation } from "./types";

export const sections = ["about", "recommendations", "experience", "projects"];

export const recommendations: Recommendation[] = [
  {
    name: "Enes Kaya",
    picture: "/recommendation-picture/enes.jpeg",
    title: "Software Engineer @ Spotify",
    relationship: "Worked together at Tailwarden",
    message: `Victor is super quick to understand new concepts, and it was a real pleasure working with him on new features and introducing new tools and libraries to make our Frontend more sophisticated. He is open to new ideas and improvements, and thinks critically about new features. His product design background is a super-power when it comes to Frontend development, because he constantly thinks about the UX and the big picture of the whole product. I got to know him as a very pro-active engineer, eager to learn and seeking feedback from his peers. In short, if you're in need of a skilled frontend engineer, you can't go wrong with Victor :)`,
  },
  {
    name: "Pedro Moreira",
    picture: "/recommendation-picture/pedro.jpeg",
    title: "Senior Software Engineer Consultant",
    relationship: "Worked together at Gitshowcase, Timelinely & Peerfect",
    message: `I had the privilege to have Victor as my co-founder on two projects, Gitshowcase and Peerfect, and to watch him grow as he transitions from design to software engineering. Victor's eagerness to build high-quality products is remarkable and shows in everything he creates. His experience as a designer has given him a critical skill that few people have - the knowledge of how web products get implemented and their limitations combined with the vision to know what the designer and the product team aim to achieve. That is an indispensable layer of intelligence that improves any team's chance of success. As a professional, Victor is very forthcoming - he's kind but will let you know if something is not working out as expected. The courage to tell the truth, even if it's not a popular opinion while being compassionate about the situation tremendously contributes to the conversation and helps drive the product forward meaningfully to customers and his team. I highly recommend Victor to anyone looking for a talented product engineer with a keen eye for top-notch products.`,
  },
];

export const experience: Experience[] = [
  {
    role: "Frontend Engineer",
    company: "Tailwarden",
    logo: "/logo/tailwarden.svg",
    url: "https://tailwarden.com",
    start: "2022-06-01",
    end: null,
    stack: [
      "Next.js",
      "React",
      "Typescript",
      "Tailwind",
      "React Query",
      "Storybook",
      "Jest & Testing Library",
    ],
    description: `Tailwarden is a cloud infrastructure visibility product built on top of Komiser, our open source tool. As a Frontend engineer I:`,
    responsibilities: [
      `Developed core features for Tailwarden: cloud inventory, tag management, filters, custom views, reporting widgets, and more.`,
      `Improved our practices by documenting components on Storybook, writing unit tests for utils with Jest, and writing component tests with Testing Library.`,
      `Actively participated in the hiring process of new engineers, helping with technical challenges assessment, interviewing, and onboarding.`,
      `Helped maintain Komiser by migrating the old codebase from Angular to React. Wrote documentation for contributors to help with the frontend part. Implemented Storybook and testing.`,
    ],
    links: [
      { label: "Tailwarden", url: "https://tailwarden.com" },
      { label: "Komiser", url: "https://komiser.io" },
    ],
  },
  {
    role: "Product Designer",
    company: "Multiple companies",
    logo: "/logo/design-companies.png",
    url: "",
    start: "2015-03-01",
    end: "2022-03-01",
    stack: ["Figma", "Product Design", "UX Research"],
    description: `Before transitioning to a Frontend Engineer, I worked as an experienced product designer for multiple global companies, including: Datadog (Sqreen), Rasa, Prezi, Scalable Path & more.`,
    responsibilities: [],
    links: [
      { label: "Datadog", url: "https://datadoghq.com" },
      { label: "Rasa", url: "https://rasa.com" },
      { label: "Prezi", url: "https://prezi.com" },
      { label: "Scalable Path", url: "https://scalablepath.com" },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Saw that band",
    description:
      "Bands seen live tracking app. Setlists, charts, and reports are generated based on band genres, concert locations, and more.",
    picture: "/project-picture/saw-that-band-thumb.jpg",
    stack: ["Next.js (app dir)", "React", "Typescript", "Tailwind", "Supabase"],
    url: "https://sawthat.band",
    links: [
      {
        type: "link",
        label: "Example",
        url: "https://victor.sawthat.band/",
      },
      {
        type: "github",
        label: "Profile repo",
        url: "https://github.com/victorgaard/saw-that-band",
      },
      {
        type: "github",
        label: "App repo",
        url: "https://github.com/victorgaard/saw-that-band-app",
      },
    ],
  },
  {
    title: "Gitshowcase",
    description:
      "Open source plug-and-play portfolio from GitHub profile. I co-created it as a designer and CSS wizard. Released in 2017 and still getting new users.",
    picture: "/project-picture/saw-that-band-thumb.jpg",
    stack: [],
    url: "https://gitshowcase.com",
    github_repo: "https://github.com/gitshowcase/gitshowcase",
    links: [
      {
        type: "link",
        label: "Example",
        url: "https://gitshowcase.com/victorgaard",
      },
      {
        type: "github",
        label: "Repo",
        url: "https://github.com/gitshowcase/gitshowcase",
      },
      {
        type: "star",
        label: "Star",
        url: "https://github.com/gitshowcase/gitshowcase",
      },
    ],
  },
];
