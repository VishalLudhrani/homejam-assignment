import React from 'react';
import { Container, ThemeProvider, Toolbar } from "@mui/material";
import { Body, Hero, Navbar } from './components';
import theme from './theme';

const App: React.FC = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container>
          <Navbar />
          <Toolbar />
          <Hero />
          <Body />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
