import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://phnaharris.github.io/",
  author: "phnaharris",
  desc: "phnaharris's webpage",
  title: "phnaharris",
  ogImage: "astropaper-og.jpg", // https://popupsmart.com/blog/auto-generate-open-graph-image
  lightAndDarkMode: true,
  postPerPage: 10,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/phnaharris",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "GitLab",
    href: "https://gitlab.com/phnaharris",
    linkTitle: `${SITE.title} on GitLab`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/phnaharris",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/phnaharris",
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/phnaharris",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:phnanh.harris@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/phnaharris",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  // {
  //   name: "Twitch",
  //   href: "https://twitch.com/phnaharris",
  //   linkTitle: `${SITE.title} on Twitch`,
  //   active: false,
  // },
  {
    name: "YouTube",
    href: "https://youtube.com/@phnaharris",
    linkTitle: `${SITE.title} on YouTube`,
    active: true,
  },
  // {
  //   name: "WhatsApp",
  //   href: "https://github.com/phnaharris",
  //   linkTitle: `${SITE.title} on WhatsApp`,
  //   active: false,
  // },
  // {
  //   name: "Snapchat",
  //   href: "https://github.com/phnaharris",
  //   linkTitle: `${SITE.title} on Snapchat`,
  //   active: false,
  // },
  // {
  //   name: "Pinterest",
  //   href: "https://github.com/phnaharris",
  //   linkTitle: `${SITE.title} on Pinterest`,
  //   active: false,
  // },
  // {
  //   name: "CodePen",
  //   href: "https://github.com/phnaharris",
  //   linkTitle: `${SITE.title} on CodePen`,
  //   active: false,
  // },
  {
    name: "Discord",
    href: "https://discordapp.com/users/764335980492226600",
    linkTitle: `${SITE.title} on Discord`,
    active: true,
  },
  // {
  //   name: "Reddit",
  //   href: "https://github.com/phnaharris",
  //   linkTitle: `${SITE.title} on Reddit`,
  //   active: false,
  // },
  {
    name: "Skype",
    href: "https://join.skype.com/invite/v5j1CcUAJ2QF",
    linkTitle: `${SITE.title} on Skype`,
    active: true,
  },
  {
    name: "Telegram",
    href: "https://t.me/phnaharris",
    linkTitle: `${SITE.title} on Telegram`,
    active: true,
  },
  {
    name: "Mastodon",
    href: "https://fosstodon.org/@phnaharris",
    linkTitle: `${SITE.title} on Mastodon`,
    active: true,
  },
];
