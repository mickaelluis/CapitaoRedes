import React from 'react';
import AppRoutes from './router';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './styles/theme/theme.ts';
import { BrowserRouter } from "react-router-dom";
const App = () => {
    return (
    <BrowserRouter>
        <ChakraProvider theme={theme}>
            <AppRoutes />
        </ChakraProvider>
    </BrowserRouter>
    );
};

export default App;