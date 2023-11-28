export type Recommendation = {
  name: string;
  picture: string;
  title: string;
  relationship: string;
  message: string;
};

export type Link = {
  label: string;
  url: string;
  type: string;
};

export type Experience = {
  role: string;
  company: string;
  logo: string;
  url: string;
  start: string;
  end: string | null;
  stack: string[] | [];
  description: string;
  responsibilities: string[] | [];
  links: Omit<Link, "type">[] | [];
};

export type Project = {
  title: string;
  description: string;
  stack: string[] | [];
  url: string;
  links: Link[];
};
