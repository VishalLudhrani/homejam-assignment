import { AppBar, Box, Button, Container, Link, Toolbar, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Basket, Search } from '../../icons';
import Desktop from './Desktop';
import Mobile from './Mobile';

const pages = [ "Help", "Account" ];

const Navbar: React.FC = () => {

  const [ anchorNav, setAnchorNav ] = useState< null | HTMLElement >(null);
  const [ fixed, setFixed ] = useState<Boolean>(false);

  const handleOpenNav = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };

  const handleCloseNav = () => {
    setAnchorNav(null);
  };

  useEffect(() => {
    document.addEventListener("scroll", (e: any) => {
      const lastKnownScrollPosition = window.scrollY;
      if (lastKnownScrollPosition > 70) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    });
  }, []);

  return (
    <AppBar
     position="fixed"
     component="nav"
     sx={{
       background: fixed ? "#0A0B1A" : "transparent",
       boxShadow: fixed ? "0 32px 128px rgba(0,0,0,0.2)" : "none",
       transition: "300ms all"
     }}
    >
      <Container>
        <Toolbar>
          <Link href="#" underline="none">
            <img src="../../images/logo.png" alt="logo" />
          </Link>

          <Box
            ml="auto"
            sx={{ display: "flex" }}
          >
            
            {/* nav element - search (common for desktop and nav) */}
            <Button sx={{ display: "flex", color: "inherit" }}>
              <Search />
              <Typography sx={{ display: { xs: "none", sm: "flex" } }} ml={1}>Search</Typography>
            </Button>
            
            {/* nav elements - help, account (for desktop) */}
            <Desktop pages={pages} handleCloseNav={handleCloseNav} />

            {/* nav element - basket (common for desktop and nav) */}
            <Button sx={{ color: "inherit" }}>
              <Basket />
            </Button>

            {/* nav elements - help, account (for mobile) */}
            <Mobile
              pages={pages}
              handleOpenNav={handleOpenNav}
              handleCloseNav={handleCloseNav}
              anchorNav={anchorNav}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )

}

export default Navbar;