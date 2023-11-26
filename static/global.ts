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
    message: `Victor is super quick to understand new concepts, and it was a real pleasure working with him on new features and introducing new tools and libraries to make our Frontend more sophisticated. He is open to new ideas and improvements, and thinks critically about new features. His product design background is a super-power when it comes to Frontend development, because he constantly thinks about the UX and the big picture of the whole product. I got to know him as a very pro-active engineer, eager to learn and seeking feedback from his peers. In short, if you're in need of a skilled frontend engineer, you can't go wrong with Victor :) 
    
    Wishing you all the best and hopefully our roads cross again at some point!`,
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

type Experience = {
  role: string;
  company: string;
  logo: string;
  site: string;
  start: string;
  end: string | null;
  stack: string[];
  responsibilities: string[];
  links: {
    label: string;
    href: string;
  }[];
};

export const experience: Experience[] = [
  {
    role: "Frontend Engineer",
    company: "Tailwarden",
    logo: "logo/tailwarden.svg",
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
    responsibilities: [
      `Migrated Tailwarden & Komiser from Angular to React on CTO's request`,
      `Defined the base architecture and new framework of choice (Next.js, Typescript & Tailwind)`,
      `Implemented authentication with AWS Cognito/Amplify`,
      `Collaborated with our product designers via design reviews and weekly meetings`,
      `Actively developed core features (cloud inventory, tag management, filters, custom views, dashboard widgets, custom reports & more)`,
    ],
    links: [
      { label: "Tailwarden", href: "https://tailwarden.com" },
      { label: "Komiser", href: "https://komiser.io" },
    ],
  },
];
