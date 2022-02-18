import { Heading, Stack, Text } from "@chakra-ui/react";

import { CustomLink } from "../components/CustomLink";
import Layout from "../components/Layout";
import LinkCard from "../components/LinkCard";
import { PROJECT_LIST } from "../constants";

const ProjectListComponent = () => (
    <Stack direction="column" spacing={5}>
        {PROJECT_LIST.map((project) => (
            <LinkCard
                key={project.name}
                name={project.name}
                description={project.description}
                link={project.link}
                githubLink={project.githubLink}
                isNpmLink={project.isNpmLink}
            />
        ))}
    </Stack>
);

const IndexPage = () => (
    <Layout title="Home" description="Welcome to Shubham's corner of the internet" relativeCanonicalURL="">
        <Stack direction="column" spacing={5}>
            <Text as="h1" fontSize="5xl" my={4} textAlign="center" fontWeight="bold">
                Hey, I'm Shubham! 👋
            </Text>
            <Text fontSize="xl">I'm a developer from India who loves building apps with React.</Text>

            <Text fontSize="xl">
                I'm currently a Frontend Engineer at{" "}
                <Text as="span" color="#e96125">
                    <CustomLink href="https://blinkit.com">blinkit</CustomLink>
                </Text>
                , where I build products using Typescript, React, Redux and React-Native.
            </Text>

            {/* <Text fontSize="xl">
                I enjoy reading tech blogs, watching conferences and like to keep myself updated about new trends and
                library which comes up in the React ecosystem.
            </Text> */}

            <Stack py={5} spacing={5}>
                <Heading as="h3">Projects</Heading>
                <ProjectListComponent />
            </Stack>
        </Stack>
    </Layout>
);

export default IndexPage;
