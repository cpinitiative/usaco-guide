export type Author = {
  photo: string; // url of photo relative to content/authors/images/, EXCLUDING EXTENSION
  name: string;
  title: string;
  blurb: string;
  email?: string;
  facebook?: string;
  linkedin?: string;
  github?: string;
  website?: string;
  codeforces?: string;
};

export const Authors: Author[] = [
  {
    photo: 'benq',
    name: 'Benjamin Qi',
    title: 'Content Director',
    blurb: 'Benjamin Qi is a two-time IOI winner, USACO Problemsetter, and part of the MIT Class of 2023.',
    facebook: "bqi343",
    codeforces: "Benq",
    email: "bqi343@gmail.com",
    github: "bqi343"
  },
  {
    photo: 'nathanw',
    name: 'Nathan Wang',
    title: 'Coordinator / Webmaster',
    blurb: 'Nathan Wang is a zero-time IOI qualifier, USACO n00b, and part of the Community College Class of 2026.',
    website: "https://thecodingwizard.me/",
    email: "nathan.r.wang@gmail.com",
    github: "thecodingwizard",
  },
];