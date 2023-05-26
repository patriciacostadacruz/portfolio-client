import images from '../images';

const projects = [
  {
    title: "Hubble's quest",
    description:
      'After Hubble telescope was launched in 1990, alien populations have started being attacked by some alien monster. As part of the Independent Wizards Mission (IWM), your player is charged with a mission: go to planet BetaX-2 and kill the enemies to allow friendly and nice aliens to live in peace.',
    frontEndTechStack: 'HTML - CSS - JavaScript',
    slides: [images.hubble1, images.hubble2, images.hubble3],
    link: 'https://patriciacostadacruz.github.io/Hubble-s-quest/',
  },
  {
    title: 'Food-Folio',
    description:
      'Food-Folio is a recipes app which allows users to see a wide variety of recipes and cooking steps, but also allows them to add their own recipes and save their favorites for quick access.',
    frontEndTechStack: 'HTML - CSS - JavaScript - Handlebars',
    backEndTechStack: 'Node - Express - MongoDB',
    slides: [images.food1, images.food2, images.food3],
    link: 'https://food-folio-app.fly.dev/',
  },
  {
    title: 'investMate',
    description:
      'investMate connects entrepreneurs and investors worldwide so that innovative ideas become successful businesses.',
    frontEndTechStack: 'HTML - CSS - JavaScript - Charts.js - React',
    backEndTechStack: 'Node - Express - MongoDB',
    additionalTools: 'Postman',
    slides: [images.investmate1, images.investmate2, images.investmate3],
    link: 'https://investmate-pro.netlify.app/',
  },
  {
    title: 'Firebase recipes app',
    description:
      'Recipes app created as a training for Firebase apps using its different services such as functions, auth, hosting, storage, etc.',
    frontEndTechStack: 'HTML - CSS - JavaScript - React - Firebase',
    backEndTechStack: 'Node - Firebase',
    slides: [],
    link: 'https://fir-recipes-3f7d9.web.app/',
  },
];

const experiences = [
  {
    title: 'Front-end developer @ CookEatLike',
    dates: 'May 2023 - present',
    description:
      'Working with two friends on a cooking streaming app side project. I am in charge of creating the front end logic. We have regular meetings to discuss our goals, progress, next steps adn exchange opinions and knowledge.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'JWT'],
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
      'Patricia is a self starter and go getter. She’s got a good attitude and is well liked by her teammates. I admire her passion for development and know she will make a positive impact wherever she goes.',
    giver: 'Gregory Alexander',
    link: 'https://www.linkedin.com/in/gregory-alexander-b7970025/',
    title: 'AMS Sr Manager Global Technical Services @ ADP',
  },
  {
    content:
      'From the first day, it was clear that Patri was not just one more student. She is a bright person and has worked hard, and has helped create a great environment with her classmates, always helping anyone in need. Ambitious and perfectionist, Patri has the best mindset for the programming world. I am sure the future holds incredible things for you, Patri!!',
    giver: 'Alejandra Bausá Carmona',
    link: 'https://www.linkedin.com/in/ale-bausa/',
    title: 'Full stack web developer and teacher @ Freelance & IronHack',
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
