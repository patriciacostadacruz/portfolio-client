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
    description:
      'Food-Folio is a recipes app which allows users to see a wide variety of recipes and cooking steps, but also allows them to add their own recipes and save their favorites for quick access.',
    frontEndTechStack: 'HTML - CSS - JavaScript - Handlebars',
    backEndTechStack: 'NodeJS - ExpressJS - MongoDB',
    image: images.foodfolio,
    link: 'https://food-folio-app.fly.dev/',
  },
  {
    title: "Hubble's Quest",
    description:
      'After Hubble telescope was launched, alien populations have started being attacked by some alien monster. As part of the Independent Wizards Mission (IWM), you are charged with one mission: go to planet BetaX-2 and kill the enemies to allow friendly and nice aliens to live in peace.',
    frontEndTechStack: 'HTML - CSS - JavaScript',
    image: images.hubble,
    link: 'https://patriciacostadacruz.github.io/Hubble-s-quest/',
  },
  {
    title: 'investMate',
    description:
      'investMate is an app which connects entrepreneurs and investors worldwide so that innovative ideas become successful businesses. Browse for projects in your industry and start chatting!',
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
    description:
      'Wiki-scrapper is a small app created to practice scraping data with Colly framework. It uses random user-agents from ScrapeOps and  outputs the data scraped into a JSON file.',
    backEndTechStack: 'Golang - Colly',
    image: images.scraping,
    link: 'https://github.com/patriciacostadacruz/wiki-scrapper',
  },
  {
    title: 'how-much',
    description:
      'I am currently working on creating a currency converter on which you can quickly save your favorite currencies and convert them on the fly... stay tuned!',
    backEndTechStack: 'Python - Pandas',
    image: images.currency,
    link: '/not-ready-yet',
  },
  {
    title: 'To be shared',
    description:
      'I am also working on getting to know Smart Contracts and on the creation and sale of a NFT designed by myself... stay tuned! (Yes, again)',
    backEndTechStack: 'Solidity - Hardhat - OpenZeppelin - Alchemy',
    image: images.nft,
    link: '/not-ready-yet-neither',
  },
];

export const experiences = [
  {
    title: 'Junior Full Stack Developer @ Brickbro',
    dates: 'September 2023 - present',
    description:
      "Creation and implementation of innovative, scalable and adapted solutions for the company's commercial premises marketplace and custom CRM. Working on several backend projects to optimize our data and transform it, as well as frontend applications where the geometries bring complexity and the many sources of data we handle bring complexity. Hands on development, code reviews and agile methodologies.",
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
    title: 'Technical Application Analyst II @ ADP Iberia',
    dates: 'October 2021 - September 2023',
    description:
      'Internal T2 level support for a Time & Attendance software named Enterprise eTime. Diagnose and resolve issues related to software configuration and upgrade, databases, servers, interfaces, federation/login into the system, etc - for high-profile clients.',
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
    content:
      'From the first day, it was clear that Patri was not just one more student. She is a bright person and has worked hard, and has helped create a great environment with her classmates, always helping anyone in need. Ambitious and perfectionist, Patri has the best mindset for the programming world. I am sure the future holds incredible things for you, Patri!!',
    giver: 'Alejandra Bausá Carmona',
    link: 'https://www.linkedin.com/in/ale-bausa/',
    title: 'Full stack web developer and teacher @ Freelance & IronHack',
  },
  {
    content:
      'Patricia is a self starter and go getter. She’s got a good attitude and is well liked by her teammates. I admire her passion for development and know she will make a positive impact wherever she goes.',
    giver: 'Gregory Alexander',
    link: 'https://www.linkedin.com/in/gregory-alexander-b7970025/',
    title: 'AMS Sr Manager Global Technical Services @ ADP',
  },
  {
    content:
      'If you combine hard work, analytical mindset, positive attitude, willingness to help and strive for the best results all the time... you get Patricia. Her work always went above and beyond my expectations and during the last 1,5 year I had a pleasure to guide Patricia, she managed to make a big footprint in our team. Patricia is very motivated, fast learner with great work ethics and big dreams. Her humor and empathy fostered a comforting work environment. I have no doubt that Patricia will continue to excel in her future endeavors and highly recommend her to any potential employer.',
    giver: 'Stefan Halas',
    link: 'https://www.linkedin.com/in/%C5%A1tefan-halas-115b7658/',
    title: 'EMEA Manager Global Technical Services @ ADP',
  },
];
