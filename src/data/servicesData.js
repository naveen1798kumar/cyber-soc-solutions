// import { ServiceImages } from "./serviceProducts";
import serviceImages from "./serviceImages";
import WebDevelopment from "../assets/our-services/web-development.jpg"
import DigitalMarketing from "../assets/our-services/digital-marketing.jpg"
import Networking from "../assets/our-services/networking.jpg"
import Automation from "../assets/our-services/automation.jpg"
import CyberSecurity from "../assets/our-services/cyber-security-services.jpg"

export const servicesData = {
  "websites-and-softwares": {
    title: "Website & Software Development",
    description:
      "From simple static websites to complex e-commerce platforms, we develop robust, scalable, and high-performance digital solutions tailored to your business needs. Our expert UI/UX designers ensure user-friendly and visually stunning interfaces.",
    image: WebDevelopment,
    id: "websites-and-softwares",
    services: [
      {
        id: "static-website",
        title: "Static Website",
        image: WebDevelopment,
        description:
          "Blazing-fast, cost-effective websites with enhanced security, ideal for small businesses and personal portfolios.",
        image: serviceImages.websites.static,
        sections: [
          {
            title: "What is a Static Website?",
            content:
              "A static website is a collection of fixed web pages coded in HTML and CSS. It is ideal for businesses or individuals who need a simple, fast, and secure online presence.",
          },
          {
            title: "Who Should Use Static Websites?",
            content:
              "Static websites are perfect for small businesses, personal portfolios, and informational websites that do not require frequent updates or dynamic content.",
          },
        ],
        benefits: [
          "Fast loading times for better user experience.",
          "Enhanced security as there is no server-side processing.",
          "Cost-effective and easy to host.",
          "Ideal for SEO with clean, static HTML files.",
        ],
        features: [
          {
            title: "Responsive Design",
            description: "Optimized for all devices, including mobile, tablet, and desktop.",
          },
          {
            title: "SEO-Friendly",
            description: "Built with clean code and optimized for search engines.",
          },
          {
            title: "Customizable Templates",
            description: "Choose from a variety of templates tailored to your needs.",
          },
        ],
        faqs: [
          {
            question: "What is the difference between static and dynamic websites?",
            answer:
              "Static websites are pre-rendered and do not change unless manually updated, while dynamic websites fetch data and update content in real-time.",
          },
          {
            question: "Can I update a static website myself?",
            answer:
              "Yes, but you will need basic knowledge of HTML and CSS or a developer to make changes.",
          },
        ],
      },
      {
        id: "dynamic-website",
        title: "Dynamic Website",
        description:
          "Interactive, database-driven websites with real-time updates and content management systems.",
        image: serviceImages.websites.dynamic,
        sections: [
          {
            title: "What is a Dynamic Website?",
            content:
              "Dynamic websites are powered by server-side technologies and databases, allowing real-time updates and interactive features.",
          },
          {
            title: "Why Choose a Dynamic Website?",
            content:
              "Dynamic websites are ideal for businesses that require frequent updates, user interaction, and database-driven content.",
          },
        ],
        benefits: [
          "Real-time content updates.",
          "Highly interactive and user-friendly.",
          "Easily scalable for growing businesses.",
          "Supports content management systems (CMS).",
        ],
        features: [
          {
            title: "Content Management System (CMS)",
            description: "Easily manage and update your website content.",
          },
          {
            title: "Database Integration",
            description: "Store and retrieve data dynamically for a seamless experience.",
          },
          {
            title: "Custom Functionality",
            description: "Add features like user authentication, forms, and more.",
          },
        ],
        faqs: [
          {
            question: "What technologies are used for dynamic websites?",
            answer:
              "Dynamic websites are typically built using server-side technologies like PHP, Node.js, or Python, along with databases like MySQL or MongoDB.",
          },
          {
            question: "Are dynamic websites secure?",
            answer:
              "Yes, dynamic websites can be secure if proper security measures like SSL, firewalls, and regular updates are implemented.",
          },
        ],
      },
      {
        id: "ecommerce-website",
        title: "E-Commerce Website",
        description:
          "Scalable online stores with secure payment gateways, optimized for conversions and SEO.",
        image: serviceImages.websites.ecommerce,
        sections: [
          {
            title: "What is an E-Commerce Website?",
            content:
              "An e-commerce website allows businesses to sell products or services online with features like shopping carts, payment gateways, and order management.",
          },
          {
            title: "Why Choose an E-Commerce Website?",
            content:
              "E-commerce websites are essential for businesses looking to expand their reach and sell products or services online.",
          },
        ],
        benefits: [
          "24/7 availability for customers.",
          "Secure payment gateways for safe transactions.",
          "Scalable to handle growing product catalogs.",
          "Optimized for conversions and SEO.",
        ],
        features: [
          {
            title: "Shopping Cart",
            description: "Seamless shopping experience with an intuitive cart system.",
          },
          {
            title: "Payment Gateway Integration",
            description: "Supports multiple payment methods for customer convenience.",
          },
          {
            title: "Order Management",
            description: "Track and manage orders efficiently.",
          },
        ],
        faqs: [
          {
            question: "What payment gateways can be integrated?",
            answer:
              "We support popular payment gateways like PayPal, Stripe, Razorpay, and more.",
          },
          {
            question: "Can I manage my products and orders?",
            answer:
              "Yes, our e-commerce websites come with an admin panel for managing products, orders, and customers.",
          },
        ],
      },
      {
        id: "web-applications",
        title: "Web Applications",
        description:
          "Custom-built, high-performance web apps with real-time data processing and seamless API integrations.",
        image: serviceImages.websites.webApp,
        sections: [
          {
            title: "What is a Web Application?",
            content:
              "A web application is a software application that runs on a web server and is accessed through a web browser.",
          },
          {
            title: "Why Choose a Web Application?",
            content:
              "Web applications are ideal for businesses that require custom solutions for specific workflows or processes.",
          },
        ],
        benefits: [
          "Custom-built to meet your business needs.",
          "Real-time data processing for better decision-making.",
          "Seamless integration with third-party APIs.",
          "Accessible from any device with a browser.",
        ],
        features: [
          {
            title: "Custom Development",
            description: "Tailored to your unique business requirements.",
          },
          {
            title: "API Integration",
            description: "Connect with third-party services for enhanced functionality.",
          },
          {
            title: "Scalable Architecture",
            description: "Built to grow with your business needs.",
          },
        ],
        faqs: [
          {
            question: "What technologies are used for web applications?",
            answer:
              "We use modern technologies like React, Angular, Node.js, and Python for building web applications.",
          },
          {
            question: "Can web applications be integrated with mobile apps?",
            answer:
              "Yes, web applications can be integrated with mobile apps for a seamless user experience.",
          },
        ],
      },
    ],
  },

  "digital-marketing": {
    title: "Digital Marketing & SEO",
    description:
      "Maximize your online presence with our cutting-edge digital marketing strategies. We specialize in SEO, social media marketing, and targeted ad campaigns to help you rank higher and drive more traffic to your website.",
    image: DigitalMarketing,
    id: "digital-marketing",
    services: [
      {
        id: "social-media",
        title: "Social Media Marketing",
        description:
          "Enhance brand visibility and engagement through targeted social media strategies on multiple platforms.",
        image: serviceImages.digitalMarketing.socialMedia,
        sections: [
          {
            title: "What is Social Media Marketing?",
            content:
              "Social media marketing involves creating and sharing content on social media platforms to achieve your branding and marketing goals.",
          },
          {
            title: "Why Choose Social Media Marketing?",
            content:
              "It helps businesses connect with their audience, increase brand awareness, and drive website traffic.",
          },
        ],
        benefits: [
          "Increased brand visibility and awareness.",
          "Improved customer engagement and loyalty.",
          "Cost-effective advertising options.",
          "Access to detailed analytics and insights.",
        ],
        features: [
          {
            title: "Platform-Specific Strategies",
            description: "Tailored strategies for platforms like Facebook, Instagram, and LinkedIn.",
          },
          {
            title: "Content Creation",
            description: "High-quality posts, videos, and stories to engage your audience.",
          },
          {
            title: "Ad Campaign Management",
            description: "Targeted ad campaigns to maximize ROI.",
          },
        ],
        faqs: [
          {
            question: "Which platforms do you support?",
            answer: "We support Facebook, Instagram, LinkedIn, Twitter, and more.",
          },
          {
            question: "How do you measure success?",
            answer: "We track metrics like engagement, reach, and conversions.",
          },
        ],
      },
      {
        id: "seo-optimization",
        title: "SEO Optimization",
        description:
          "Boost search engine rankings with strategic keyword research, on-page SEO, and technical optimization.",
        image: serviceImages.digitalMarketing.seo,
        sections: [
          {
            title: "What is SEO?",
            content:
              "Search Engine Optimization (SEO) is the process of improving your website's visibility on search engines like Google.",
          },
          {
            title: "Why Choose SEO?",
            content:
              "SEO helps drive organic traffic to your website, increasing visibility and credibility.",
          },
        ],
        benefits: [
          "Higher search engine rankings.",
          "Increased organic traffic.",
          "Improved user experience.",
          "Long-term cost-effective results.",
        ],
        features: [
          {
            title: "Keyword Research",
            description: "Identify high-performing keywords for your niche.",
          },
          {
            title: "On-Page Optimization",
            description: "Optimize meta tags, headings, and content for better rankings.",
          },
          {
            title: "Technical SEO",
            description: "Improve site speed, mobile-friendliness, and crawlability.",
          },
        ],
        faqs: [
          {
            question: "How long does it take to see results?",
            answer: "SEO results typically take 3-6 months to show significant improvements.",
          },
          {
            question: "Do you provide regular reports?",
            answer: "Yes, we provide detailed monthly reports on performance and progress.",
          },
        ],
      },
      {
        id: "content-marketing",
        title: "Content Writing & Marketing",
        description:
          "Create high-quality, SEO-optimized content that attracts, engages, and converts customers.",
      },
      {
        id: "ppc-campaigns",
        title: "PPC & Google Ads",
        description:
          "Drive instant traffic and conversions with data-driven pay-per-click advertising campaigns.",
      },
    ],
  },

  "networking": {
    title: "Networking & Security Solutions",
    description:
      "Secure, fast, and reliable networking solutions for businesses of all sizes. We design and implement high-performance IT infrastructure, cloud integration, and cybersecurity measures to protect your data and operations.",
    image: Networking,
    id: "networking",
    services: [
      {
        id: "firewall-security",
        title: "Firewall & Network Security",
        description: "Protect your data with enterprise-grade security.",
        image: serviceImages.networking.firewall,
        sections: [
          {
            title: "What is Firewall Security?",
            content:
              "Firewall security protects your network by monitoring and controlling incoming and outgoing traffic based on security rules.",
          },
          {
            title: "Why Choose Firewall Security?",
            content:
              "It ensures your business data is protected from unauthorized access and cyber threats.",
          },
        ],
        benefits: [
          "Enhanced network security.",
          "Protection against cyber threats.",
          "Improved data privacy.",
          "Compliance with industry standards.",
        ],
        features: [
          {
            title: "Intrusion Detection",
            description: "Identify and block potential threats in real-time.",
          },
          {
            title: "Advanced Encryption",
            description: "Secure sensitive data with robust encryption protocols.",
          },
          {
            title: "Custom Security Policies",
            description: "Tailored security rules for your business needs.",
          },
        ],
        faqs: [
          {
            question: "What types of firewalls do you offer?",
            answer: "We offer hardware, software, and cloud-based firewalls.",
          },
          {
            question: "Can firewalls prevent all cyberattacks?",
            answer: "While firewalls provide strong protection, additional measures like antivirus and monitoring are recommended.",
          },
        ],
      },
      {
        id: "cloud-networking",
        title: "Cloud Networking",
        description: "Integrate scalable cloud solutions with your network.",
      },
      {
        id: "server-management",
        title: "Server Management",
        description: "Optimize and manage your business servers efficiently.",
      },
    ],
  },

  "automation": {
    title: "Automation & Business Solutions",
    description:
      "Increase efficiency with our intelligent automation solutions. From CRM and ERP to AI-driven tools, we develop innovative solutions that streamline workflows, reduce operational costs, and enhance productivity.",
    image: Automation,
    id: "automation",
    services: [
      {
        id: "crm-erp",
        title: "CRM & ERP Systems",
        description:
          "Automate and optimize your business processes with advanced tools.",
        image: serviceImages.automation.crmErp,
        sections: [
          {
            title: "What are CRM & ERP Systems?",
            content:
              "CRM (Customer Relationship Management) and ERP (Enterprise Resource Planning) systems help businesses manage customer interactions and streamline operations.",
          },
          {
            title: "Why Choose CRM & ERP?",
            content:
              "These systems improve efficiency, enhance customer satisfaction, and provide valuable insights.",
          },
        ],
        benefits: [
          "Centralized data management.",
          "Improved customer relationships.",
          "Streamlined business processes.",
          "Enhanced decision-making with analytics.",
        ],
        features: [
          {
            title: "Customizable Dashboards",
            description: "Get insights at a glance with tailored dashboards.",
          },
          {
            title: "Integration with Existing Tools",
            description: "Seamlessly integrate with your current software.",
          },
          {
            title: "Scalable Solutions",
            description: "Grow your system as your business expands.",
          },
        ],
        faqs: [
          {
            question: "Can CRM and ERP systems be integrated?",
            answer: "Yes, we provide solutions that integrate both systems for seamless operations.",
          },
          {
            question: "Do you offer training for these systems?",
            answer: "Yes, we provide training to ensure your team can use the systems effectively.",
          },
        ],
      },
      {
        id: "ai-automation",
        title: "AI-Powered Automation",
        description: "Utilize AI and machine learning for business growth.",
      },
      {
        id: "workflow-integration",
        title: "Workflow Integration",
        description:
          "Seamlessly integrate your business applications.",
      },
    ],
  },

  "cyber-security": {
    title: "Cyber Security Services",
    description:
      "Protect your business from cyber threats with our comprehensive cybersecurity solutions. We offer vulnerability assessments, penetration testing, and incident response services to ensure your data is secure.",
    image: CyberSecurity,
    id: "cyber-security",
    services: [
      {
        id: "vapt",
        title: "Vulnerability Assessment & Penetration Testing (VAPT)",
        description:
          "Identify vulnerabilities and secure your systems with our expert VAPT services.",
        image: serviceImages.automation.crmErp,
        sections: [
          {
            title: "What is VAPT?",
            content:
              "Vulnerability Assessment and Penetration Testing (VAPT) is a process to identify, analyze, and mitigate security vulnerabilities in your IT infrastructure.",
          },
          {
            title: "Why Choose VAPT?",
            content:
              "VAPT helps protect your business from cyber threats by identifying weaknesses before attackers can exploit them.",
          },
        ],
        benefits: [
          "Comprehensive vulnerability identification.",
          "Improved security posture.",
          "Compliance with industry standards.",
          "Reduced risk of cyberattacks.",
        ],
        features: [
          {
            title: "Detailed Reporting",
            description: "Get actionable insights with in-depth vulnerability reports.",
          },
          {
            title: "Manual & Automated Testing",
            description: "Combine automated tools with expert manual testing for thorough analysis.",
          },
          {
            title: "Remediation Support",
            description: "Guidance on fixing identified vulnerabilities effectively.",
          },
        ],
        faqs: [
          {
            question: "How often should VAPT be conducted?",
            answer:
              "It is recommended to perform VAPT at least once a year or after significant changes to your IT infrastructure.",
          },
          {
            question: "What standards do you follow for VAPT?",
            answer:
              "We follow industry standards like OWASP, NIST, and ISO 27001 for our VAPT services.",
          },
        ],
      },
      {
        id: "soc",
        title: "Security Operation Center (SOC)",
        description:
          "Monitor, detect, and respond to security threats in real-time with our SOC services.",
        image: serviceImages.automation.crmErp,
        sections: [
          {
            title: "What is a Security Operation Center (SOC)?",
            content:
              "A SOC is a centralized unit that monitors and manages security incidents in real-time to protect your organization's IT infrastructure.",
          },
          {
            title: "Why Choose SOC Services?",
            content:
              "SOC services provide 24/7 monitoring, threat detection, and incident response to ensure your business stays secure.",
          },
        ],
        benefits: [
          "24/7 threat monitoring and response.",
          "Improved incident detection and resolution.",
          "Reduced downtime and business impact.",
          "Compliance with regulatory requirements.",
        ],
        features: [
          {
            title: "Real-Time Monitoring",
            description: "Continuous monitoring of your IT environment for threats.",
          },
          {
            title: "Threat Intelligence",
            description: "Leverage global threat intelligence to stay ahead of attackers.",
          },
          {
            title: "Incident Response",
            description: "Quickly respond to and mitigate security incidents.",
          },
        ],
        faqs: [
          {
            question: "Do you provide 24/7 SOC services?",
            answer: "Yes, our SOC operates 24/7 to monitor and respond to threats in real-time.",
          },
          {
            question: "Can SOC services be customized for my business?",
            answer: "Yes, we tailor our SOC services to meet your specific security needs.",
          },
        ],
      },
      {
        id: "cloud-security",
        title: "Cloud Security Services",
        description:
          "Secure your cloud infrastructure with advanced security measures and compliance solutions.",
        image: serviceImages.automation.crmErp,
        sections: [
          {
            title: "What is Cloud Security?",
            content:
              "Cloud security involves protecting cloud-based systems, data, and applications from cyber threats.",
          },
          {
            title: "Why Choose Cloud Security Services?",
            content:
              "Cloud security ensures the safety of your data and applications hosted in the cloud, providing peace of mind and compliance with regulations.",
          },
        ],
        benefits: [
          "Enhanced data protection in the cloud.",
          "Compliance with cloud security standards.",
          "Improved visibility and control over cloud resources.",
          "Reduced risk of data breaches.",
        ],
        features: [
          {
            title: "Data Encryption",
            description: "Secure your data with robust encryption techniques.",
          },
          {
            title: "Access Control",
            description: "Implement role-based access control for better security.",
          },
          {
            title: "Cloud Monitoring",
            description: "Monitor cloud activity to detect and respond to threats.",
          },
        ],
        faqs: [
          {
            question: "Which cloud platforms do you support?",
            answer: "We support AWS, Azure, Google Cloud, and other major cloud platforms.",
          },
          {
            question: "Can you help with cloud compliance?",
            answer: "Yes, we provide solutions to ensure compliance with cloud security standards.",
          },
        ],
      },
      {
        id: "governance",
        title: "Governance, Risk, and Compliance (GRC)",
        description:
          "Streamline your governance, risk, and compliance processes with our expert solutions.",
        image: serviceImages.automation.crmErp,
        sections: [
          {
            title: "What is GRC?",
            content:
              "Governance, Risk, and Compliance (GRC) is a framework for managing an organization's overall governance, risk management, and compliance with regulations.",
          },
          {
            title: "Why Choose GRC Services?",
            content:
              "GRC services help organizations align their IT and business strategies while ensuring compliance with regulatory requirements.",
          },
        ],
        benefits: [
          "Improved risk management.",
          "Streamlined compliance processes.",
          "Enhanced decision-making with actionable insights.",
          "Reduced operational risks.",
        ],
        features: [
          {
            title: "Policy Management",
            description: "Create and manage policies to ensure compliance.",
          },
          {
            title: "Risk Assessment",
            description: "Identify and mitigate risks effectively.",
          },
          {
            title: "Audit Support",
            description: "Prepare for audits with comprehensive documentation.",
          },
        ],
        faqs: [
          {
            question: "Can GRC services be customized for my industry?",
            answer: "Yes, we tailor our GRC services to meet the specific needs of your industry.",
          },
          {
            question: "Do you provide tools for risk management?",
            answer: "Yes, we offer tools and frameworks for effective risk management.",
          },
        ],
      },
      {
        id: "security-architecture",
        title: "Security Architecture Design",
        description:
          "Design and implement robust security architectures to protect your IT infrastructure.",
        image: serviceImages.automation.crmErp,
        sections: [
          {
            title: "What is Security Architecture?",
            content:
              "Security architecture involves designing and implementing security controls to protect an organization's IT infrastructure.",
          },
          {
            title: "Why Choose Security Architecture Services?",
            content:
              "Security architecture services ensure your IT systems are secure, scalable, and aligned with your business goals.",
          },
        ],
        benefits: [
          "Comprehensive security design.",
          "Improved protection against cyber threats.",
          "Scalable and flexible security solutions.",
          "Alignment with business objectives.",
        ],
        features: [
          {
            title: "Network Security Design",
            description: "Secure your network with advanced security controls.",
          },
          {
            title: "Application Security",
            description: "Protect your applications from vulnerabilities.",
          },
          {
            title: "Compliance Alignment",
            description: "Ensure your architecture meets regulatory requirements.",
          },
        ],
        faqs: [
          {
            question: "Can you design security architectures for hybrid environments?",
            answer: "Yes, we design architectures for on-premise, cloud, and hybrid environments.",
          },
          {
            question: "Do you provide ongoing support for security architectures?",
            answer: "Yes, we offer support and maintenance for implemented architectures.",
          },
        ],
      },
    ],
  },
};
