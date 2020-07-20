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
    photo: 'nathanw',
    name: 'Nathan Wang',
    title: 'Coordinator & Webmaster',
    blurb: 'Nathan Wang is a two-time USACO Finalist and does web development in his free time.',
    website: "https://thecodingwizard.me/",
    codeforces: 'thecodingwizard',
    email: "nathan.r.wang@gmail.com",
    github: "thecodingwizard",
  },
  // {
  //   photo: 'briancdean',
  //   name: 'Brian C. Dean',
  //   title: 'Content Director',
  //   blurb: 'Brian Christopher Dean is the director of the USA Computing Olympiad.',
  //   email: 'bcdean@clemson.edu',
  // },
  {
    photo: 'benq',
    name: 'Benjamin Qi',
    title: 'Content Director',
    blurb: 'Benjamin Qi is a two-time IOI winner, USACO Problemsetter, and part of the MIT Class of 2023.',
    codeforces: "Benq",
    email: "bqi343@gmail.com",
    github: "bqi343"
  },
  {
    photo: 'michael',
    name: 'Michael Cao',
    title: 'Content Author',
    blurb: 'How do you even write anything that's not extremely underwhelming following Benq? Author of classics such as Snowcow and Flooded Farm!!!',
    facebook: "mike.lao.9400",
    codeforces: "caoash",
    email: "cao.michael14@gmail.com",
    github: "caoash", 
  },
  {
    photo: 'darren',
    name: 'Darren Yao',
    title: 'Content Author',
    blurb: '',
    website: 'http://darrenyao.com/',
    email: 'darren.yao@gmail.com',
    codeforces: "darren_yao",
    github: "darren-yao",
  },
  {
    photo: 'michael',
    name: 'Siyong Huang',
    title: 'Content Author',
    blurb: '',
    codeforces: "frodakcin",
    github: "frodakcin",
  },
  {
    photo: 'nathanc',
    name: 'Nathan Chen',
    title: 'Content Author',
    blurb: '',
    codeforces: "nchn27",
    github: "nchn27",
  },
];
