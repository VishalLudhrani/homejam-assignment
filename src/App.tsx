import React from 'react';
import { Container, ThemeProvider, Toolbar, Typography } from "@mui/material";
import { Navbar } from './components';
import theme from './theme';

const App: React.FC = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container>
          <Navbar />
          <Toolbar />
          <Typography variant="h5" component="h3">Homejam Assignment</Typography>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
