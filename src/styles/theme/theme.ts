import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  breakpoints: {
    xs: "20em",  // 320px (Celulares pequenos)
    sm: "30em",  // 480px (Celulares médios)
    md: "48em",  // 768px (Tablets)
    lg: "64em",  // 1024px (Notebooks)
    xl: "80em",  // 1280px (Desktops)
    "2xl": "96em", // 1536px (Telas grandes)
  },
  styles: {
    global: {
      "html, body": {
        backgroundColor: "gray.100",
        color: "gray.800",
        fontSize: { base: "1em", md: "1.125em", lg: "1.25em" }, // Escala o tamanho do texto
      },
    },
  },
});

export default theme;