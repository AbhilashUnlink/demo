import React from 'react';
// import styles from './appbar-style.module.css';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';

const Appbar = ({ drawerWidth, handleDrawerToggle }: { drawerWidth: number, handleDrawerToggle: () => void }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          YOGO DASHBOARD
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;