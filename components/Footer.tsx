import React from "react";
import { Flex, IconButton, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaMailBulk, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, TELEGRAM_URL, TWITTER_URL } from "../constants";

const Footer = () => (
    <Flex align="center" py={8} direction="column">
        <div>
            <IconButton
                href={TWITTER_URL}
                title="Twitter"
                isExternal
                as={Link}
                aria-label="Twitter"
                icon={<FaTwitter />}
                size="lg"
                color="gray.500"
                variant="ghost"
            />

            <IconButton
                href={GITHUB_URL}
                title="GitHub"
                passHref
                isExternal
                as={Link}
                aria-label="GitHub"
                icon={<FaGithub />}
                size="lg"
                color="gray.500"
                variant="ghost"
            />

            <IconButton
                href={LINKEDIN_URL}
                title="LinkedIn"
                passHref
                isExternal
                as={Link}
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
                size="lg"
                color="gray.500"
                variant="ghost"
            />

            <IconButton
                href={TELEGRAM_URL}
                title="Telegram"
                passHref
                isExternal
                as={Link}
                aria-label="Telegram"
                icon={<FaTelegramPlane />}
                size="lg"
                color="gray.500"
                variant="ghost"
            />

            <IconButton
                as={Link}
                href={`mailto:${EMAIL}`}
                title="Email"
                passHref
                aria-label="Email"
                icon={<FaMailBulk />}
                size="lg"
                color="gray.500"
                variant="ghost"
            />
        </div>
    </Flex>
);

export default Footer;
