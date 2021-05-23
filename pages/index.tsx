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
            />
        ))}
    </Stack>
);

const IndexPage = () => (
    <Layout title="Home" description="Welcome to Shubham's corner of the internet" relativeCanonicalURL="">
        <Stack direction="column" spacing={5}>
            <Text fontSize="5xl" textAlign="center" fontWeight="bold">
                Hey, I'm Shubham! 👋
            </Text>
            <Text fontSize="xl">I'm a developer from India who loves building apps with React.</Text>

            <Text fontSize="xl">
                I'm currently a Frontend Engineer at <CustomLink href="https://veemosupport.xyz">Veemo</CustomLink>,
                where I build products using React, Redux, React-Query and Next.js.
            </Text>

            <Stack py={5} spacing={5}>
                <Heading>Projects</Heading>
                <ProjectListComponent />
            </Stack>
        </Stack>
    </Layout>
);

export default IndexPage;
