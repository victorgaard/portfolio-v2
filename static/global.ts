import { Experience, Project, Recommendation } from "./types";

export const sections = [
  "summary",
  "recommendations",
  "projects",
  "experience",
] as const;

export const recommendations: Recommendation[] = [
  {
    name: "Mohamed Labouardy",
    picture: "/recommendation-picture/mohamed.jpeg",
    title: "CTO @ Tailwarden",
    relationship: "Manager at Tailwarden",
    message: `As Victor's manager at Tailwarden, I've seen his extraordinary contributions first-hand. Victor excelled in developing core features for our open-source project, Komiser, and our flagship product, Tailwarden, showcasing his skills in frontend stack like React and TypeScript. He was instrumental in evolving our tech stack and played a key role in scaling our engineering team from 1 to 4, highlighting his technical skills and adaptability in an early stage environment. His combined skills in tech and design make him an asset to any team.`,
  },
  {
    name: "Enes Kaya",
    picture: "/recommendation-picture/enes.jpeg",
    title: "Software Engineer @ Spotify",
    relationship: "Worked together at Tailwarden",
    message: `Victor is super quick to understand new concepts, and it was a real pleasure working with him on new features and introducing new tools and libraries to make our Frontend more sophisticated. He is open to new ideas and improvements, and thinks critically about new features. His product design background is a super-power when it comes to Frontend development, because he constantly thinks about the UX and the big picture of the whole product. I got to know him as a very pro-active engineer, eager to learn and seeking feedback from his peers. In short, if you're in need of a skilled frontend engineer, you can't go wrong with Victor :)`,
  },
  {
    name: "Yoan Almeida",
    picture: "/recommendation-picture/yoan.jpeg",
    title: "Senior Product Designer @ Tailwarden",
    relationship: "Worked together at Tailwarden",
    message: `Victor is a joy to work with, thanks to his attention to detail and positive attitude every day. He actively participates in product design discussions, and his background as a designer is a significant asset, especially for collaboration across tech and product teams. Victor is always transparent and provides well-constructed feedback, making it easy to exchange ideas with him. He is highly proactive in implementing specifications and consistently strives to offer the best user experience to build the best product. I can only recommend working with him :)`,
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
      "Open source",
    ],
    description: `Tailwarden is a cloud infrastructure visibility product built on top of Komiser, our open source tool.`,
    responsibilities: [
      `Developed core features for our open-source project, Komiser
      (3M+ downloads), and our flagship product, Tailwarden.`,
      `First hire in the engineering team, helping scale the team from 1
      to 4. Actively participated in the hiring process: interviews, code
      assessments, and onboarding of new peers.`,
      `Improved practices by documenting components on Storybook,
      and writing unit tests with Jest and React Testing Library.`,
      `Collaborated with our product designers via design reviews and
      weekly meetings.`,
    ],
    links: [
      { label: "Tailwarden", url: "https://tailwarden.com" },
      {
        label: "Storybook",
        url: "https://storybook.tailwarden.com/?path=/docs/v2-cloudaccountcard--docs",
      },
      { label: "Komiser", url: "https://komiser.io" },
    ],
  },
  {
    role: "Product Designer",
    company: "Datadog, Rasa, and other companies",
    logo: "/logo/design-companies.png",
    url: "",
    start: "2015-03-01",
    end: "2022-03-01",
    stack: ["Figma", "Product Design", "UX Research"],
    description: `Before transitioning to Frontend, I worked as a product designer for multiple global companies including Datadog, Rasa, Prezi, Scalable Path and more.`,
    responsibilities: [
      `Worked as an IC in all phases of the design process including user
    research, interaction design, wireframing, prototyping, visual
    design, handover specs, and usability testing.`,
      `Influenced product decisions through insights and creative
      problem-solving skills.`,
    ],
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
        label: "Live",
        url: "https://victor.sawthat.band/",
      },
      {
        type: "github",
        label: "Profile GitHub",
        url: "https://github.com/victorgaard/saw-that-band",
      },
      {
        type: "github",
        label: "App GitHub",
        url: "https://github.com/victorgaard/saw-that-band-app",
      },
    ],
  },
  {
    title: "Gitshowcase",
    description:
      "Open source plug-and-play portfolio from GitHub profile. I co-created it as a designer and CSS helper. Released in 2017 and still getting new users.",
    picture: "/project-picture/gitshowcase-thumb.jpeg",
    stack: ["Design", "CSS", "Open source"],
    url: "https://gitshowcase.com",
    github_repo: "https://github.com/gitshowcase/gitshowcase",
    links: [
      {
        type: "link",
        label: "Article",
        url: "https://www.freecodecamp.org/news/we-launched-an-open-source-product-what-happens-now-e586b6d8b99c/",
      },
      {
        type: "github",
        label: "GitHub",
        url: "https://github.com/gitshowcase/gitshowcase",
      },
      {
        type: "star",
        label: "Star",
        url: "https://github.com/gitshowcase/gitshowcase",
      },
      {
        type: "productHunt",
        label: "4th of the day",
        url: "https://www.producthunt.com/products/git-showcase#gitshowcase",
      },
    ],
  },
];
