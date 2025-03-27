import { ServiceImages } from "./serviceProducts";
import { Service } from "./services";

export const servicesData = {
  "websites-and-softwares": {
    title: "Website & Software Development",
    description: "From simple static websites to complex e-commerce platforms, we develop robust, scalable, and high-performance digital solutions tailored to your business needs. Our expert UI/UX designers ensure user-friendly and visually stunning interfaces. ",
    image: ServiceImages[0],
    services: Service[0],
  },

  "digital-marketing": {
    title: "Digital Marketing & SEO",
    description: "Maximize your online presence with our cutting-edge digital marketing strategies. We specialize in SEO, social media marketing, and targeted ad campaigns to help you rank higher and drive more traffic to your website.",
    image: ServiceImages[1],
    services: Service[1],
  },

  "networking": {
    title: "Networking & Security Solutions",
    description: "Secure, fast, and reliable networking solutions for businesses of all sizes. We design and implement high-performance IT infrastructure, cloud integration, and cybersecurity measures to protect your data and operations.",
    image: ServiceImages[2],
    services: Service[2],
  },

  "automation": {
    title: "Automation & Business Solutions",
    description: "Increase efficiency with our intelligent automation solutions. From CRM and ERP to AI-driven tools, we develop innovative solutions that streamline workflows, reduce operational costs, and enhance productivity.",
    image: ServiceImages[3],
    services: Service[3],
  },
};
