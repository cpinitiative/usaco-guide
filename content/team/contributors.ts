export type Member = {
  photo?: string; // url of photo relative to content/authors/images/, EXCLUDING EXTENSION
  name: string;
  titles: string[];
  email?: string;
  facebook?: string;
  linkedin?: string;
  github?: string;
  website?: string;
  codeforces?: string;
  youtube?: string;
  reddit?: string;
  instagram?: string;
};

const roles = {
  webdev: 'Web Developer',
  contentAuthor: 'Content Author',
  liveInstructor: 'Live Classes',
  videoInstructor: 'Self-Study Classes',
  clubCurriculum: 'Curriculum Developer',
  founder: 'Founding Member',
};

export const OrderedFirstMembers: Member[] = [
  {
    photo: 'benq',
    name: 'Benjamin Qi',
    titles: [roles.founder, 'Content Director', '2x IOI Winner'],
    github: 'bqi343',
    codeforces: 'Benq',
    email: 'bqi343@gmail.com',
  },
  {
    photo: 'kevins',
    name: 'Kevin Sheng',
    titles: ['Content Manager', roles.contentAuthor, roles.videoInstructor],
    github: 'sanspapyrus683',
    codeforces: 'sanspapyrus683',
    reddit: 'sanspapyrus683',
  },
  {
    photo: 'ryan',
    name: 'Ryan Chou',
    titles: [
      'Executive',
      'Content Manager',
      roles.liveInstructor,
      roles.videoInstructor,
      roles.contentAuthor,
    ],
    github: 'ryanchou-dev',
    website: 'https://www.ryanchou.dev/',
  },
  {
    photo: 'nathanw',
    name: 'Nathan Wang',
    titles: [roles.founder, 'Board', '4x Finalist', roles.webdev],
    github: 'thecodingwizard',
    website: 'https://thecodingwizard.me/',
    codeforces: 'thecodingwizard',
    email: 'nathan.r.wang@gmail.com',
  },
  {
    photo: 'melody',
    name: 'Melody Yu',
    titles: ['Executive', 'Director of Outreach', roles.videoInstructor],
    github: 'cskitty',
    website: 'https://melodyyu.com/',
    email: 'ocmelodyyu@gmail.com',
    youtube: 'https://www.youtube.com/channel/UCPkhk5gFov8vIPXj0zHyxEQ',
  },
  {
    photo: 'Dong',
    name: 'Bing-Dong Liu',
    titles: ['Content Manager', roles.liveInstructor],
    github: 'dongliu0426',
    codeforces: 'lunchbox',
    email: 'dongliu0426@gmail.com',
    youtube: 'https://www.youtube.com/channel/UC6je-w-ygZqxRsG76HtMceQ',
  },
  {
    photo: 'evan',
    name: 'Evan Zhao',
    titles: ['Board', roles.liveInstructor],
    email: 'evanzhao12@gmail.com',
  },
  {
    photo: 'ryanfu',
    name: 'Ryan Fu',
    titles: [
      'Director of Classes',
      'Director of Workshops',
      'Finalist',
      'Outreach',
    ],
  },
  {
    photo: 'justin_ji',
    name: 'Justin Ji',
    titles: ['Content Manager', roles.contentAuthor],
    github: 'TheGamingMousse',
  },
  {
    photo: 'tatha',
    name: 'Tatha Pandey',
    titles: [roles.liveInstructor],
    github: 'tathap',
  },
];

export const RestOfMembers: Member[] = [
  {
    photo: 'elliotth',
    name: 'Elliot Harper',
    titles: [roles.webdev],
    github: 'emhgit',
    email: 'eharper0815@gmail.com',
  },
  {
    photo: 'meherk',
    name: 'Meher Khurana',
    titles: [roles.webdev],
  },
  {
    photo: 'rohang',
    name: 'Rohan Garg',
    titles: ['Director of Contests', roles.liveInstructor],
  },
  {
    photo: 'davidg',
    name: 'David Guo',
    titles: [roles.contentAuthor],
    github: 'JoltedCowIceCream',
  },
  {
    photo: 'envy',
    name: 'Chongtian Ma',
    titles: [roles.contentAuthor],
  },
  {
    photo: 'andrew_xu',
    name: 'Andrew Xu',
    titles: [roles.liveInstructor],
    email: 'greatestrappingraptor@gmail.com',
  },
  {
    photo: 'rameez',
    name: 'Rameez Parwez',
    titles: [roles.contentAuthor],
    github: 'sosuke23',
    codeforces: 'sosuke23',
  },
  {
    photo: 'sachet',
    name: 'Sachet Abeysinghe',
    titles: [roles.contentAuthor],
    github: 'sachet-abey',
    linkedin: 'https://www.linkedin.com/in/sachet-abeysinghe-43314b30a/',
  },
  {
    photo: 'srijith',
    name: 'Srijith Chinthalapudi',
    titles: ['Director of Self-Study Classes', roles.liveInstructor],
  },
  {
    photo: 'i_chen_chou',
    name: 'I Chen Chou',
    titles: [roles.liveInstructor, roles.videoInstructor],
  },
  {
    photo: 'nathan_chen',
    name: 'Nathan Chen',
    titles: [roles.videoInstructor],
    website: 'https://nathanchen.me/',
  },
  {
    photo: 'abhiraj',
    name: 'Abhiraj Mallangi',
    titles: [roles.videoInstructor],
    email: 'abhirajmallangi@outlook.com',
  },
  {
    photo: 'hannah',
    name: 'Hannah Ying',
    titles: [roles.videoInstructor],
  },
  {
    photo: 'andyc',
    name: 'Andy Chen',
    titles: [roles.videoInstructor, roles.liveInstructor],
  },
  {
    photo: 'zixuan_yin',
    name: 'Zixuan Yin',
    titles: [roles.liveInstructor],
  },
  {
    photo: 'kyle_liang',
    name: 'Kyle Liang',
    titles: [roles.liveInstructor],
  },
  {
    photo: 'zixuan_ye',
    name: 'Zixuan Ye',
    titles: [roles.liveInstructor],
  },
  {
    photo: 'julian_wu',
    name: 'Julian Wu',
    titles: [roles.liveInstructor],
  },
  {
    name: 'Melissa Yu',
    titles: [roles.liveInstructor],
  },
  {
    name: 'Patrick Deng',
    titles: [roles.liveInstructor],
  },
  {
    name: 'Ayush Bansal',
    titles: [roles.videoInstructor],
  },
  {
    name: 'David Zhou',
    titles: [roles.videoInstructor],
  },
  {
    photo: 'kaylanc',
    name: 'Kalyan Cherukuri',
    titles: [roles.clubCurriculum],
    linkedin: 'http://www.linkedin.com/in/kal-che',
    website: 'https://kal-che.vercel.app/',
  },
];

export const FormerMembers: Member[] = [
  {
    photo: 'peng_bai',
    name: 'Peng Bai',
    titles: [roles.contentAuthor],
  },
  {
    photo: 'daniel_zhu',
    name: 'Daniel Zhu',
    titles: [roles.contentAuthor, roles.webdev],
  },
  {
    photo: 'justin_huang',
    name: 'Justin Huang',
    titles: ['Director of Software', roles.webdev],
  },
  {
    photo: 'aakash_gokhale',
    name: 'Aakash Gokhale',
    titles: ['Director of Contests'],
  },
  {
    photo: 'alex_wang',
    name: 'Alex Wang',
    titles: ['Director of Clubs'],
  },
  {
    photo: 'trisha',
    name: 'Trisha Sabadra',
    titles: ['Director of Classes', roles.liveInstructor],
  },
  {
    photo: 'mihnea',
    name: 'Mihnea Brebenel',
    titles: [roles.contentAuthor],
  },
  {
    photo: 'jesse',
    name: 'Jesse Choe',
    titles: [
      'Director of Classes',
      'Content Manager',
      roles.contentAuthor,
      roles.liveInstructor,
    ],
    github: 'jessechoe10',
    email: 'jessechoe10@gmail.com',
    codeforces: 'YoRepi7',
  },
  {
    photo: 'daniel',
    name: 'Daniel Guan',
    github: 'DGuan64',
    titles: [roles.founder, 'Director of Classes', 'Finalist'],
  },
  {
    photo: 'Harry',
    name: 'Harry Wang',
    titles: ['Content Manager', roles.videoInstructor],
    github: 'harrywangatx',
    website: 'https://harrycodes.com',
    email: 'qiwang@joincpi.org',
    youtube: 'https://www.youtube.com/channel/UCXMWyG1D_a_b2HRLlBPkGMw',
  },
  {
    photo: 'varun',
    name: 'Varun Ragunath',
    titles: [
      'Director of Classes',
      roles.liveInstructor,
      roles.videoInstructor,
    ],
  },
  {
    photo: 'amy_chang',
    name: 'Amy Chang',
    titles: [
      'Director of Classes',
      roles.liveInstructor,
      roles.videoInstructor,
    ],
  },
  {
    photo: 'andi',
    name: 'Andi Qu',
    titles: [roles.founder],
    email: 'andi@andiqu.com',
    github: 'dolphingarlic',
    codeforces: 'dolphingarlic',
    website: 'https://andiqu.com/',
  },
  {
    photo: 'Andrew',
    name: 'Andrew Wang',
    titles: [roles.founder, 'Former Secretary'],
    github: 'andrewwangva',
    codeforces: 'a.wang',
    email: 'andrewwangva.biz@gmail.com',
  },
  {
    photo: 'nathanc',
    name: 'Nathan Chen',
    titles: [roles.founder, 'Former Treasurer', '2x Finalist'],
    github: 'nchn27',
    codeforces: 'nchn27',
    email: 'nchn27@gmail.com',
  },
  {
    photo: 'siyong',
    name: 'Siyong Huang',
    titles: [roles.founder],
    github: 'frodakcin',
    codeforces: 'frodakcin',
  },
  {
    photo: 'darren',
    name: 'Darren Yao',
    titles: [roles.founder, 'Board'],
    github: 'darren-yao',
    website: 'http://darrenyao.com/',
    codeforces: 'darren_yao',
    email: 'darren.yao@gmail.com',
  },
  {
    photo: 'michael',
    name: 'Michael Cao',
    titles: [roles.founder, 'Board'],
    github: 'caoash',
    codeforces: 'caoash',
    email: 'caoash@gmail.com',
  },
  {
    photo: 'maggie',
    name: 'Maggie Liu',
    titles: ['Board', roles.webdev, roles.videoInstructor],
    github: 'maggie-j-liu',
    website: 'https://maggieliu.dev',
    codeforces: 'ml1234',
    email: 'maggie.j.liu@gmail.com',
  },
  {
    photo: 'nikhil',
    name: 'Nikhil Chatterjee',
    titles: [roles.liveInstructor, roles.videoInstructor, roles.clubCurriculum],
  },
  {
    photo: 'alex_du',
    name: 'Alex Du',
    titles: [roles.contentAuthor],
  },
  {
    photo: 'dustin',
    name: 'Dustin Miao',
    titles: [roles.liveInstructor, roles.contentAuthor],
    github: 'dutinmeow',
    email: 'dutin20.meow@gmail.com',
    codeforces: 'dutinmeow',
  },
  {
    photo: 'jeffrey_zhang',
    name: 'Jeffrey Zhang',
    titles: [roles.contentAuthor],
    github: 'RedBlueBird',
    email: 'jiefu.zhang1226@gmail.com',
  },
  {
    photo: 'paul',
    name: 'Paul Chen',
    titles: [roles.contentAuthor],
    codeforces: '876pol',
    github: '876pol',
  },
  {
    photo: 'stanley',
    name: 'Stanley Zhao',
    github: 'zhao-stanley',
    titles: [roles.webdev],
    email: 'stanleyhzhao@gmail.com',
    website: 'https://szhao.dev/',
  },
  {
    photo: 'riley',
    name: 'Riley Bonner',
    titles: [roles.clubCurriculum],
    linkedin: 'https://www.linkedin.com/in/riley-bonner-6b8726213/',
  },
  {
    photo: 'ian',
    name: 'Ian Zhang',
    titles: [roles.liveInstructor],
    github: 'izhang05',
    codeforces: 'izhang',
  },
  {
    photo: 'frank',
    name: 'Frank Xiao',
    titles: [roles.liveInstructor],
    github: 'frankyaoxiao',
    email: 'frankyaoxiao@gmail.com',
  },
  {
    photo: 'eric',
    name: 'Eric Xu',
    titles: [roles.webdev],
    github: 'cirex-web',
    codeforces: 'cotester',
    email: 'erxu@ctemc.org',
  },
  {
    photo: 'albert_jiang',
    name: 'Albert Jiang',
    titles: [roles.videoInstructor],
  },
  {
    photo: 'chuyang',
    name: 'Chuyang Wang',
    titles: [roles.contentAuthor],
    email: 'mail@chuyang-wang.de',
    github: 'ChuangSheep',
  },
  {
    photo: 'john',
    name: 'John Tian',
    titles: [roles.clubCurriculum],
  },
  {
    photo: 'danielge',
    name: 'Daniel Ge',
    titles: [roles.contentAuthor],
    codeforces: 'Mathandski',
    github: 'DenialRiver1434',
    email: 'mailto:shurongge@gmail.com',
    website: 'https://denialriver1434.github.io/',
  },
  {
    photo: 'advay',
    name: 'Advay Bajpai',
    email: 'advayb2018@gmail.com',
    github: 'ady00',
    website: 'https://advaybajpai.me',
    titles: [roles.webdev],
  },
  {
    photo: 'jaiman',
    name: 'Jaiman Pandya',
    titles: [roles.clubCurriculum],
  },
  {
    photo: 'nikita',
    name: 'Nikita Gorshkov',
    email: 'gorshkovnikita@gmail.com',
    github: 'nikita-go',
    website: 'https://www.nikitago.xyz/',
    titles: [roles.webdev],
  },
  {
    photo: 'faris',
    name: 'Faris Raza',
    titles: [roles.liveInstructor, roles.clubCurriculum],
  },
  {
    photo: 'pranav',
    name: 'Pranav Jadhav',
    titles: ['Director of Clubs', roles.clubCurriculum],
    github: 'pranavgithub1',
    email: 'pra168109@gmail.com',
  },
  {
    photo: 'harsh_akunuri',
    name: 'Harsh Akunuri',
    titles: [roles.clubCurriculum],
  },
  {
    photo: 'lokesh_pampatti',
    name: 'Lokesh Pampatti',
    titles: [roles.clubCurriculum],
  },
  {
    photo: 'nathan_zhang',
    name: 'Nathan Zhang',
    titles: [roles.clubCurriculum],
  },
  {
    photo: 'neo',
    name: 'Neo Wang',
    titles: ['Content Manager', roles.videoInstructor, roles.webdev],
    github: 'nwatx',
    website: 'https://nwatx.me/',
    email: 'neowangatx@gmail.com',
  },
  {
    photo: 'jay',
    name: 'Jay Fu',
    titles: [
      'Director of Classes',
      roles.liveInstructor,
      roles.videoInstructor,
    ],
    email: 'jayfu03@gmail.com',
  },
  {
    photo: 'amogha',
    name: 'Amogha Pokkulandra',
    titles: [roles.liveInstructor, roles.videoInstructor],
    email: 'amogha.pokkulandra@gmail.com',
    github: 'x3n0coder',
  },
  {
    photo: 'albertz',
    name: 'Albert Zhu',
    titles: [roles.videoInstructor, roles.clubCurriculum],
  },
  {
    photo: 'vikas_thoutam',
    name: 'Vikas Thoutam',
    titles: [roles.liveInstructor, roles.videoInstructor],
    email: 'vikas.thoutam@gmail.com',
  },
  {
    photo: 'akshar',
    name: 'Akshar Yeccherla',
    titles: [roles.videoInstructor],
  },
  {
    photo: 'nathang',
    name: 'Nathan Gong',
    titles: [roles.webdev, roles.contentAuthor],
    github: 'nathangong',
  },
  {
    photo: 'vivian',
    name: 'Vivian Han',
    github: 'vivianhan404',
    titles: [roles.videoInstructor],
  },
  {
    photo: 'mrinall',
    name: 'Mrinall Umasudhan',
    titles: [roles.webdev],
    github: 'MrinallU',
  },
  {
    photo: 'jeffrey',
    name: 'Jeffrey Meng',
    titles: ['Director of Operations', roles.videoInstructor],
    github: 'jeffreymeng',
    website: 'https://jeffkmeng.com',
  },
  {
    photo: 'jason',
    name: 'Jason Antwi-Appah',
    titles: [roles.webdev],
    github: 'jasonappah',
    email: 'hey@jasonaa.me',
    website: 'https://jasonaa.me',
  },
  {
    photo: 'arpan',
    name: 'Arpan Banerjee',
    github: 'ar492',
    titles: [roles.clubCurriculum, roles.contentAuthor, roles.videoInstructor],
  },
  {
    photo: 'jpaulson',
    name: 'Jonathan Paulson',
    github: 'jonathanpaulson',
    titles: [roles.videoInstructor],
  },
  {
    photo: 'atharv',
    name: 'Atharv Jain',
    titles: [roles.liveInstructor, roles.videoInstructor],
    email: 'atharvjain05@gmail.com',
  },
  {
    photo: 'david_li',
    name: 'David Li',
    titles: [roles.liveInstructor, roles.videoInstructor],
  },
  {
    photo: 'davidz',
    name: 'David Zhang',
    titles: [roles.liveInstructor, roles.videoInstructor],
  },
  {
    photo: 'adham',
    name: 'Adham Ibrahim',
    titles: [roles.liveInstructor],
    email: 'adhamibrahim719@gmail.com',
    github: 'adham-ibrahim7',
  },
  {
    photo: 'alex_chen',
    name: 'Alex Chen',
    titles: [roles.liveInstructor],
    github: 'alexwenchen',
    codeforces: 'Alx',
  },
  {
    photo: 'arnan',
    name: 'Arnan Bawa',
    titles: [roles.liveInstructor],
  },
  {
    photo: 'arnav',
    name: 'Arnav Adhikari',
    titles: [roles.videoInstructor],
    email: 'realarnavadhikari24@gmail.com',
    github: 'LitMSCTBB',
    website: 'https://computercrafter.netlify.app/',
  },
  {
    photo: 'ben',
    name: 'Ben Dodge',
    github: 'Navigator365',
    titles: [roles.contentAuthor],
  },
  {
    photo: 'mithil',
    name: 'Mithil Srungarapu',
    titles: [roles.webdev],
    linkedin: 'https://www.linkedin.com/in/srungarapumithil/',
    email: 'mithilsmail@gmail.com',
  },
  {
    photo: 'oscar',
    name: 'Oscar Rendón',
    github: 'orendon',
    titles: [roles.clubCurriculum],
  },
  {
    photo: 'shikhar',
    name: 'Shikhar Ahuja',
    titles: [roles.liveInstructor],
    email: 'ahujashikhar314@gmail.com',
  },
  {
    photo: 'sofia',
    name: 'Sofia Yang',
    github: 'TruaShamu',
    titles: [roles.contentAuthor],
  },
  {
    photo: 'julie',
    name: 'Juheon Rhee',
    titles: [roles.contentAuthor, roles.liveInstructor],
    website: 'https://juheonrhee.com',
    github: 'jjliewie',
  },
  {
    photo: 'vidith',
    name: 'Vidith Madhu',
    titles: [roles.liveInstructor],
  },
  {
    photo: 'yifan_ma',
    name: 'Yifan Ma',
    titles: [roles.videoInstructor],
  },
  {
    photo: 'aditya',
    name: 'Aditya Gupta',
    titles: [roles.contentAuthor],
    website: 'https://thepuzzlr.com/',
    youtube: 'https://www.youtube.com/c/ThePuzzlr',
  },
  {
    photo: 'aadit',
    name: 'Aadit Ambadkar',
    titles: [roles.contentAuthor],
  },
];

function sortPeople(people: Member[]) {
  return people.sort((a, b) => {
    if (a.titles.length === b.titles.length) {
      return a.name.localeCompare(b.name);
    }
    return b.titles.length - a.titles.length;
  });
}

export const Members = {
  CurrentMembers: [...OrderedFirstMembers, ...sortPeople(RestOfMembers)],
  FormerMembers: sortPeople(FormerMembers),
};
