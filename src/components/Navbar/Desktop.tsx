import React from "react";
import { Box, Button } from "@mui/material";
import { DesktopNavMenuProps } from "../../interfaces";

const Desktop: React.FC<DesktopNavMenuProps> = (props: DesktopNavMenuProps) => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
      {props.pages.map((page) => (
        <Button
          key={page}
          onClick={props.handleCloseNav}
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          {page}
        </Button>
      ))}
    </Box>
  )
}

export default Desktop;