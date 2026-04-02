/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Emir Eken",
  title: "Hello, I'm Emir",
  subTitle: emoji(
    "Software Business Analyst with senior-level expertise in technical analysis, product integration, and data analytics. Delivered a performance analytics platform that improved energy-efficiency reporting for a major consulting firm and led connected-vehicle data services for a global automotive manufacturer. Proficient in Agile/Scrum, requirements gathering, and stakeholder collaboration. Aiming to leverage analytical and project-leadership skills to drive successful software solutions. "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1gmxcEI0GtxnnKDXMs2B6q5LVbojk3Kgv/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/emireken",
  linkedin: "https://www.linkedin.com/in/emirgokberkeken/",
  gmail: "emirgokberk.eken@gmail.com",
  //gitlab: "https://gitlab.com/emireken",
  //facebook: "https://www.facebook.com/emirgokberk.eken",
  //medium: "https://medium.com/@emireken",
  //stackoverflow: "https://stackoverflow.com/users/14469011/emireken",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "BUSINESS ANALYST SPECIALIZING IN REQUIREMENTS GATHERING, AGILE EXCELLENCE, AND STAKEHOLDER COLLABORATION",
  skills: [
    emoji(
      "⚡ Elicit, analyze, and document business and functional requirements through stakeholder collaboration"
    ),
    emoji(
      "⚡ Translate business needs into user stories, acceptance criteria, and detailed process flows"
    ),
    emoji(
      "⚡ Lead Agile/Scrum ceremonies, manage product backlogs, and support UAT initiatives"
    ),
    emoji(
      "⚡ Validate system functionality through comprehensive testing and quality assurance"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "jira",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "confluence",
      fontAwesomeClassname: "fas fa-book"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "excel",
      fontAwesomeClassname: "fas fa-table"
    },
    {
      skillName: "agile",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "user-stories",
      fontAwesomeClassname: "fas fa-sticky-note"
    },
    {
      skillName: "process-modeling",
      fontAwesomeClassname: "fas fa-sitemap"
    },
    {
      skillName: "QA Testing",
      fontAwesomeClassname: "fas fa-spell-check"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "api-testing",
      fontAwesomeClassname: "fas fa-plug"
    },
    {
      skillName: "data-analytics",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set afalse to hide this section, defaults to true
  schools: [
    {
      schoolName: "Ataturk University",
      logo: require("./assets/images/atu_logo.png"),
      subHeader: "Master of Business Administration",
      duration: "2017 - 2019",
      desc: "Specialized in Project Management within Software Development environments. Developed expertise in business process optimization, stakeholder management, and project governance frameworks that directly inform current business analyst practices."
      // descBullets: [
      //   "Goal of this project is to design and build a cardiovascular system mock circuit (CVMC) which is drivable with an elastance based feed-back control left and right ventricles that can replicate heart’s pressure-volume relationship accurately. For this goal pressure volume relationship was calculated using elastance.",
      //   // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Bahcesehir University",
      logo: require("./assets/images/bau_logo.png"),
      subHeader: "Master of Science in Bioengineering",
      duration: "2012 - 2013",
      desc: "Conducted research on Cardiovascular Mock Circuit systems, strengthening analytical skills in complex system design, requirements documentation, and validation testing methodologies applicable to enterprise software solutions."
      // descBullets: [
      //   "The goal of this project is to design and build a cardiovascular system mock circuit (CVMC) that is drivable with an elastance-based feed-back control left and right ventricles that can replicate the heart’s pressure-volume relationship accurately. For this goal pressure-volume relationship was calculated using elastance."
      //   // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Bahcesehir University",
      logo: require("./assets/images/bau_logo.png"),
      subHeader: "Bachelor of Science in Mechatronics Engineering",
      duration: "2007 - 2012",
      desc: "Ranked top 10% in the program. Took courses about Software Development, Embedded Software, Electronics, ..."
      //descBullets: [""]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Business Requirements Analysis",
      progressPercentage: "95%"
    },
    {
      Stack: "Agile/Scrum Project Management",
      progressPercentage: "90%"
    },
    {
      Stack: "Technical Analysis & Documentation",
      progressPercentage: "85%"
    },
    {
      Stack: "User Acceptance Testing (UAT)",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Business Analyst",
      company: "Performance Systems Development (PSD)",
      companylogo: require("./assets/images/psd_logo.jpg"),
      date: "December 2022 – Present",
      desc: "Elicited, analyzed, and documented business and functional requirements by collaborating with stakeholders, product owners, and development teams to drive software solutions focused on performance, energy efficiency, and sustainability.",
      descBullets: [
        "Translated business needs into user stories, acceptance criteria, and process flows to support software development and enhancements",
        "Supported Agile/Scrum ceremonies, including creating backlog, sprint planning, and user acceptance testing (UAT)",
        "Validated system functionality by testing features, identifying defects, and ensuring solutions met business requirements",

      ]
    },
    {
      role: "Tech Linguistic Tester",
      company: "Welocalize, Inc. ",
      companylogo: require("./assets/images/welocalize_logo.png"),
      date: "Aug 2021 – Nov 2022",
      desc: "At Welocalize, a leading provider of multilingual content transformation services in translation, localization, and adaptation for over 250 languages, I contributed to quality assurance efforts supporting a global network of over 250,000 in-country linguistic resources.",
      descBullets: [
        "Validated content already localized to the Turkish language, catching any errors in the content, such as grammar, typos, syntax, etc.",
        "Tested APIs for integrations and checked UIs for functional issues"
      ]
    },
    {
      role: "IT Project Leader",
      company: "Stellantis - TOFAS Automotive",
      companylogo: require("./assets/images/stellantis_logo.png"),
      date: "June 2018 – May 2021",
      desc: "Led cross-functional IT and business initiatives spanning multiple products, translating complex business requirements into technical specifications while maintaining project scope, timeline, and quality standards.",
      descBullets: [
        "Facilitated communication and alignment between IT departments and business stakeholders, ensuring shared understanding of project objectives and deliverables",
        "Authored technical analysis documents and requirements specifications for software development projects, improving clarity and reducing scope creep",
        "Contributed to UI/UX design decisions as part of the core decision-making team, balancing business needs with user experience best practices",
        "Conducted comprehensive QA testing across mobile and web platforms, identifying and documenting defects that resulted in high-quality production releases"
      ]
    },
    {
      role: "Assistant Manager",
      company: "Azak Collective Company",
      companylogo: require("./assets/images/azak_logo.png"),
      date: "November 2016 – June 2018",
      desc: "Managed an installation project, a flexible and well-structured end-to-end IT solution, which covers stock management, accounting, selling, and invoicing for the family business",
      descBullets: [
        "Worked with local vendors for ease maintenance and technical support."
      ]
    },
    {
      role: "IT Project Management Specialist",
      company: "Acıbadem Healthcare Group",
      companylogo: require("./assets/images/acibadem_logo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Managed A|Store project from idea stage to software integration, prototyping and mass production.",
      descBullets: [
        "Developed comprehensive company protocols and guidelines for project management, IT procurement, and application processes, establishing standardized procedures across the organization",
        "Specialized in software delivery management, business requirement definition, and client training, ensuring successful adoption and stakeholder satisfaction"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Main Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/fya_logo.png"),
      projectName: "FIAT Connect",
      projectDesc:
        "Connected cars are primarily vehicles that are equipped with telematics control units to access the internet. They have inbuilt GSM modules and can connect with entities outside the vehicle. It has several value-added services in FIAT Yol Arkadaşım application such as vehicle control, improved safety.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://yolarkadasim.fiat.com.tr/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/astore_logo.png"),
      projectName: "Medicine and Medical Consumables Management Unit",
      projectDesc:
        "A|Store is a logistics management system that manages the medicine and medical consumables of  Acıbadem Healthcare Group. A|STORE is integrated with outsourcing applications like Hospital Information System      (HIS) and Enterprise Resource Planning (ERP). It has also hardware like an electronic cabinet and console system.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://www.acibademtechnology.com/a-store/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/cadio_logo.png"),
      projectName:
        "Construction and Feedback Control of an Elastance-driven Mock Circuit",
      projectDesc:
        "The goal of this project is to design and build a cardiovascular system mock circuit (CVMC) that is drivable with an elastance-based feed-back control left and right ventricles that can replicate the heart’s pressure-volume relationship accurately. For this goal pressure-volume relationship was calculated using elastance.",
      footerLink: [
        {
          name: "Download Master Thesis ",
          url: "https://tez.yok.gov.tr/UlusalTezMerkezi/TezGoster?key=gyLHMouPes-CvnhRcjQsKe-cSBEm3UmEaQoCKNtfuL60952s5jQiUr1qDRZ9MDeG"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Udacity - Data Streaming",
      subtitle:
        "Learned how to process data in real-time by building fluency in modern data engineering tools, such as Apache Spark, Kafka, Spark Streaming, and Kafka Streaming.",
      image: require("./assets/images/kafka_logo.png"),
      footerLink: [
        {
          name: "View Syllabus",
          url: "https://www.udacity.com/course/data-streaming-nanodegree--nd029"
        }
      ]
    },
    {
      title: "Microsoft Azure Machine Learning",
      subtitle:
        "Learned how to analyze the requirements for AI solutions, recommend appropriate tools and technologies, and implements solutions that meet scalability and performance requirements designing and Implementing an Azure AI Solution.",
      image: require("./assets/images/azure_logo.png"),
      footerLink: [
        {
          name: "View Syllabus",
          url: "https://llpa.skills-academy.com/exam/ai-100-designing-and-implementing-an-azure-ai-solution/"
        }
      ]
    },
    {
      title: "Patents and Design Registrations",
      subtitle:
        "During the A|Store project, we developed several pieces of equipment and applied them to the Turkish Patent and Trademark Office. You can find details and applications numbers of patents and design registrations in my resume.",
      image: require("./assets/images/patents_logo.png"),
      footerLink: [
        {
          name: "Turkish Patent and Trademark Office Website",
          url: "https://www.turkpatent.gov.tr/TURKPATENT/"
        }
      ]
    }

    // {
    //   title: "FIAT - Recognition and Appreciation Awards",
    //   subtitle:
    //     "During the A|Store project, we developed several pieces of equipment and applied them to the Turkish Patent and Trademark Office. You can find details and applications numbers of patents and design registrations in my resume.",
    //   image: require("./assets/images/awards_logo.png"),
    //   footerLink: [
    //     {
    //       name: "Turkish Patent and Trademark Office Website",
    //       url: "https://www.turkpatent.gov.tr/TURKPATENT/"
    //     },
    //     {
    //       name: "See My Resume",
    //       url: "https://drive.google.com/file/d/1gmxcEI0GtxnnKDXMs2B6q5LVbojk3Kgv/view?usp=sharing"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for learning cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://emireken.github.io/egek-blog-app/#/",
      title: "GITHUB Software Blog",
      description:
        "Do you want to share the progress of your development? React Blog is a personal blog system build on React that helps you create your blog using Github Issues "
    },
    {
      url: "https://1i3t.blogspot.com/?zx=30eac4b812daf512",
      title: "1I3T - Ideas, Thoughts, Today and Tomorrow",
      description: "Personal Blog about my thoughts and ideas."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/emireken-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "emirgokberk.eken@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
