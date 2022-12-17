import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Heading, List, ListIcon, ListItem, Text, useColorModeValue } from "@chakra-ui/react";
import { CustomLink } from "../components/CustomLink";
import Layout from "../components/Layout";

/// I know I can map over an array of objects and render them but I started this way and now I m too lazy to change it,
// should I write a plugin for this, 🤷

function UsesPage() {
    const color = useColorModeValue("text.lightPink", "text.darkPink");

    return (
        <Layout title="About" description="About Shubham Sananse" relativeCanonicalURL="/about">
            <Heading as="h1" textAlign={"center"} fontSize={"7xl"}>
                /uses
            </Heading>
            <React.Fragment>
                <Heading as="h2" color={color}>
                    Applications
                </Heading>
                <Box>
                    <List spacing={3}>
                        <ListItem display="flex">
                            <Box>
                                <ListIcon as={ArrowForwardIcon} color={color} fontSize={"larger"} />
                            </Box>
                            <Text as="span">
                                <CustomLink href="https://code.visualstudio.com/">Vs Code</CustomLink> as everyday code
                                editor
                            </Text>
                        </ListItem>
                        <ListItem display="flex">
                            <Box>
                                <ListIcon as={ArrowForwardIcon} color={color} fontSize={"larger"} />
                            </Box>
                            <Text as="span">
                                <CustomLink href="https://obsidian.md/">Obsidian</CustomLink> for my mac only notes
                            </Text>
                        </ListItem>
                        <ListItem display="flex">
                            <Box>
                                <ListIcon as={ArrowForwardIcon} color={color} fontSize={"larger"} />
                            </Box>
                            <Text as="span">
                                <CustomLink href="https://www.figma.com/">Figma</CustomLink> everything designs
                            </Text>
                        </ListItem>
                        <ListItem display="flex">
                            <Box>
                                <ListIcon as={ArrowForwardIcon} color={color} fontSize={"larger"} />
                            </Box>
                            <Text as="span">
                                <CustomLink href="https://iterm2.com/">iterm2</CustomLink> with{" "}
                                <CustomLink href="https://ohmyz.sh/">oh-my-zsh</CustomLink> and{" "}
                                <CustomLink href="https://starship.rs/">starship</CustomLink> as terminal
                            </Text>
                        </ListItem>
                        <ListItem display="flex">
                            <Box>
                                <ListIcon as={ArrowForwardIcon} color={color} fontSize={"larger"} />
                            </Box>
                            <Text as="span">
                                <CustomLink href="https://neovim.io/">NeoVim</CustomLink> quick changes are just more
                                productive with vim
                            </Text>
                        </ListItem>
                    </List>
                </Box>
            </React.Fragment>
            <React.Fragment>
                <Heading as="h2" color={color}>
                    Helper Apps
                </Heading>
                <Box>
                    <List spacing={3}>
                        <ListItem display="flex">
                            <Box>
                                <ListIcon as={ArrowForwardIcon} color={color} fontSize={"larger"} />
                            </Box>
                            <Text as="span">
                                <CustomLink href="https://www.raycast.com/">Raycast</CustomLink> my window manager,
                                clipboard history, custom scripts, not just another launcher
                            </Text>
                        </ListItem>
                        <ListItem display="flex">
                            <Box>
                                <ListIcon as={ArrowForwardIcon} color={color} fontSize={"larger"} />
                            </Box>
                            <Text as="span">
                                <CustomLink href="https://karabiner-elements.pqrs.org/">Karabiner-Elements</CustomLink>{" "}
                                are you even vim user if you don't remap capslock
                            </Text>
                        </ListItem>
                        <ListItem display="flex">
                            <Box>
                                <ListIcon as={ArrowForwardIcon} color={color} fontSize={"larger"} />
                            </Box>
                            <Text as="span">
                                <CustomLink href="https://brew.sh/">HomeBrew</CustomLink> can't install anything
                                manually, can you?
                            </Text>
                        </ListItem>
                        <ListItem display="flex">
                            <Box>
                                <ListIcon as={ArrowForwardIcon} color={color} fontSize={"larger"} />
                            </Box>
                            <Text as="span">
                                <CustomLink href="https://cli.github.com/">GitHub CLI</CustomLink> why stop after
                                pushing code to github, why not create issues, pull requests, and more from terminal
                            </Text>
                        </ListItem>
                        <ListItem display="flex">
                            <Box>
                                <ListIcon as={ArrowForwardIcon} color={color} fontSize={"larger"} />
                            </Box>
                            <Text as="span">
                                <CustomLink href="https://apps.apple.com/us/app/amphetamine/id937984704?mt=12">
                                    Amphetamine
                                </CustomLink>{" "}
                                when you need to keep your mac awake
                            </Text>
                        </ListItem>
                        <ListItem display="flex">
                            <Box>
                                <ListIcon as={ArrowForwardIcon} color={color} fontSize={"larger"} />
                            </Box>
                            <Text as="span">
                                <CustomLink href="https://fig.io/">Fig</CustomLink> a command line autocomplete which
                                tells me how little I know
                            </Text>
                        </ListItem>
                        <ListItem display="flex">
                            <Box>
                                <ListIcon as={ArrowForwardIcon} color={color} fontSize={"larger"} />
                            </Box>
                            <Text as="span">
                                <CustomLink href="https://muzzleapp.com/">Muzzle</CustomLink> all my friends are toxic
                            </Text>
                        </ListItem>
                        <ListItem display="flex">
                            <Box>
                                <ListIcon as={ArrowForwardIcon} color={color} fontSize={"larger"} />
                            </Box>
                            <Text as="span">
                                <CustomLink href="https://topnotch.app/">TopNotch</CustomLink> belive me, your m1 would
                                look much better with this
                            </Text>
                        </ListItem>
                        <ListItem display="flex">
                            <Box>
                                <ListIcon as={ArrowForwardIcon} color={color} fontSize={"larger"} />
                            </Box>
                            <Text as="span">
                                <CustomLink href="https://justgetflux.com/">Flux</CustomLink> for my eyes
                            </Text>
                        </ListItem>
                        <ListItem display="flex">
                            <Box>
                                <ListIcon as={ArrowForwardIcon} color={color} fontSize={"larger"} />
                            </Box>
                            <Text as="span">
                                <CustomLink href="https://flameshot.org/">Flameshot</CustomLink> for those screenshots
                                with annotations, cause I care about your time
                            </Text>
                        </ListItem>
                    </List>
                </Box>
            </React.Fragment>

            <>
                <Heading as="h2" color={color}>
                    Vscode Extensions
                </Heading>
                <Box>
                    <List spacing={3}>
                        <ListItem display="flex">
                            <Box>
                                <ListIcon as={ArrowForwardIcon} color={color} fontSize={"larger"} />
                            </Box>
                            <Text as="span">
                                <CustomLink href="https://marketplace.visualstudio.com/items?itemName=vscodevim.vim">
                                    vscodeVim
                                </CustomLink>{" "}
                                dont judge It's complicated. stuck in vim :wq
                            </Text>
                        </ListItem>
                        <ListItem display="flex">
                            <Box>
                                <ListIcon as={ArrowForwardIcon} color={color} fontSize={"larger"} />
                            </Box>
                            <Text as="span">
                                <CustomLink href="https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph">
                                    Git Graph
                                </CustomLink>{" "}
                                as everyday code editor
                            </Text>
                        </ListItem>
                        <ListItem display="flex">
                            <Box>
                                <ListIcon as={ArrowForwardIcon} color={color} fontSize={"larger"} />
                            </Box>
                            <Text as="span">
                                <CustomLink href="https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments">
                                    Better Comments
                                </CustomLink>{" "}
                                as everyday code editor
                            </Text>
                        </ListItem>
                        <ListItem display="flex">
                            <Box>
                                <ListIcon as={ArrowForwardIcon} color={color} fontSize={"larger"} />
                            </Box>
                            <Text as="span">
                                <CustomLink href="https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens">
                                    Error Lens
                                </CustomLink>{" "}
                                as everyday code editor
                            </Text>
                        </ListItem>
                    </List>
                </Box>
            </>

            <>
                <Heading as="h2" color={color}>
                    Browser Extensions
                </Heading>
                <Box>
                    <List spacing={3}>
                        <ListItem display="flex">
                            <Box>
                                <ListIcon as={ArrowForwardIcon} color={color} fontSize={"larger"} />
                            </Box>
                            <Text as="span">
                                <CustomLink href="https://vimium.github.io/">Vimium</CustomLink> 🙈
                            </Text>
                        </ListItem>
                        <ListItem display="flex">
                            <Text as="span">
                                <ListIcon as={ArrowForwardIcon} color={color} fontSize={"larger"} />
                                <CustomLink href="https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=en">
                                    uBlock Origin
                                </CustomLink>{" "}
                                as everyday code editor
                            </Text>
                        </ListItem>
                        <ListItem display="flex">
                            <Box>
                                <ListIcon as={ArrowForwardIcon} color={color} fontSize={"larger"} />
                            </Box>
                            <Text as="span">
                                <CustomLink href="https://chrome.google.com/webstore/detail/sponsorblock-for-youtube/mnjggcdmjocbbbhaepdhchncahnbgone?hl=en">
                                    SponsorBlock for YouTube
                                </CustomLink>{" "}
                                as everyday code editor
                            </Text>
                        </ListItem>
                        <ListItem display="flex">
                            <Box>
                                <ListIcon as={ArrowForwardIcon} color={color} fontSize={"larger"} />
                            </Box>
                            <Text as="span">
                                <CustomLink href="https://chrome.google.com/webstore/detail/visualize-value/ejblinjidfhnpkjbphoendgjjnhmfoee?hl=en">
                                    Visualize Value
                                </CustomLink>{" "}
                                as everyday code editor
                            </Text>
                        </ListItem>
                    </List>
                </Box>
            </>
        </Layout>
    );
}

export default UsesPage;
