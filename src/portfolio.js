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
    "Project Leader with 7 years of experience  🚀 in software in technical analysis, product integration, data analytics using various project management tools and methodologies "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1gmxcEI0GtxnnKDXMs2B6q5LVbojk3Kgv/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/emireken",
  linkedin: "https://www.linkedin.com/in/emirgokberkeken/",
  //gmail: "emirgokberk.eken@gmail.com",
  gitlab: "https://gitlab.com/emireken",
  //facebook: "https://www.facebook.com/emirgokberk.eken",
  //medium: "https://medium.com/@emireken",
  stackoverflow: "https://stackoverflow.com/users/14469011/emireken",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "EXPLORING FULL STACK DEVELOPER WHO WANTS LEARN AS MUCH AS I CAN",
  skills: [
    emoji(
      "⚡ Develop Front end / User Interfaces for your web and mobile applications"
    ),
    // emoji("⚡ Managing projects to achieve project objectives"),
    emoji("⚡ Integration of third party services such as Firebase/ Swagger")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "react",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "jira",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "QA Test",
      fontAwesomeClassname: "fas fa-spell-check"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
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
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set afalse to hide this section, defaults to true
  schools: [
    {
      schoolName: "Ataturk Univesity",
      logo: require("./assets/images/atu_logo.png"),
      subHeader: "Master of Business Administration",
      duration: "2017 - 2019",
      desc: "Conduct a research of Project Management in Software Development."
      // descBullets: [
      //   "Goal of this project is to design and build a cardiovascular system mock circuit (CVMC) which is drivable with an elastance based feed-back control left and right ventricles that can replicate heart’s pressure-volume relationship accurately. For this goal pressure volume relationship was calculated using elastance.",
      //   // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Bahcesehir Univesity",
      logo: require("./assets/images/bau_logo.png"),
      subHeader: "Master of Science in Bioengineering",
      duration: "2012 - 2013",
      desc: "Participated in the research of Cardiovascular Mock Circuit."
      // descBullets: [
      //   "The goal of this project is to design and build a cardiovascular system mock circuit (CVMC) that is drivable with an elastance-based feed-back control left and right ventricles that can replicate the heart’s pressure-volume relationship accurately. For this goal pressure-volume relationship was calculated using elastance."
      //   // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Bahcesehir Univesity",
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
      Stack: "IT Project Leader", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Techical Analysis",
      progressPercentage: "80%"
    },
    {
      Stack: "QA Testing",
      progressPercentage: "80%"
    },
    {
      Stack: "Software Development",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Tech Linguistic Tester",
      company: "Welocalize, Inc. ",
      companylogo: require("./assets/images/welocalize_logo.png"),
      date: "Aug 2021 – Present",
      desc: "Validated content already localized to the Turkish language, catching any errors in the content, such as grammar, typos, syntax, etc. Tested APIs for integrations and checked UIs for functional issues"
      // descBullets: [
      //   ""
      // ]
    },
    {
      role: "IT Project Leader",
      company: "Stellantis - TOFAS Automotive",
      companylogo: require("./assets/images/stellantis_logo.png"),
      date: "June 2018 – May 2021",
      desc: "Managed projects to achieve project objectives according to the project acceptance criteria within agreed parameters.",
      descBullets: [
        "For this purpose as a project manager, my job was creating information flow between IT and business departments.",
        "Learned to write technical analysis for demanded software developments.",
        "Be a member of the decision-making team for UI, UX, and overall design aesthetic of the software.",
        "During and after developments QA Testing was part of the job.  Functionally and linguistically testing on mobile and web platforms was crucial for the production software release."
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
        "Created series of company protocols and guidelines for project management, IT equipment purchasing, grand application processes, etc.",
        "•	Specialized in software delivery management, process management, business requirement definition, and client training."
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
          name: "View Certification",
          url: "https://drive.google.com/file/d/1w784vqp33gmz0Jlrb310bBB9vZ5PNA-X/view?usp=sharing"
        },
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
          name: "View Certification",
          url: "https://drive.google.com/file/d/10JbhSluI0AiCSXhL2ydIHOdGaP7Qe7lx/view?usp=sharing"
        },
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
  number: "+1-6072803493",
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
