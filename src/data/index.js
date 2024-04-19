import images from '../images';

export const frontSkills = [
  'HTML',
  'CSS',
  'TailwindCSS',
  'JavaScript',
  'TypeScript',
  'ReactJS',
  'NextJS'
];

export const backSkills = [
  'NodeJS',
  'NestJS',
  'Python',
  'Golang',
  'MongoDB',
  'PostgreSQL',
  'Firebase',
];

export const toolsSkills = [
  'Postman',
  'AWS',
  'Airflow',
  'Swagger API',
  'Ubuntu',
  'VSCode Debugger',
];

export const projects = [
  {
    title: 'Food-Folio',
    description: 'school-projects.projects.description4',
    frontEndTechStack: 'HTML - CSS - JavaScript - Handlebars',
    backEndTechStack: 'NodeJS - ExpressJS - MongoDB',
    image: images.foodfolio,
    link: 'https://food-folio-app.fly.dev/',
  },
  {
    title: "Hubble's Quest",
    description: 'school-projects.projects.description5',
    frontEndTechStack: 'HTML - CSS - JavaScript',
    image: images.hubble,
    link: 'https://patriciacostadacruz.github.io/Hubble-s-quest/',
  },
  {
    title: 'investMate',
    description: 'school-projects.projects.description6',
    frontEndTechStack: 'HTML - CSS - JavaScript - ChartsJS - ReactJS',
    backEndTechStack: 'NodeJS - ExpressJS - MongoDB',
    additionalTools: 'Postman',
    image: images.investmate,
    link: 'https://investmate-pro.netlify.app/',
  },
];

export const personalProjects = [
  {
    title: 'wiki-scraper',
    description: 'personal-projects.projects.description1',
    backEndTechStack: 'Golang - Colly',
    image: images.scraping,
    link: 'https://github.com/patriciacostadacruz/wiki-scrapper',
  },
  {
    title: 'how-much',
    description: 'personal-projects.projects.description2',
    backEndTechStack: 'Python - Pandas',
    image: images.currency,
    link: '/not-ready-yet',
  },
  {
    title: 'pc-t',
    description: 'personal-projects.projects.description3',
    backEndTechStack: 'Solidity - Hardhat - OpenZeppelin - Alchemy',
    image: images.nft,
    link: '/not-ready-yet-neither',
  },
];

export const experiences = [
  {
    title: 'experience-section.exp1.title',
    dates: 'experience-section.exp1.dates',
    description: 'experience-section.exp1.description',
    tags: [
      'TypeScript',
      'Python',
      'Golang',
      'NextJS',
      'NestJS',
      'PostgreSQL',
      'MongoDB',
      'AWS',
      'Airflow',
      'Google Maps API',
    ],
    logo: `${images.brickbro}`,
    link: 'https://www.brickbro.com/',
  },
  {
    title: 'experience-section.exp2.title',
    dates: 'experience-section.exp2.dates',
    description: 'experience-section.exp2.description',
    tags: [
      'JSON',
      'SAML',
      'Oracle SQL Dev',
      'Postman',
      'SaaS',
      'SSO',
      'Jira',
      'Team work',
    ],
    logo: `${images.ADPlogo}`,
    link: 'https://www.adp.com/',
  },
];

export const references = [
  {
    title: 'references-section.ref1.title',
    content: 'references-section.ref1.content',
    giver: 'Alejandra Bausá Carmona',
    link: 'https://www.linkedin.com/in/ale-bausa/',
  },
  {
    title: 'references-section.ref2.title',
    content: 'references-section.ref2.content',
    giver: 'Gregory Alexander',
    link: 'https://www.linkedin.com/in/gregory-alexander-b7970025/',
  },
  {
    title: 'references-section.ref3.title',
    content: 'references-section.ref3.content',
    giver: 'Stefan Halas',
    link: 'https://www.linkedin.com/in/%C5%A1tefan-halas-115b7658/',
  },
];
