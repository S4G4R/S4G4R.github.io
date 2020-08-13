module.exports = {
    title: 'Sagar Vrajalal',
    header: "Hi, I'm Sagar",
    description: "I am a Software Engineer who enjoys solving complex, real world problems and building products from the ground up.",
    name: 'Sagar Vrajalal',
    footerTitle: 'Software Engineer',
    email: 'sagarvrajalal@gmail.com',
    cta: {
        label: 'Get My Resume',
        url: 'resume.pdf',
    },
    socials: [
        // { icon: 'twitter', url: 'https://twitter.com/_S4G4R_' },
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
            img: 'wip.png',
            url: 'https://github.com/S4G4R/password-manager'
        }
    ],
    experiences: [
        {
            title: 'Student Developer at Crio Launch',
            timeline: 'January 2020 - April 2020',
            description: 'Member of an experiential learning program by Crio.Do called Crio Launch whose motto is "Learn By Doing". Crio Launch enables the user to build real software products and learn the right skills, the applied way. The program is structured around building 3 products.',
            responsibilities: ["QBox - A secured file-sharing solution.", "QMoney - A personal stock portfolio analysis and recommendations platform.","QCharm - A code editor from scratch."
            ]
        }
    ],
    // testimonials: [
    //     {
    //         quote: 'Some quote from someone',
    //         name: 'Person who quoted you',
    //         title: 'His position at the company'
    //     }
    // ]
}
