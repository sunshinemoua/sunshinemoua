import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.svg";
import logo_dark from "./logo_dark.svg";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import headshot from "./headshot.png";
import soloshot from "./soloshot.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  headshot,
  soloshot,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
    title: "ChitChat",
    description: "next.js, typescript, react, tailwind css",
    bgImage: "/work-1.png",
  },
  {
    title: "Uber Clone",
    description: "react native, expo",
    bgImage: "/work-2.png",
  },
  {
    title: "UpSend",
    description: "next.js, typescript, react, tailwind css",
    bgImage: "/work-3.png",
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web Development",
    description: "Developing responsive and scalable web applications...",
  },
  {
    icon: assets.mobile_icon,
    title: "Mobile Development",
    description: "Building native and cross-platform mobile applications...",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX Design",
    description:
      "Creating intuitive and engaging user interfaces for seamless user experiences...",
  },
  {
    icon: assets.graphics_icon,
    title: "QA/Testing",
    description:
      "Creating and executing test plans to ensure software quality...",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Technologies",
    description:
      "HTML5, CSS3, JavaScript, React, Next.js, Node.js, Tailwind CSS, TypeScript, Redux, TanStack",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description:
      "Bachelors of Science; Computer Science @ California State University, Stanislaus",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description:
      "Check out my projects on GitHub! I've built a variety of projects using the technologies listed above.",
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];
