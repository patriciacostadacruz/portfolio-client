import images from '../images';

const projects = [
  {
    title: 'Food-Folio',
    description:
      'Food-Folio is a recipes app which allows users to see a wide variety of recipes and cooking steps, but also allows them to add their own recipes and save their favorites for quick access.',
    frontEndTechStack: 'HTML - CSS - JavaScript - Handlebars',
    backEndTechStack: 'Node.js - Express.js - MongoDB',
    image: images.foodfolio,
    link: 'https://food-folio-app.fly.dev/',
  },
  {
    title: "Hubble's quest",
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
    frontEndTechStack: 'HTML - CSS - JavaScript - Charts.js - ReactJS',
    backEndTechStack: 'Node.js - Express.js - MongoDB',
    additionalTools: 'Postman',
    image: images.investmate,
    link: 'https://investmate-pro.netlify.app/',
  },
  // {
  //   title: 'Firebase recipes app',
  //   description:
  //     'Recipes app created as a training for Firebase apps using its different services such as functions, auth, hosting, storage, etc.',
  //   frontEndTechStack: 'HTML - CSS - JavaScript - ReactJS - Firebase',
  //   backEndTechStack: 'NodeJS - Express.js - Firebase',
  //   image: '',
  //   link: 'https://fir-recipes-3f7d9.web.app/',
  // },
];

const experiences = [
  {
    title: 'Web Developer @ Freelance',
    dates: 'June 2023 - present',
    description:
      'Working on diverse projects to create innovative and adapted web apps - as well as additional elements such as creating custom cronjobs, integrate specific packages in pre-existing apps,...',
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'JWT',
      'ReactJS',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
    logo: `${images.interrogationPoint}`,
    link: '',
  },
  {
    title: 'Technical Application Analyst II @ ADP Iberia',
    dates: 'October 2021 - present',
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

const references = [
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

export { projects, experiences, references };
