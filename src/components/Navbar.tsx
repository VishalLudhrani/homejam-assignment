import { AppBar, Box, Button, Container, Link, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Basket, Hamburger, Search } from '../icons';

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
       boxShadow: fixed ? "0 4px 8px rgba(0,0,0,0.1)" : "none"
     }}
    >
      <Container>
        <Toolbar>
          <Link href="#" underline="none">
            <img src="../../images/logo.png" />
          </Link>

          {/* desktop nav */}
          <Box
            ml="auto"
            sx={{ display: "flex" }}
          >
            <Button sx={{ display: "flex", color: "inherit" }}>
              <Search />
              <Typography sx={{ display: { xs: "none", sm: "flex" } }} ml={1}>Search</Typography>
            </Button>
            <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNav}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Button sx={{ color: "inherit" }}>
              <Basket />
            </Button>

            {/* mobile nav */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNav}
                color="inherit"
              >
                <Hamburger />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorNav)}
                onClose={handleCloseNav}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNav}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )

}

export default Navbar;