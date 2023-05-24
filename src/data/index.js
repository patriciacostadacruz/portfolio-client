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
    slides: [images.firebase1, images.firebase2, images.firebase3],
    link: 'https://fir-recipes-3f7d9.web.app/',
  },
];
export default projects;
