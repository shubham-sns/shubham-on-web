import React from "react";
import { Box, Flex, IconButton, Link, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaMailBulk, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, TELEGRAM_URL, TWITTER_URL } from "../constants";
import { LinkButton } from "./Layout";

const Footer = () => (
    <Flex align="center" py={8} direction="column">
        <Box>
            <IconButton
                href={TWITTER_URL}
                title="Twitter"
                isExternal
                as={Link}
                aria-label="Twitter"
                icon={<FaTwitter size="24" />}
                size="lg"
                variant="ghost"
                _hover={{ color: "#ffa7c4" }}
            />

            <IconButton
                href={GITHUB_URL}
                title="GitHub"
                passHref
                isExternal
                as={Link}
                aria-label="GitHub"
                icon={<FaGithub size="24" />}
                size="lg"
                variant="ghost"
                _hover={{ color: "#ffa7c4" }}
            />

            <IconButton
                href={LINKEDIN_URL}
                title="LinkedIn"
                passHref
                isExternal
                as={Link}
                aria-label="LinkedIn"
                icon={<FaLinkedin size="24" />}
                size="lg"
                variant="ghost"
                _hover={{ color: "#ffa7c4" }}
            />

            <IconButton
                href={TELEGRAM_URL}
                title="Telegram"
                passHref
                isExternal
                as={Link}
                aria-label="Telegram"
                icon={<FaTelegramPlane size="24" />}
                size="lg"
                variant="ghost"
                _hover={{ color: "#ffa7c4" }}
            />

            <IconButton
                as={Link}
                href={`mailto:${EMAIL}`}
                title="Email"
                passHref
                aria-label="Email"
                icon={<FaMailBulk size="24" />}
                size="lg"
                variant="ghost"
                _hover={{ color: "#ffa7c4" }}
            />
        </Box>

        <Text>
            Made with <LinkButton text="Next.js" href="https://nextjs.org" /> • Hosted on{" "}
            <LinkButton text="Vercel" href="https://vercel.com" /> • Find me on{" "}
            <LinkButton text="Twitter" href={TWITTER_URL} />
        </Text>
    </Flex>
);

export default Footer;
