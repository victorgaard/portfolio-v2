export type Recommendation = {
  name: string;
  picture: string;
  title: string;
  relationship: string;
  message: string;
};

export type LinkType = "link" | "github" | "star" | "productHunt";

export type Link = {
  label: string;
  url: string;
  type: LinkType;
};

export type Stack = string[] | [];

export type Experience = {
  role: string;
  company: string;
  logo: string;
  url: string;
  start: string;
  end: string | null;
  stack: Stack;
  description: string;
  responsibilities: string[] | [];
  links: Omit<Link, "type">[] | [];
};

export type Project = {
  title: string;
  description: string;
  picture: string;
  stack: Stack;
  github_repo?: string;
  url: string;
  links: Link[];
};
