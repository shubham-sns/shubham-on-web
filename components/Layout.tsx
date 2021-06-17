import React, { ReactNode } from "react";
import { NextSeo } from "next-seo";
import NextLink from "next/link";
import Head from "next/head";
import { IconButton, useColorMode, Box, Flex, Stack, Link, HStack, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Footer from "./Footer";
import { BASE_URL } from "../constants";

type LayoutProps = {
    children?: ReactNode;
    title: string;
    description?: string;
    relativeCanonicalURL: string;
};

interface INavBarButtonProps {
    text: string;
    href: string;
    target?: string;
}

export const LinkButton = (props: INavBarButtonProps) => {
    const link = useColorModeValue("text.lightPink", "text.darkPink");
    return (
        <NextLink href={props.href} passHref>
            <Box
                variant="link"
                as={Link}
                target={props.target}
                rel={props.target && "noopener noreferrer"}
                textDecor="none"
                _hover={{
                    color: link,
                }}
            >
                {props.text}
            </Box>
        </NextLink>
    );
};

const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    const link = useColorModeValue("text.lightPink", "text.darkPink");

    return (
        <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            as="nav"
            p={3}
            mx="auto"
            maxW="650px"
        >
            <Flex mt="0.5rem">
                <NextLink href="/">
                    <Box cursor="pointer" h="25px" w="25px" backgroundColor={link} rounded="md" />
                </NextLink>
            </Flex>

            <HStack spacing="3" alignItems="center" fontSize="lg">
                <LinkButton
                    text="resume"
                    href="https://drive.google.com/file/d/1TE-N5jDwK4-D33q1Oo4wPRtmQyAMySqb/view?usp=sharing"
                    target="_blank"
                />
                <LinkButton text="blog" href="https://shubhs.hashnode.dev" target="_blank" />

                {/* <LinkButton text="about" href="/about" /> */}

                <IconButton
                    aria-label="Toggle dark mode"
                    variant="ghost"
                    onClick={toggleColorMode}
                    icon={colorMode == "dark" ? <SunIcon /> : <MoonIcon />}
                />
            </HStack>
        </Stack>
    );
};

const Layout = ({ children, title, description, relativeCanonicalURL }: LayoutProps) => {
    const canonicalURL = `${BASE_URL}/${relativeCanonicalURL}`;
    return (
        <>
            <NextSeo
                title={title}
                description={description}
                canonical={canonicalURL}
                openGraph={{
                    url: canonicalURL,
                    title: title,
                    description: description,
                }}
            />

            <Head>
                <title>{title ? `${title} |` : ""} Shubham Sananse</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" type="image/png" href="/static/logo.png" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Box>
                <Box as="header">
                    <NavBar />
                </Box>

                <Flex as="main" justifyContent="center" flexDirection="column" px={4} mx="auto" mt={8} maxW="650px">
                    <Stack spacing={10}>{children}</Stack>
                </Flex>

                <Footer />
            </Box>
        </>
    );
};

export default Layout;
