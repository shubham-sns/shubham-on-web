import React, { ReactNode } from "react";
import { NextSeo } from "next-seo";
import NextLink from "next/link";
import Head from "next/head";
import { Button, IconButton, useColorMode, Box, Flex, Stack, Link } from "@chakra-ui/react";
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

const NavBarButton = (props: INavBarButtonProps) => {
    return (
        <NextLink href={props.href} passHref>
            <Button
                variant="link"
                as={Link}
                fontWeight="500"
                mr="4"
                target={props.target}
                _hover={{
                    color: "#ffa7c4",
                    textDecor: "none",
                }}
            >
                {props.text}
            </Button>
        </NextLink>
    );
};

const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            as="nav"
            p={3}
            mx="auto"
            maxW="800px"
        >
            <Box flexDirection="row" mt="0.5rem">
                <NextLink href="/">
                    <Box cursor="pointer" h="25px" w="25px" backgroundColor="#FFA7C4" rounded="md" />
                </NextLink>
            </Box>
            <Flex alignItems="center">
                <NavBarButton text="Blog" href="https://shubhs.hashnode.dev" target="_blank" />

                <NavBarButton text="About" href="/about" />

                <IconButton
                    aria-label="Toggle dark mode"
                    variant="ghost"
                    onClick={toggleColorMode}
                    icon={colorMode == "dark" ? <SunIcon /> : <MoonIcon />}
                />
            </Flex>
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
            <div>
                <Head>
                    <title>{title ? `${title} |` : ""} Shubham Sananse</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="icon" type="image/png" href="/static/logo.png" />
                </Head>
                <header>
                    <NavBar />
                </header>
                <Flex as="main" justifyContent="center" flexDirection="column" px={4} mx="auto" mt={8} maxW="800px">
                    <Stack spacing={10}>{children}</Stack>
                </Flex>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
