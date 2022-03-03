import React from "react";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { MobileNavMenuProps } from "../../interfaces";
import { Hamburger } from "../../icons";

const Mobile: React.FC<MobileNavMenuProps> = (props: MobileNavMenuProps) => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={props.handleOpenNav}
        color="inherit"
      >
        <Hamburger />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={props.anchorNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(props.anchorNav)}
        onClose={props.handleCloseNav}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {props.pages.map((page) => (
          <MenuItem key={page} onClick={props.handleCloseNav}>
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

export default Mobile;