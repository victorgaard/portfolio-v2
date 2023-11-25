export type Recommendation = {
  name: string;
  picture: string;
  title: string;
  relation: string;
  message: {
    paragraph: string;
  }[];
};

export const recommendations: Recommendation[] = [
  {
    name: "Enes Kaya",
    picture: "/picture/enes.jpeg",
    title: "Software Engineer @ Spotify",
    relation: "Worked",
    message: [
      {
        paragraph: `Victor is super quick to understand new concepts, and it was a real pleasure working with him on new features and introducing new tools and libraries to make our Frontend more sophisticated. He is open to new ideas and improvements, and thinks critically about new features. His product design background is a super-power when it comes to Frontend development, because he constantly thinks about the UX and the big picture of the whole product. I got to know him as a very pro-active engineer, eager to learn and seeking feedback from his peers. In short, if you're in need of a skilled frontend engineer, you can't go wrong with Victor :)`,
      },
      {
        paragraph: `Wishing you all the best and hopefully our roads cross again at some point!`,
      },
    ],
  },
];
