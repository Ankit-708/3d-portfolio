import { spark, intern, star, build } from "../assets/images";
import {
    car,
    python,
    cplus,
    django,
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    pricewise,
    react,
    snapgram,
    tailwindcss,
    threads,
    sql,
    postman,
    code,
    bootstrap
} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "python",
        type: "code",
    },
    {
        imageUrl: cplus,
        name: "cplus",
        type: "code",
    },
    {
        imageUrl: code,
        name: "code",
        type: "code",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "bootstrap",
        type: "for styling",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: sql,
        name: "sql",
        type: "Database",
    },
    {
        imageUrl: django,
        name: "django",
        type: "backend",
    },
    {
        imageUrl: postman,
        name: "postman",
        type: "API",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
];

export const experiences = [
    {
        title: "Web Developer Intern",
        company_name: "The Spark Foundation",
        icon: spark,
        iconBg: "#accbe1",
        date: "December 2020 - January 2021",
        points: [
            "Designed a creative and efficient frontend module along ith a backend module", 
            "Enhancing my creativity and emphasizing readability and efficiency in the",
            "Development process. In this project, I utilized HTML, CSS, JavaScript, MySQL, PHP, and Bootstrap",
            "Technologies, ensuring a cohesive and dynamic web development stack."]
    },
    {
        title: "Web Developer Intern",
        company_name: "Suven Consultants & Technology Pvt. Ltd",
        icon: intern,
        iconBg: "#accbe1",
        date: "July 2022 - August 2022",
        points: [
            "Collaborated on a real-life project with teammates, focusing on backend modules",
            "And gained valuable learning experiences throughout the process",
            "In this project, I utilized JavaScript, MySQL, and,PHP and technologies, ensuring a",
            "Cohesive and dynamic web development stack."]
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Ankit-708',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ankit-vishwakrma/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'NaukriDekho',
        description: "Have developed an Online Job Portal named NaukriDekho -A Job Portal for Household/Daily Wage Workers Designed with an easy and friendly UI for effortless and easy to use and have used Technology Used- HTML, CSS, JavaScript, bootstrap, php and Mysql",
        link: 'https://github.com/Ankit-708/NaukriDekho',
    },
    {
        iconUrl: threads,   
        theme: 'btn-back-green',
        name: 'Pinterest Clone',
        description: 'Created Pinterest clone using ReactJS and Microsoft SQL, Prioritized efficiency and clean code Applied ReactJS in a practical setting, Gained confidence in advanced project development Technology Used- Reactjs, Postman, Microsoft SQl server, HTML, CSS, & JavaScript',
        link: 'https://github.com/Ankit-708/Pinterestclone',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Event Management System',
        description: 'Developed A web app for efficient event management, Enables seamless creation, management, and oversight of multiple events,friendly UI for effortless , Utilized GitHub throughout the project’s development, Technology Used- Django, Mysql, Bootstraps, python, HTML, CSS, and Js',
        link: 'https://github.com/Ankit-708/EventManagementSystem',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Leaf Disease Detection Using ML',
        description: 'Designed and developed leaf disease detection using CNN, Implemented machine learning to classify plant leaves as healthy or diseased, Utilized Kaggle for dataset in the project, Employed Jupyter Notebook and occasionally google Colab for development, Technology Used- HTM,CSS, Js, MySql, Php and Bootstrap.',
        link: 'https://github.com/Ankit-708/Leaf-Disease-Detection-Using-ML',
    },
];