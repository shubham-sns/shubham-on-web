import { extendTheme } from "@chakra-ui/react";
const config = {
    initialColorMode: "dark",
    useSystemColorMode: true,
    fonts: {
        body: `Inter, -apple-system, sans-serif`,
        heading: "Inter, -apple-system, sans-serif",
    },
    colors: {
        text: {
            darkPink: "#ffa7c4",
            lightPink: "#d23669",
        },
    },
};
const theme = extendTheme(config);

export { theme };
