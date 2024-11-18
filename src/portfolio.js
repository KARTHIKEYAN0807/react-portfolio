/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "KARTHIKEYAN PORTFOLIO",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "KARTHIKEYAN PORTFOLIO",
    type: "website",
    url: "http://KARTHIKEYAN-PORTFOLIO.com/",
  },
};

//Home Page
const greeting = {
  title: "KARTHIKEYAN S",
  logo_name: "karthikeyan S",
  nickname: "FULL STACK DEVELOPER",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1RShU32SCGe6OBwRjIkaISdl7lL-5oI0i/view",
  portfolio_repository: "https://github.com/KARTHIKEYAN0807/react-portfolio",
  githubProfile: "https://github.com/KARTHIKEYAN0807",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/KARTHIKEYAN0807",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/karthikeyansnsce/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:karthikoff87@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/KarthiK38657058",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
];

const skills = {
  data: [
    
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Creating application backend in Node and Express",
        "⚡ Creating Database in mysql and mongodb",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "orange",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "green",
          },
        },
        {
          skillName: "Mysql",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "blue",
          },
        },
        {
          skillName: "GIT",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "orange",
          },
        },
      ],
    },
    
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/user6914Ia/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/karthickestore_1",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/band_bell_28",
    },
    
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@karthickestore.37sp",
    },
    
  ],
};

const degrees = {
  degrees: [
    {
      title: "SNS College of Engineering, in Coimbatore, Tamil Nadu",
      subtitle: "B.Tech. in INFORMATION TECHNOLOGY",
      logo_path: "sns.png",
      alt_name: "snsce",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ Innovative B.Tech IT graduate with a strong foundation in software development and systems analysis, boasting a solid 8.30 CGPA.",
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Full Stack Development.",
      ],
      website_link: "https://snsce.ac.in/",
    },
    {
      title: "Chidhambaram Matriculation Higher Secondary School",
      subtitle: "HSC",
      logo_path: "cms.jpeg",
      alt_name: "cms",
      duration: "2019 - 2020",
      descriptions: [
        "⚡ Diligent HSC graduate from the computer science stream with a solid 60% score.",
        "⚡ Adept in foundational computer concepts and programming, with a keen interest in furthering technological expertise and pursuing advanced studies or opportunities in the field of computer science. 🖥️📚.",
      ],
      website_link: "https://www.facebook.com/groups/cmsvalayapatti/",
    },
    {
      title: "ST ANTONT MATRICULATION SCHOOL",
      subtitle: "SSLC",
      logo_path: "sams.png",
      alt_name: "sams",
      duration: "2017 - 2018",
      descriptions: [
        "⚡  diligent student with a strong academic record, achieving an impressive 80% in the 10th standard.",
        "⚡   Exhibits a solid grasp of foundational knowledge, particularly in science and mathematics, and demonstrates a commitment to excellence and continuous learning. 📚✨",
      ],
      website_link: "https://www.facebook.com/p/St-Antonys-Matriculation-School-100054446231439/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "full Stack Web development",
      subtitle: "- Grrowup",
      logo_path: "grrowup.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1_FagZRatUG2Qz6KJL2ckfX2nh1N1P8FX/view?usp=sharing",
      alt_name: "prep insta",
      color_code: "#8C151599",
    },
    {
      title: "Mern full stack development",
      subtitle: "- prepinsta",
      logo_path: "mfsd.png",
      certificate_link:
        "https://drive.google.com/file/d/1lEubpznayNyq2FL4y4Zs2zDl60gcxBoQ/view?usp=sharing",
      alt_name: "prep insta",
      color_code: "#8C151599",
    },
    {
      title: "ReactJS",
      subtitle: "- infosys springboard",
      logo_path: "infosys.png",
      certificate_link:
        "https://drive.google.com/file/d/1ltCrNWqVVjeAnVfp_N4o7eELL3OsYLxI/view?usp=sharing",
      alt_name: "infosys",
      color_code: "#00000099",
    },
    {
      title: "JAVA",
      subtitle: "- prepinsta",
      logo_path: "java.png",
      certificate_link:
        "https://drive.google.com/file/d/1X9u017bnJzYhRjE-zhRXQvo5NdUbWI7L/view?usp=sharing",
      alt_name: "prepinsta",
      color_code: "#0C9D5899",
    },
    {
      title: "JAVA",
      subtitle: "- GUVI",
      logo_path: "java2.png",
      certificate_link:
        "https://www.guvi.in/certificate?id=61R08ub50823179TOj",
      alt_name: "guvi",
      color_code: "#1F70C199",
    },
    {
      title: "Enterprise Design Thinking Co-Creator",
      subtitle: "- IBM",
      logo_path: "ibm.png",
      certificate_link:
        "https://www.credly.com/badges/321b9b8f-0ef3-4762-a8ec-2ee8a43c0fef/print",
      alt_name: "IBM",
      color_code: "#D83B0199",
    },
    {
      title: "AWS CustomerCast - AWS Copilot - Simplifying Container Development",
      subtitle: "- AWS",
      logo_path: "aws.png",
      certificate_link:
        "https://drive.google.com/file/d/1fbjbUcC_Htn1-S7dD0Tev-8kFaCp2vfU/view?usp=sharing",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "WEB DEVELOPMENT",
      subtitle: "- Internship",
      logo_path: "intern.png",
      certificate_link:
        "https://drive.google.com/file/d/1zEa6fU0_2iMLOYyFfrlqtluEkrEyptnM/view?usp=sharing",
      alt_name: "intern",
      color_code: "#0C9D5899",
    },
    {
      title: "WEB DEVELOPMENT",
      subtitle: "- Internship",
      logo_path: "intern2.png",
      certificate_link:
        "https://drive.google.com/file/d/1kgTGnRB6_Km6K_9vvBumI4g50NzeAYr5/view?usp=sharing",
      alt_name: "intern",
      color_code: "#00000099",
    },
    {
      title: "Oracle Certified Foundation Associate",
      subtitle: "- ORACLE",
      logo_path: "oracle.png",
      certificate_link:
        "https://drive.google.com/file/d/1cnicnTRHbwKbVL9pxKALgsKl77ttHFSe/view?usp=sharing",
      alt_name: "oracle",
      color_code: "#2A73CC",
    },
    {
      title: "",
      subtitle: "- ",
      logo_path: "gcp_logo.png",
      certificate_link:
        ".",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "",
      subtitle: "- ",
      logo_path: "nptel_logo.png",
      certificate_link:
        "",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "",
      subtitle: "- ",
      logo_path: "gcp_logo.png",
      certificate_link:
        "",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "As an aspiring web developer, I bring a foundational understanding of web development basics, including HTML, CSS, and JavaScript. My passion for creating user-centric web experiences is matched by my eagerness to learn and grow within the field. I am excited to apply my skills in a real-world setting and contribute to meaningful projects during my internship. 🌐🚀",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "",
          company: "",
          company_url: "",
          logo_path: "job.png",
          duration: "",
          location: "",
          description:
            " ",
          color: "#000000",
        },
      
       
       
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "MERN FULL STACK DEVELOPMENT",
          company: "Grrowup.",
          company_url: "https://www.grrowup.com/program/full-stack-web-dev",
          logo_path: "grrowup.png",
          duration: "june 2024 - Aug 2024",
          location: "Remote",
          description:
            "8-week Full Stack Web Development internship program at GrrowUP, featuring interactive live sessions. Engage deeply in practical learning, collaborate on innovative projects with experienced mentors.",
          color: "#000000",
        },
        {
          title: "Embedded system with raspberry",
          company: "ATS Software Solution.",
          company_url: "https://www.accenttechnosoft.com/",
          logo_path: "ats.png",
          duration: "jun 2023 - jul 2023",
          location: "COIMBATORE",
          description:
            "This program offers practical experience and mentorship, covering core concepts like microprocessors vs microcontrollers, Arduino, communication protocols, and IoT with live projects1. Internship on Raspberry Pi: This comprehensive guide to Raspberry Pi covers GPIO control, sensor interfacing, web applications, and more. It includes beginner-friendly projects and advanced techniques for interfacing sensors with Raspberry Pi2",
          color: "#ee3c26",
        },
        {
          title: "Web development",
          company: "Techzy It Solution",
          company_url:
            "http://techzyit.epizy.com/?i=1",
          logo_path: "techzy.jpeg",
          duration: "jun 2022 - aug 2022",
          location: "COIMBATORE",
          description:
            "My passion for web development has led me to a profound understanding of both frontend and backend technologies, culminating in the creation of a diverse portfolio of projects. Learning Path: Frontend Development: Mastered HTML, CSS, and JavaScript, building interactive and responsive user interfaces. Delved into frameworks like React and Angular to create dynamic single-page applications. Backend Development: Gained proficiency in server-side programming with Node.js and Express.js. Developed RESTful APIs and worked with databases such as MongoDB and MySQL.",
          color: "#0071C5",
        },
        {
          title: "Web development",
          company: "E Soft IT Solutions.",
          company_url: "https://www.e-soft.in/",
          logo_path: "esoft.jpeg",
          duration: "DEC 2021 - DEC 2021",
          location: "Trichy 620 018",
          description:
            "As an aspiring web developer, I bring a foundational understanding of web development basics, including HTML, CSS, and JavaScript. My passion for creating user-centric web experiences is matched by my eagerness to learn and grow within the field. I am excited to apply my skills in a real-world setting and contribute to meaningful projects during my internship. 🌐🚀",
          color: "#ee3c26",
        },
        
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "",
          company: "",
          company_url: "",
          logo_path: "vol.jpg",
          duration: "",
          location: "",
          description:
            "",
          color: "#4285F4",
        },
      
      
     
       
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Welcome to my projects showcase! Here, you'll find a collection of web applications and projects that demonstrate my skills as a MERN full-stack developer. From dynamic front-end interfaces to robust back-end services and seamless database integration, these projects highlight my ability to build and maintain full-scale web applications. Each project showcases different aspects of my expertise, including user authentication, RESTful API development, real-time data handling, and responsive design. Take a look to see how I bring ideas to life through code!",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "",
  description: "",
  avatar_image_path: "",
};

const publications = {
  data: [
    
  
   
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile.png",
    description:
      "I am available on almost every social media. You can message me, I'm always excited to connect and collaborate! Whether you have a project in mind, a question, or just want to say hello, feel free to reach out. I'm available for full-time opportunities, or any interesting conversations about technology and web development. Let's get in touch and create something amazing together!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://www.blogger.com/blog/posts/7243673964628339930",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "223,Dharmapatti,sivagangai(DT)-630309",
    locality: "Dharmapatti",
    country: "INDIA",
    region: "INDIA",
    postalCode: "630309",
    streetAddress: "Dharmapatti",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/A4S83C9yhtZxfMEd7",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
