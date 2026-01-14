import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Me', path: '/about' },
  { label: 'Projects', path: '/projects' },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        backgroundColor: 'var(--color-bg-primary)',
        height: '100%',
        py: 2,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          my: 2,
          color: 'var(--color-secondary)',
          fontWeight: 700,
        }}
      >
        Portfolio
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{
                textAlign: 'center',
                color:
                  location.pathname === item.path
                    ? 'var(--color-secondary)'
                    : 'var(--color-text-secondary)',
                '&:hover': {
                  backgroundColor: 'var(--color-bg-secondary)',
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'var(--color-bg-primary)',
          borderBottom: '1px solid var(--color-border-dark)',
        }}
      >
        <Toolbar
          sx={{
            maxWidth: '1200px',
            width: '100%',
            mx: 'auto',
            px: { xs: 2, md: 3 },
          }}
        >
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              color: 'var(--color-secondary)',
              fontWeight: 700,
              textDecoration: 'none',
              '&:hover': {
                color: 'var(--color-link)',
              },
            }}
          >
            Portfolio
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ color: 'var(--color-text-primary)' }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  sx={{
                    color:
                      location.pathname === item.path
                        ? 'var(--color-secondary)'
                        : 'var(--color-text-secondary)',
                    fontWeight: location.pathname === item.path ? 600 : 400,
                    borderBottom:
                      location.pathname === item.path
                        ? '2px solid var(--color-secondary)'
                        : '2px solid transparent',
                    borderRadius: 0,
                    px: 2,
                    '&:hover': {
                      color: 'var(--color-secondary)',
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
            backgroundColor: 'var(--color-bg-primary)',
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Toolbar spacer */}
      <Toolbar />
    </>
  );
}

export default Navbar;
