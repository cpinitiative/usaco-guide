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
  youtube?: string;
};

export const Authors: Author[] = [
  {
    photo: 'nathanw',
    name: 'Nathan Wang',
    title: 'Coordinator & Webmaster',
    blurb:
      'Nathan Wang is a three-time USACO Finalist and web development enthusiast.',
    website: 'https://thecodingwizard.me/',
    codeforces: 'thecodingwizard',
    email: 'nathan.r.wang@gmail.com',
    github: 'thecodingwizard',
  },
  // {
  //   photo: 'briancdean',
  //   name: 'Brian C. Dean',
  //   title: 'Content Director',
  //   blurb: 'Brian Christopher Dean is the director of USACO.',
  //   email: 'bcdean@clemson.edu',
  // },
  {
    photo: 'benq',
    name: 'Benjamin Qi',
    title: 'Content Director',
    blurb:
      'Benjamin Qi is a two-time IOI winner, USACO Problemsetter, and part of the MIT Class of 2023.',
    codeforces: 'Benq',
    email: 'bqi343@gmail.com',
    github: 'bqi343',
  },
  {
    photo: 'michael',
    name: 'Michael Cao',
    title: 'Core Team',
    blurb:
      'Michael Cao is a USACO Platinum competitor and USACO problemsetter.',
    codeforces: 'caohash',
    email: 'cao.michael14@gmail.com',
    github: 'caoash',
  },
  {
    photo: 'darren',
    name: 'Darren Yao',
    title: 'Core Team',
    blurb:
      'Darren Yao is a USACO Platinum competitor and author of the textbook "An Introduction to USACO."',
    website: 'http://darrenyao.com/',
    email: 'darren.yao@gmail.com',
    codeforces: 'darren_yao',
    github: 'darren-yao',
  },
  {
    photo: 'nathanc',
    name: 'Nathan Chen',
    title: 'Core Team',
    blurb:
      'Nathan Chen is a two-time USACO Finalist who competes in both Java and C++ fluently.',
    codeforces: 'nchn27',
    github: 'nchn27',
    email: 'nchn27@gmail.com',
  },
  {
    photo: 'siyong1',
    name: 'Siyong Huang',
    title: 'Core Team',
    blurb: 'Siyong Huang is a three-time USACO Finalist.',
    codeforces: 'frodakcin',
    github: 'frodakcin',
  },
  {
    photo: 'andi',
    name: 'Andi Qu',
    title: 'Core Team',
    blurb: 'Andi Qu is an IOI and IMO bronze medalist.',
    codeforces: 'dolphingarlic',
    github: 'dolphingarlic',
    email: 'andi@andiqu.com',
    website: 'https://andiqu.com',
  },
  {
    photo: 'Andrew',
    name: 'Andrew Wang',
    title: 'Core Team',
    blurb:
      'Andrew Wang is a USACO competitor who competes in multiple languages fluently.',
    codeforces: 'a.wang',
    github: 'andrewwangva',
    email: 'andrewwangva@gmail.com',
  },
  {
    photo: "Dong",
    name: "Bing-Dong Liu",
    title: "Content Manager",
    blurb: "Bing-Dong Liu is a USACO Platinum competitor who creates USACO Training problems video editorials.",
    codeforces: "lunchbox",
    github: "dongliu0426",
    email: "dongliu0426@gmail.com",
    youtube: "https://www.youtube.com/channel/UC6je-w-ygZqxRsG76HtMceQ",
  },
  {
    photo: "Harry",
    name: "Qi Wang",
    title: "Content Manager",
    blurb: "Qi Wang is a competitive programmer that participates in USACO with multiple languages. He is also a regular website developer.",
    github: "HarryWangATX",
    website: "https://harrycodes.com/",
    email: "harrynicomama@gmail.com",
    youtube: "https://www.youtube.com/c/RandomCoder",
  },
  {
    photo: "maggie",
    name: "Maggie Liu",
    title: "Content Manager",
    blurb: "Maggie Liu is a USACO competitor who enjoys problem solving and teaching others programming and math.",
    github: "maggie-j-liu",
    codeforces: "ml1234",
    email: "maggie.j.liu@gmail.com",
    website: "https://maggieliu.dev",
  },
];
