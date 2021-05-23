import { IProjectCardProps } from "./interfaces";
import { DefaultSeoProps } from "next-seo";

export const BASE_URL: string = "https://shubham.vercel.app";

export const PROJECT_LIST: Array<IProjectCardProps> = [
    {
        name: "Mrugjal",
        description: "Mrugjal is a clone of Instagram with all major features like upload, like, comment and save.",
        link: "https://mrugjal.vercel.app",
        githubLink: "https://github.com/shubham-sns/mrugjal",
    },
    {
        name: "Feedback Ape",
        description: "Feedback Ape is the easiest way to add feedback/comment to your site.",
        link: "https://feedbackape.vercel.app",
        githubLink: "https://github.com/shubham-sns/feedback-ape",
    },
    {
        name: "Hashblog",
        description: "Hashblog is a free blogging platform that allows you to publish articles and share them online.",
        link: "https://hashblog.vercel.app",
        githubLink: "https://github.com/shubham-sns/hashblog",
    },
    {
        name: "Crown Cart",
        description: "Crwn-cart is an E-commerce clothing store.",
        link: "https://crwncart.vercel.app/",
        githubLink: "https://github.com/shubham-sns/crwn-cart",
    },
];
const DEFAULT_TITLE = "Shubham Sananse";
const TWITTER_HANDLE = "@shubham_sns";

export const DEFAULT_SEO_CONFIG: DefaultSeoProps = {
    title: DEFAULT_TITLE,
    canonical: BASE_URL,
    openGraph: {
        type: "website",
        locale: "en_IE",
        url: BASE_URL,
        title: DEFAULT_TITLE,
        images: [
            {
                url: "https://shubham.vercel.app/static/images/og.png",
                alt: DEFAULT_TITLE,
                width: 1280,
                height: 720,
            },
        ],
    },
    twitter: {
        handle: TWITTER_HANDLE,
        site: TWITTER_HANDLE,
        cardType: "summary_large_image",
    },
};

export const TWITTER_URL = "https://twitter.com/shubham_sns";
export const GITHUB_URL = "https://github.com/shubham-sns";
export const LINKEDIN_URL = "https://linkedin.com/shubham-sns";
export const TELEGRAM_URL = "https://t.me/TurnedOutImNoob";
export const EMAIL = "shubhamsananse9@gmail.com";
