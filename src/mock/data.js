import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Obinna Nwabia',
  subtitle: 'I am a Full-Stack Software Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'obinna-image.png',
  paragraphOne: 'Experienced in Ruby on Rails, Pytho3 with Django,JavaScript based programming, and a background in computer networking.I am a lifelong learner who is not afraid of diving into unfamiliar technologies to expand my knowledge and skill set. I am a natural self starter who shoots for perfection while being aware that perfection is unattainable. The end result is always excellence.',
  paragraphTwo: 'When I am not coding or studying you will find me playing Fifa on xboxone or playing soccer on the pitch. My weekend nights are graced with watching UFC fights and spendig time with friends and family',
  paragraphThree: ' Find my resume on the link below',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Pokemon Trainer',
    info: 'Pokemon trainer app allows a user to create an account as a pokemon trainer, selects pokemon characters from a list of prepopulated pokemon characters and adds those pokemons to his trainer profile.',
    info2: 'This was created as a team project during my bootcamp',
    url: 'https://www.youtube.com/watch?v=T5to9VyNNBM',
    repo: 'https://github.com/hydroflux/pokemon-trainer-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
