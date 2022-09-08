const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://jordandidit.github.io/',
  title: 'JG.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jordy Gashagaza',
  role: 'Fullstack Developer',
  description:
    'I am a software engineer and artist based in kigali. I have great interest in full-stack development, artificial intelligence, human-computer interactions, and everything in between.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/jordy-gashagaza-717486190/',
    github: 'https://github.com/jordandidit',
    instagram: 'https://instagram.com/jordan.did.it_',
    twitter: 'https://twitter.com/jordan_did_it__ ',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'AdamAI',
    description:
      'Using the genetic algorithm, the A.I. “learns” to go through the maze using the concepts of natural selection and survival of the fittest.',
    stack: ['JavaScript', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/jordandidit/AdamAI',
    livePreview: 'https://jordandidit.github.io/AdamAI/ ',
  },
  {
    name: 'Distributed Logging and Monitoring System',
    description:
      'A system that establishes an ORM connection to a Prisma client in order to communicate logs from microservices.',
    stack: ['Nodejs', 'React.js', 'PostgresSQL'],
    sourceCode: 'https://github.com/jordandidit/Logging-and-Monitering-sytem',
    
  },
  {
    name: 'Image search app',
    description:
      'This is a javascript project that enables users to filter a large content file of images by id and it makes life easier',
    stack: ['JavaScript', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/jordandidit/challenge2',
    livePreview: 'https://challenge2rw.netlify.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Material UI',
  'Git',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jordygashagaza@gmail.com',
}

export { header, about, projects, skills, contact }
