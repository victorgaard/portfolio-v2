export const sections = [
  "about",
  "recommendations",
  "experience",
  "projects",
  "open source",
  "playground",
];

type Recommendation = {
  name: string;
  picture: string;
  title: string;
  relationship: string;
  message: string;
};

export const recommendations: Recommendation[] = [
  {
    name: "Enes Kaya",
    picture: "/picture/enes.jpeg",
    title: "Software Engineer @ Spotify",
    relationship: "Worked together at Tailwarden",
    message: `Victor is super quick to understand new concepts, and it was a real pleasure working with him on new features and introducing new tools and libraries to make our Frontend more sophisticated. He is open to new ideas and improvements, and thinks critically about new features. His product design background is a super-power when it comes to Frontend development, because he constantly thinks about the UX and the big picture of the whole product. I got to know him as a very pro-active engineer, eager to learn and seeking feedback from his peers. In short, if you're in need of a skilled frontend engineer, you can't go wrong with Victor :)`,
  },
  {
    name: "Pedro Moreira",
    picture: "/picture/pedro.jpeg",
    title: "Senior Software Engineer Consultant",
    relationship: "Worked together at Gitshowcase, Timelinely & Peerfect",
    message: `I had the privilege to have Victor as my co-founder on two projects, Gitshowcase and Peerfect, and to watch him grow as he transitions from design to software engineering.
    
    Victor's eagerness to build high-quality products is remarkable and shows in everything he creates. His experience as a designer has given him a critical skill that few people have - the knowledge of how web products get implemented and their limitations combined with the vision to know what the designer and the product team aim to achieve. That is an indispensable layer of intelligence that improves any team's chance of success.
      
    As a professional, Victor is very forthcoming - he's kind but will let you know if something is not working out as expected. The courage to tell the truth, even if it's not a popular opinion while being compassionate about the situation tremendously contributes to the conversation and helps drive the product forward meaningfully to customers and his team.
  
    I highly recommend Victor to anyone looking for a talented product engineer with a keen eye for top-notch products.`,
  },
];

type ExperienceLink = {
  label: string;
  href: string;
};

export type Experience = {
  role: string;
  company: string;
  logo: string;
  site: string;
  start: string;
  end: string | null;
  stack: string[] | [];
  description: string;
  responsibilities: string[] | [];
  links: ExperienceLink[] | [];
};

export const experience: Experience[] = [
  {
    role: "Frontend Engineer",
    company: "Tailwarden",
    logo: "/logo/tailwarden.svg",
    site: "https://tailwarden.com",
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
      { label: "Tailwarden", href: "https://tailwarden.com" },
      { label: "Komiser", href: "https://komiser.io" },
    ],
  },
  {
    role: "Product Designer",
    company: "Multiple companies",
    logo: "/logo/design-companies.png",
    site: "",
    start: "2015-03-01",
    end: "2022-03-01",
    stack: ["Figma", "Product Design", "UX Research"],
    description: `Before transitioning to a Frontend Engineer, I worked as an experienced product designer for multiple global companies, including: Datadog (Sqreen), Rasa, Prezi, Scalable Path & more.`,
    responsibilities: [],
    links: [
      { label: "Datadog", href: "https://datadoghq.com" },
      { label: "Rasa", href: "https://rasa.com" },
      { label: "Prezi", href: "https://prezi.com" },
      { label: "Scalable Path", href: "https://scalablepath.com" },
    ],
  },
];
