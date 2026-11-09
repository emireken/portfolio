/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";
import atuLogoImg from "./assets/images/atu_logo.png";
import bauLogoImg from "./assets/images/bau_logo.png";
import psdLogoImg from "./assets/images/psd_logo.jpg";
import welocalizeLogoImg from "./assets/images/welocalize_logo.png";
import stellantisLogoImg from "./assets/images/stellantis_logo.png";
import azakLogoImg from "./assets/images/azak_logo.png";
import acibademLogoImg from "./assets/images/acibadem_logo.png";
import fyaLogoImg from "./assets/images/fya_logo.png";
import astoreLogoImg from "./assets/images/astore_logo.png";
import cadioLogoImg from "./assets/images/cadio_logo.png";
import kafkaLogoImg from "./assets/images/kafka_logo.png";
import azureLogoImg from "./assets/images/azure_logo.png";
import patentsLogoImg from "./assets/images/patents_logo.png";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Emir Eken",
  title: "Emir Eken",
  // Headline under your name: keep it to one short sentence
  subTitle: emoji(
    "Senior IT Business Analyst with 10+ years across healthcare, automotive, and building-performance software."
  ),
  // Supporting paragraph shown under the headline (optional)
  summary:
    "I lead stakeholder discovery, requirements, and current/future-state process mapping for enterprise and client-facing systems, from Salesforce and HubSpot CRM workflows to a connected-vehicle cloud application and a software rollout across a 37-location healthcare group.",
  // Small tag shown under the summary (optional)
  location: "Ithaca, NY · US Green Card holder",
  resumeLink: "",
  // Profile photo: put your photo in the public/ folder and set its file name here,
  // e.g. "profile.jpg". Leave empty to show the illustration instead.
  profileImage: "profile.png",
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
  subTitle: "SENIOR BUSINESS ANALYST: REQUIREMENTS, PROCESS MAPPING, AND SYSTEMS INTEGRATION",
  skills: [
    emoji(
      "Lead stakeholder discovery and structured interviews to surface system usage, dependencies, and functional requirements"
    ),
    emoji(
      "Translate business needs into user stories, acceptance criteria, and current/future-state process flows"
    ),
    emoji(
      "Lead and support Agile/Scrum ceremonies, including backlog creation, sprint planning, and UAT"
    ),
    emoji(
      "Analyze API integrations and system dependencies, and validate functionality through testing"
    )
  ],
  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
  softwareSkills: [
    {skillName: "Jira", fontAwesomeClassname: "fab fa-jira"},
    {skillName: "Confluence", fontAwesomeClassname: "fas fa-book"},
    {skillName: "Azure DevOps", fontAwesomeClassname: "fab fa-microsoft"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"},
    {skillName: "Salesforce", fontAwesomeClassname: "fab fa-salesforce"},
    {skillName: "HubSpot", fontAwesomeClassname: "fab fa-hubspot"},
    {skillName: "ServiceNow", fontAwesomeClassname: "fas fa-cogs"},
    {skillName: "SAP", fontAwesomeClassname: "fas fa-industry"},
    {skillName: "SQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Excel", fontAwesomeClassname: "fas fa-table"},
    {skillName: "Visio / Process Mapping", fontAwesomeClassname: "fas fa-sitemap"},
    {skillName: "Postman / Swagger", fontAwesomeClassname: "fas fa-plug"},
    {skillName: "Qlik Sense / Power BI", fontAwesomeClassname: "fas fa-chart-bar"},
    {skillName: "UAT & QA Testing", fontAwesomeClassname: "fas fa-clipboard-check"}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set afalse to hide this section, defaults to true
  schools: [
    {
      schoolName: "Ataturk University",
      logo: atuLogoImg,
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
      logo: bauLogoImg,
      subHeader: "Master of Science in Biomedical Engineering",
      duration: "2012 - 2014",
      desc: "Conducted research on Cardiovascular Mock Circuit systems, strengthening analytical skills in complex system design, requirements documentation, and validation testing methodologies applicable to enterprise software solutions."
      // descBullets: [
      //   "The goal of this project is to design and build a cardiovascular system mock circuit (CVMC) that is drivable with an elastance-based feed-back control left and right ventricles that can replicate the heart’s pressure-volume relationship accurately. For this goal pressure-volume relationship was calculated using elastance."
      //   // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Bahcesehir University",
      logo: bauLogoImg,
      subHeader: "Bachelor of Science in Mechatronics Engineering",
      duration: "2007 - 2012",
      desc: "Ranked top 10% in the program. Coursework in software development, embedded software, and electronics."
      //descBullets: [""]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
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
      company: "PSD",
      companylogo: psdLogoImg,
      date: "December 2022 – Present",
      desc: "Performance Systems Development (PSD) builds software, analytics, and consulting services for building performance, energy efficiency, and sustainability. I work across its internal and client-facing systems.",
      descBullets: [
        "Led stakeholder discovery sessions and structured interviews with business owners, product owners, and technical teams to surface system usage, dependencies, and functional requirements",
        "Translated business needs into user stories, acceptance criteria, and current/future-state process flows that guided development and system enhancements",
        "Led and supported Agile/Scrum ceremonies, including backlog creation, sprint planning, and UAT",
        "Analyzed CRM workflows across Salesforce and HubSpot to identify business process improvements",
        "Assessed application workflows and integration dependencies, documenting current-state capabilities to inform disposition decisions",
        "Tested new features, identified defects, and validated that solutions met business requirements"
      ]
    },
    {
      role: "Tech Linguistic Tester",
      company: "Welocalize, Inc.",
      companylogo: welocalizeLogoImg,
      date: "August 2021 – December 2022",
      desc: "Quality assurance for a multilingual localization provider serving 250+ languages.",
      descBullets: [
        "Tested API integrations and performed UI functional testing to identify defects",
        "Validated Turkish-localized content, catching grammar, spelling, and syntax errors"
      ]
    },
    {
      role: "IT Project Leader",
      company: "Stellantis – TOFAS Automotive",
      companylogo: stellantisLogoImg,
      date: "June 2018 – May 2021",
      desc: "Led requirements and delivery coordination for FIAT Yol Arkadaşım (FYA), a cloud application within FIAT Turkey's Connected Vehicle Project.",
      descBullets: [
        "Bridged IT and business teams by mapping data flows, surfacing integration dependencies across SAP and ServiceNow environments, and translating program decisions into execution plans",
        "Facilitated cross-functional discovery with data architects, developers, and business stakeholders to map current/future-state workflows in Visio",
        "Wrote business requirement documents, current-state assessments, and functional specifications for partners and technical audiences; reviewed API specs and ADD documents",
        "Designed value-added customer services using vehicle CAN data",
        "Built and maintained in-depth Qlik Sense dashboards analyzing vehicle and program data",
        "Analyzed microservices in Postman and Swagger to eliminate unnecessary data transfer, and validated test-bench data against real-vehicle data"
      ]
    },
    {
      role: "Assistant Manager",
      company: "Azak Collective Company",
      companylogo: azakLogoImg,
      date: "January 2017 – June 2018",
      desc: "Family-owned wholesale textile company serving customers since the 1950s.",
      descBullets: [
        "Led installation of an end-to-end IT system covering stock management, accounting, sales, and invoicing",
        "Coordinated with local vendors to secure ongoing maintenance and technical support"
      ]
    },
    {
      role: "IT Project Management Specialist",
      company: "Acıbadem Healthcare Group",
      companylogo: acibademLogoImg,
      date: "April 2014 – December 2016",
      desc: "Owned the A|Store project lifecycle across 21 hospitals and 16 medical centers (~17,000 employees), from current-state assessment and requirements through software integration and deployment.",
      descBullets: [
        "Established governance frameworks, protocols, and process standards for IT project management and procurement",
        "Coordinated business owners, product owners, hardware vendors, and technical teams across all delivery phases, and drove adoption through client training",
        "Brought structure to loosely defined workflows in a newly organized environment, aligning stakeholders across decentralized teams"
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
  title: "Case Studies",
  subtitle: "WHAT THE PROBLEM WAS, WHAT I DID, AND WHAT IT DELIVERED",
  projects: [
    {
      image: fyaLogoImg,
      projectName: "FIAT Yol Arkadaşım: Connected-Vehicle Services",
      projectDesc:
        "Challenge: FIAT Turkey needed value-added digital services for drivers, built on data from connected vehicles.\n\nMy role: IT Project Leader bridging IT, business teams, and external partners.\n\nWhat I delivered: business requirement documents, functional specifications, and current/future-state workflows; customer features designed from vehicle CAN data; API and microservice testing in Postman and Swagger; Qlik Sense dashboards for vehicle and program data.",
      footerLink: [
        {name: "Visit Website", url: "https://yolarkadasim.fiat.com.tr/"}
      ]
    },
    {
      image: astoreLogoImg,
      projectName: "A|Store: Medicine and Medical Consumables Management",
      projectDesc:
        "Challenge: Acıbadem needed one system to manage medicines and medical consumables across a decentralized group of 21 hospitals and 16 medical centers.\n\nMy role: owned the project from current-state assessment to deployment.\n\nWhat I delivered: requirements definition, integration with the Hospital Information System (HIS) and ERP, coordination with hardware vendors on electronic cabinets and consoles, governance protocols, and user training.\n\nScale: 37 locations, ~17,000 employees.",
      footerLink: [
        {name: "Visit Website", url: "http://www.acibademtechnology.com/a-store/"}
      ]
    },
    {
      image: cadioLogoImg,
      projectName: "Research: Elastance-Driven Cardiovascular Mock Circuit",
      projectDesc:
        "Master's research at Bahçeşehir University. Designed and built a cardiovascular mock circuit with elastance-based feedback control of the left and right ventricles, modeled in MATLAB/Simulink alongside a physical system to replicate the heart's pressure-volume relationship.",
      footerLink: [
        {
          name: "Download Master Thesis",
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
  title: "Achievements and Certifications",
  subtitle:
    "Professional development, certifications, and patents",

  achievementsCards: [
    {
      title: "Udacity - Data Streaming",
      subtitle:
        "Learned how to process data in real-time by building fluency in modern data engineering tools, such as Apache Spark, Kafka, Spark Streaming, and Kafka Streaming.",
      image: kafkaLogoImg,
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
        "Learned how to analyze the requirements for AI solutions, recommend appropriate tools and technologies, and implement solutions that meet scalability and performance requirements (AI-100: Designing and Implementing an Azure AI Solution).",
      image: azureLogoImg,
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
        "During the A|Store project, we developed several pieces of equipment and applied them to the Turkish Patent and Trademark Office. Application numbers are available on request.",
      image: patentsLogoImg,
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
    //     "During the A|Store project, we developed several pieces of equipment and applied them to the Turkish Patent and Trademark Office. Application numbers are available on request.",
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
  title: "Contact",
  subtitle:
    "Hiring for a business analyst role or want to talk about a project? My inbox is open.",
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
