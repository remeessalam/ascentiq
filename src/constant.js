import logoImg from "./assets/logo/logo.png";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Services from "./pages/Services";
import {
  FaRobot,
  FaChartLine,
  FaMobileAlt,
  FaGamepad,
  FaCommentDots,
  FaBrain,
  FaCloud,
  FaBitcoin,
  FaCogs,
} from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";

// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "./assets/web-development-portfolio/5ghomes.png";
import ColdCreekcapImg from "./assets/web-development-portfolio/cold-creekcap.png";
import ThinkRealityImg from "./assets/web-development-portfolio/think-reality.png";
import AkashMegaMart from "./assets/web-development-portfolio/Akash-Mega-Mart.png";
import MidwamImmersive from "./assets/web-development-portfolio/Midwam–Immersive-Experience-Design-Company.png";

// Import all images at the top (App Development)
import RentopBikeAndCarImgapp from "./assets/app-development-portfolio/Rentop–Bike-&-Car-Rentals.png";
import AkashMegaMartApp from "./assets/app-development-portfolio/Akash-Mega-Mart-Mobile-App.png";
import FeelItMobileApp from "./assets/app-development-portfolio/FeelIt-Mobile-App.png";
import KlikomicsMobileApp from "./assets/app-development-portfolio/Klikomics-Mobile-App.png";
import AutoSnapMobileApp from "./assets/app-development-portfolio/AutoSnap-Mobile-App.png";
export { logoImg };

export const companyDetails = {
  phone: "+0000000000",
  address: "ABC Street, City, Country",
  email: "abc@xyz.com",
  linkedin: "",
  instagram: "",
  twitter: "",
};

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/about-us",
    name: "About Us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    name: "Services",
    element: <Services />,
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    element: <ContactUs />,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerence Websites",
    icon: require("./assets/images/icons/online-shopping.png"),
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: require("./assets/images/icons/landing-page.png"),
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: require("./assets/images/icons/software-development.png"),
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: require("./assets/images/icons/android-development.png"),
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// testimonials

export const testimonials = [
  // 1. Artificial Intelligence Development
  {
    id: 1,
    name: "Jessica M.",
    position: "CEO, Tech Solutions Inc.",
    img: <FaUserTie />,
    desc: "Working with Ascentiq AI has truly revolutionized the way we do business. Their AI solutions have streamlined many of our internal processes, allowing us to make data-driven decisions faster and more accurately.",
  },
  {
    id: 2,
    name: "Raj P.",
    position: "Head of Innovation, Retail World",
    img: <FaUserTie />,
    desc: "We needed AI-powered tools to improve our customer interactions, and Ascentiq AI delivered. The impact of the AI implementation has been outstanding.",
  },

  // 2. Data Analytics and Business Intelligence
  {
    id: 3,
    name: "Maria G.",
    position: "COO, Global Enterprises",
    img: <FaUserTie />,
    desc: "The team at Ascentiq AI helped us unlock the true potential of our data. With actionable insights in an intuitive dashboard, we now adjust strategies in real-time.",
  },
  {
    id: 4,
    name: "Thomas K.",
    position: "Director of Operations, Innovate Tech",
    img: <FaUserTie />,
    desc: "We had a lot of data, but no way to use it effectively. Ascentiq AI provided BI tools that delivered insights into every aspect of our business.",
  },

  // 3. Mobile and Web Development
  {
    id: 5,
    name: "Sophia L.",
    position: "Marketing Director, Lifestyle Brands",
    img: <FaUserTie />,
    desc: "Our new website and mobile app are visually stunning and functional. We’ve seen a big increase in site traffic and conversions.",
  },
  {
    id: 6,
    name: "Daniel R.",
    position: "Founder, Quick Travel",
    img: <FaUserTie />,
    desc: "Ascentiq AI helped us build an intuitive mobile app experience. The feedback from our users has been overwhelmingly positive.",
  },

  // 4. Game Development
  {
    id: 7,
    name: "Chris H.",
    position: "CEO, GameDev Studios",
    img: <FaUserTie />,
    desc: "They brought our game ideas to life with expert guidance. The result is a visually stunning and engaging game loved by our audience.",
  },
  {
    id: 8,
    name: "Emily F.",
    position: "Chief Creative Officer, Interactive Games",
    img: <FaUserTie />,
    desc: "They exceeded our expectations. The development process was smooth and collaborative with insightful improvements throughout.",
  },

  // 5. Chatbot Development
  {
    id: 9,
    name: "David S.",
    position: "Customer Service Manager, eShop World",
    img: <FaUserTie />,
    desc: "The chatbot Ascentiq AI built significantly improved our response time and reduced manual workloads for our support team.",
  },
  {
    id: 10,
    name: "Rachel W.",
    position: "Director of Customer Experience, FastTrack Logistics",
    img: <FaUserTie />,
    desc: "Our chatbot handles a wide range of queries efficiently. It’s been a big win for our support system and customer satisfaction.",
  },

  // 6. Machine Learning
  {
    id: 11,
    name: "Jake P.",
    position: "Supply Chain Manager, Global Supplies",
    img: <FaUserTie />,
    desc: "The predictive models built by Ascentiq AI help us forecast demand and optimize operations. The improvements are clearly visible.",
  },
  {
    id: 12,
    name: "Amanda T.",
    position: "Head of Marketing, Retail Innovations",
    img: <FaUserTie />,
    desc: "Ascentiq AI guided us through machine learning model development. Now we predict customer behavior and optimize campaigns effectively.",
  },

  // 7. Cloud Computing
  {
    id: 13,
    name: "Laura M.",
    position: "IT Director, TechSphere Solutions",
    img: <FaUserTie />,
    desc: "Their cloud migration process was seamless and improved our scalability and collaboration capabilities tremendously.",
  },
  {
    id: 14,
    name: "Steven J.",
    position: "CTO, SecureData Systems",
    img: <FaUserTie />,
    desc: "With Ascentiq AI’s help, we migrated to the cloud efficiently. Reduced costs, increased capacity, and great ongoing support.",
  },

  // 8. Blockchain Development
  {
    id: 15,
    name: "Harold B.",
    position: "Head of Operations, ChainLink Industries",
    img: <FaUserTie />,
    desc: "Ascentiq AI’s blockchain solution improved our supply chain transparency and transaction security. Fully traceable and reliable.",
  },
  {
    id: 16,
    name: "Kendra W.",
    position: "CEO, EcoTech Solutions",
    img: <FaUserTie />,
    desc: "They helped us build a decentralized platform with smart contracts that improved transparency and security across our transactions.",
  },

  // 9. Robotic Process Automation (RPA)
  {
    id: 17,
    name: "John R.",
    position: "Operations Manager, FinTech Solutions",
    img: <FaUserTie />,
    desc: "RPA bots from Ascentiq AI have reduced manual errors and streamlined our processes, resulting in major efficiency gains.",
  },
  {
    id: 18,
    name: "Olivia F.",
    position: "CFO, Global Financial Partners",
    img: <FaUserTie />,
    desc: "Our back-office automation is now faster and more accurate thanks to Ascentiq AI’s robust RPA solution and training support.",
  },
];

// all services

export const allServices = [
  {
    id: 1,
    title: "Artificial Intelligence Development",
    description:
      "Discover the potential of AI with solutions tailored to enhance efficiency, automate tasks, and make intelligent decisions based on data.",
    icon: (
      <FaRobot
        size={40}
        className="group-hover:scale-125 transition-all duration-300"
      />
    ),
    detailContent:
      "Artificial Intelligence is revolutionizing business operations by enabling smarter decision-making and process automation. Our AI development services focus on creating systems that learn from data and improve over time.\n\nAt the core of our AI solutions is machine learning, where we develop algorithms that can identify patterns in data and make predictions. We specialize in deep learning techniques that use neural networks to solve complex problems. Our natural language processing capabilities allow systems to understand and generate human language, while our computer vision solutions enable machines to interpret visual data.\n\nWe implement AI across various business functions including customer service automation, predictive maintenance, fraud detection, and personalized recommendations. Our approach combines cutting-edge AI research with practical business applications to deliver measurable results.",
  },
  {
    id: 2,
    title: "Data Analytics and Business Intelligence",
    description:
      "Transform raw data into actionable insights that empower informed decision-making and competitive advantage.",
    icon: (
      <FaChartLine
        size={40}
        className="group-hover:scale-125 transition-all duration-300"
      />
    ),
    detailContent:
      "In today's data-driven world, the ability to extract meaningful insights from information is crucial for business success. Our data analytics services help organizations make sense of their data through advanced analytical techniques.\n\nWe implement comprehensive business intelligence solutions that include interactive dashboards, data visualization tools, and automated reporting systems. Our predictive analytics capabilities use statistical models and machine learning to forecast trends and behaviors. We specialize in data integration, combining information from multiple sources into a unified view for comprehensive analysis.\n\nOur team helps businesses establish key performance indicators (KPIs) and develop data governance frameworks to ensure data quality and consistency across the organization. We work with both structured and unstructured data, applying appropriate analytical methods to uncover hidden patterns and opportunities.",
  },
  {
    id: 3,
    title: "Mobile and Web Development",
    description:
      "Create responsive, user-friendly digital experiences that engage customers across all devices and platforms.",
    icon: (
      <FaMobileAlt
        size={40}
        className="group-hover:scale-125 transition-all duration-300"
      />
    ),
    detailContent:
      "In the digital age, having a strong online presence is essential for business success. Our mobile and web development services create high-performance applications that deliver seamless user experiences.\n\nFor web development, we build responsive, SEO-friendly websites using modern frameworks like React, Angular, and Vue.js. Our e-commerce solutions include secure payment gateways, inventory management, and personalized shopping experiences. We implement progressive web apps (PWAs) that combine the best of web and mobile applications.\n\nOur mobile development expertise covers both native (iOS/Android) and cross-platform solutions using Flutter and React Native. We focus on intuitive UI/UX design, offline capabilities, and integration with device features like cameras and GPS. Performance optimization and security are prioritized in all our development projects.",
  },
  {
    id: 4,
    title: "Game Development",
    description:
      "Create immersive gaming experiences with stunning visuals and engaging gameplay across multiple platforms.",
    icon: (
      <FaGamepad
        size={40}
        className="group-hover:scale-125 transition-all duration-300"
      />
    ),
    detailContent:
      "The gaming industry continues to evolve with new technologies and platforms. Our game development services cover the entire production lifecycle from concept to deployment.\n\nWe develop both 2D and 3D games using engines like Unity and Unreal, creating rich environments with realistic physics and animations. Our VR/AR solutions provide immersive experiences that blur the line between virtual and physical worlds. We specialize in multiplayer game development with secure networking and matchmaking systems.\n\nOur game design process focuses on creating compelling narratives, balanced gameplay mechanics, and rewarding progression systems. We optimize games for various platforms including mobile, PC, and consoles, ensuring smooth performance across different hardware specifications. Post-launch, we provide live operations support including updates, content additions, and community management.",
  },
  {
    id: 5,
    title: "Chatbot Development",
    description:
      "Enhance customer interactions with AI-powered chatbots that provide instant, personalized responses 24/7.",
    icon: (
      <FaCommentDots
        size={40}
        className="group-hover:scale-125 transition-all duration-300"
      />
    ),
    detailContent:
      "Modern customer service requires instant, always-available support. Our chatbot solutions leverage natural language processing to understand and respond to user queries in human-like conversations.\n\nWe develop rule-based chatbots for simple FAQ interactions and AI-powered virtual assistants capable of handling complex dialogues. Our solutions integrate with popular messaging platforms like WhatsApp, Facebook Messenger, and website live chats. We implement sentiment analysis to detect customer emotions and route conversations appropriately.\n\nOur chatbots can access backend systems to perform tasks like order tracking, appointment scheduling, and account management. We include analytics dashboards to monitor chatbot performance, identify common queries, and continuously improve response accuracy. For voice interactions, we develop voice assistants with speech recognition and text-to-speech capabilities.",
  },
  {
    id: 6,
    title: "Machine Learning",
    description:
      "Implement intelligent systems that learn from data to automate processes, predict outcomes, and uncover insights.",
    icon: (
      <FaBrain
        size={40}
        className="group-hover:scale-125 transition-all duration-300"
      />
    ),
    detailContent:
      "Machine learning is transforming industries by enabling systems to improve automatically through experience. Our ML services help businesses harness this powerful technology.\n\nWe develop supervised learning models for classification and regression problems, including image recognition, fraud detection, and demand forecasting. Our unsupervised learning solutions uncover hidden patterns in data through clustering and dimensionality reduction techniques. We implement reinforcement learning for systems that need to make sequences of decisions, such as recommendation engines.\n\nOur ML pipeline includes data preprocessing, feature engineering, model selection, and hyperparameter tuning. We focus on creating explainable AI models that provide transparency in their decision-making. For deployment, we implement MLOps practices to ensure models remain accurate as data evolves over time.",
  },
  {
    id: 7,
    title: "Cloud Computing",
    description:
      "Leverage scalable, secure cloud infrastructure to enhance business agility and reduce IT costs.",
    icon: (
      <FaCloud
        size={40}
        className="group-hover:scale-125 transition-all duration-300"
      />
    ),
    detailContent:
      "Cloud computing provides the foundation for digital transformation. Our cloud services help businesses migrate, optimize, and manage their cloud infrastructure.\n\nWe offer cloud strategy consulting to determine the right mix of public, private, and hybrid cloud solutions. Our migration services ensure smooth transitions with minimal downtime, including lift-and-shift and cloud-native approaches. We implement Infrastructure as Code (IaC) for reproducible, version-controlled cloud environments.\n\nOur cloud management includes cost optimization, performance monitoring, and security hardening. We specialize in serverless architectures, containerization with Kubernetes, and CI/CD pipelines for automated deployments. Security is prioritized with identity management, encryption, and compliance frameworks tailored to industry requirements.",
  },
  {
    id: 8,
    title: "Blockchain Development",
    description:
      "Build secure, transparent decentralized applications leveraging distributed ledger technology.",
    icon: (
      <FaBitcoin
        size={40}
        className="group-hover:scale-125 transition-all duration-300"
      />
    ),
    detailContent:
      "Blockchain technology enables trustless systems with immutable records. Our blockchain development services help businesses explore this transformative technology.\n\nWe develop smart contracts on platforms like Ethereum, Solana, and Hyperledger for automated, tamper-proof agreements. Our decentralized application (dApp) development includes frontend interfaces connected to blockchain backends via Web3.js or similar libraries. We create custom blockchain solutions for supply chain tracking, digital identity, and asset tokenization.\n\nOur cryptocurrency services include wallet development, exchange integrations, and token economics design. We implement security best practices to protect against vulnerabilities like reentrancy attacks and front-running. For enterprises, we develop permissioned blockchains with customized consensus mechanisms and governance models.",
  },
  {
    id: 9,
    title: "Robotic Process Automation (RPA)",
    description:
      "Automate repetitive tasks to improve efficiency, reduce errors, and free up human resources for higher-value work.",
    icon: (
      <FaCogs
        size={40}
        className="group-hover:scale-125 transition-all duration-300"
      />
    ),
    detailContent:
      "RPA technology allows businesses to automate rule-based processes without changing existing systems. Our RPA solutions deliver quick ROI by reducing manual effort.\n\nWe analyze business processes to identify automation opportunities with the highest impact. Our bots interact with applications through UI automation or API integrations, handling tasks like data entry, report generation, and system reconciliations. We implement attended automation for processes requiring human intervention and unattended automation for backend operations.\n\nOur intelligent automation solutions combine RPA with AI capabilities like document understanding and decision-making. We provide centralized bot orchestration with monitoring and exception handling. Post-implementation, we offer continuous improvement services to expand automation coverage as business needs evolve.",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
  {
    id: 90,
    img: AkashMegaMart,
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
  },
  {
    id: 91,
    img: MidwamImmersive,
    title: "Midwam – Immersive Experience Design Company",
    link: "https://www.midwam.com/en/about",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: AkashMegaMartApp,
    title: "Akash Mega Mart Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 2,
    img: FeelItMobileApp,
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
  },
  {
    id: 3,
    img: KlikomicsMobileApp,
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 4,
    img: AutoSnapMobileApp,
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImgapp,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];
