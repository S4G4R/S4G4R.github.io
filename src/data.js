module.exports = {
  title: 'Sagar Vrajalal',
  header: "Hi, I'm Sagar",
  description: "I'm a college undergraduate currently in my final year studying Computer Science at SRM University, Chennai. I enjoy building everything from small web applications to sophisticated desktop applications.",
  name: 'Sagar Vrajalal',
  footerTitle: 'Software Engineer',
  email: 'sagarvrajalal@gmail.com',
  cta: {
    label: 'Get My Resume',
    url: 'resume.pdf',
  },
  socials: [
    { icon: 'twitter', url: 'https://twitter.com/_S4G4R_' },
    { icon: 'github-circled', url: 'https://github.com/S4G4R' },
    { icon: 'mail-alt' }, // mail alt automatically links to mailto:email
    //{ icon: 'dribbble', url: '//' },
    //{ icon: 'skype', url: '//' },
    { icon: 'linkedin-squared', url: 'https://www.linkedin.com/in/sagar-vrajalal-3138a9156' },
  ],
  projects: [
    {
      name: 'TV Show Tracker',
      description: 'A simple web application that helps you keep track of your favorite TV Shows and Movies.',
      tags: ['Python', 'Flask', 'SQLAlchemy'],
      alt: 'TV Show Tracker Screenshot', // alt description of image for accessibility. defaults to '{{name}} Screenshot'
      img: 'tv-tracker.png',
      url: 'https://github.com/S4G4R/tv-tracker'
    },
    {
        name: 'Chat App',
        description: 'A simple chat application.',
        tags: ['Java', 'Android Studio', 'Google Firebase'],
        alt: 'Chat App Screenshot', // alt description of image for accessibility. defaults to '{{name}} Screenshot'
        img: 'chat-app.png',
        url: 'https://github.com/S4G4R/chat-app'
    },
    {
      name: 'TicTacToe',
      description: 'A TicTacToe game written in C++.',
      tags: ['C++'],
      alt: 'TicTacToe Screenshot', // alt description of image for accessibility. defaults to '{{name}} Screenshot'
      img: 'tictactoe.png',
      url: 'https://github.com/S4G4R/TicTacToe'
    },
    {
      name: 'Password Manager [WiP]',
      description: 'An open-source, clean and efficient password manager.',
      tags: ['Java 11', 'JavaFX', 'H2', 'Apache Cayenne'],
      alt: 'Password Manager Screenshot', // alt description of image for accessibility. defaults to '{{name}} Screenshot'
      img: '',
      url: ''
    }
  ],
/**
  experiences: [
    {
      title: 'Example',
      timeline: 'Jan 2016 - Present',
      description: 'What the job entailed',
      responsibilities: [
          'More specific stuff'
      ]
    },
    {
     title: 'Another one',
     timeline: 'set later'
    }
  ],
  testimonials: [
    {
      quote: 'Some quote from someone',
      name: 'Person who quoted you',
      title: 'His position at the company'
    }
  ]
  */
}
