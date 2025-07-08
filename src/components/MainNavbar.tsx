"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { LightModeOutlined, DarkModeOutlined, FacebookOutlined, Twitter } from "@mui/icons-material";
import { CardMedia, Tooltip, useColorScheme } from "@mui/material";
import Link from "next/link";

const pages = [
  { name: "Home", id: "/" },
  { name: "About Us", id: "#about" },
  { name: "Services", id: "#services" },
  { name: "Portfolio", id: "#portfolio" },
  { name: "Contact Us", id: "#contact" },
];

const social = [
    { name: "Facebook", url: "https://www.facebook.com", icon: <FacebookOutlined  /> },
    { name: "Twitter", url: "https://x.com/@supakonnect", icon: <Twitter /> },
  ];

function MainNavbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);

  };
  const { mode, setMode } = useColorScheme();

  const [activeSection, setActiveSection] = React.useState<string>("/");

  const handleThemeChange = React.useCallback(
    (
      ev: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      _mode: "light" | "dark" | "system"
    ) => {
      ev.preventDefault();
      setMode(_mode);
    },
    [setMode]
  );

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = pages
        .map((item) =>
          item.id.startsWith("#") ? document.querySelector(item.id) : null
        )
        .filter(Boolean) as HTMLElement[];
      const options = { threshold: 0.1 };
      let activeId = activeSection;
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeId = `#${entry.target.id}`;
          }
        });
        if (window.scrollY <= 220) {
          activeId = "/"; // Set Home active only when at the top
        }
        setActiveSection(activeId);
      }, options);
      sections.forEach((section) => {
        if (section) observer.observe(section);
      });

      return () => {
        sections.forEach((section) => {
          if (section) observer.unobserve(section);
        });
      };
    };

    handleScroll();
    // eslint-disable-next-line
  }, []);

  return (
    <AppBar position="fixed" sx={{ maxWidth: "100vw" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CardMedia
            image="/logo.svg"
            component={"img"}
            sx={{ display: { xs: "none", md: "flex" }, mr: 1, width: 40 }}
          />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            href=""
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 900,
              color: "inherit",
              textDecoration: "none",
              letterSpacing: "-0.5px",
              textShadow: "1px 1px 2px rgba(0,0,0,0.25)",
              lineHeight: "1em",
              // fontSize: { lg: "4em", md: "3em", sm: "1.3em", xs: "1.25em" },
            }}
          >
            Supakonnect
          </Typography>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.id}
                    onClick={handleCloseNavMenu}
                  >
                    <Button
                      key={page.id}
                      onClick={handleCloseNavMenu}
                      LinkComponent={Link}
                      href={page.id}
                      sx={[
                        (theme) => ({
                          // color: "white",
                          display: "block",
                          ...(page.id === activeSection
                            ? {
                                borderBottom: `2px solid ${theme.vars?.palette.common.white}`,
                              }
                            : {}),
                        }),
                      ]}
                    >
                      {page.name}
                    </Button>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
          <CardMedia
            image="/logo.svg"
            component={"img"}
            sx={{ display: { xs: "block", md: "none" }, mr: 1, width: 20 }}
          />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 800,
              // letterSpacing: ".3rem",
              // letterSpacing: "-0.5px",
              color: "inherit",
              textDecoration: "none",
              fontSize: { lg: "4em", md: "4em", sm: "1.6em", xs: "1.25em" },
            }}
          >
            Supakonnect
          </Typography>
          <Box
            sx={{
              flexGrow: 2,
              justifyContent: "center",
              display: { xs: "none", md: "flex" },
              gap: {lg: 4, md: 1, sm: 0.5, xs: 0.5},
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.id}
                onClick={handleCloseNavMenu}
                LinkComponent={Link}
                href={page.id}
                size="small"
                sx={[
                  (theme) => ({
                    my: 2,
                    color: "white",
                    display: "block",
                    ...(page.id === activeSection
                      ? {
                          borderBottom: `2px solid ${theme.vars?.palette.common.white}`,
                        }
                      : {}),
                  }),
                ]}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              flexGrow: 2,
              justifyContent: "center",
              display: { xs: "none", md: "flex" },
              gap: 4,
            }}
          >
            {social.map((item) => (
                <Tooltip title={item.name} key={item.name}>
              <IconButton
                onClick={handleCloseNavMenu}
                LinkComponent={Link}
                href={item.url}
                target="_blank"
                size="small"
                sx={[
                  (theme) => ({
                    my: 2,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 30,
                    width: 30,
                    borderRadius: "50%",
                    border: `1px solid ${theme.vars?.palette.common.white}`,
                    ['&:hover']: {
                      color: item.name === "Facebook" ? theme.vars?.palette?.info.dark : theme.vars?.palette.info.light,
                      border: `1px solid ${item.name === "Facebook" ? theme.vars?.palette?.info.dark : theme.vars?.palette.info.light}`,
                      transition: "color 1.2s ease-in-out"
                    }
                  }),
                ]}
              >
                {item.icon}
              </IconButton>
              </Tooltip>
            ))}
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              position: "fixed",
              right: 10,
              bottom: 10,
              zIndex: 9999,
            }}
          >
            <IconButton
              sx={[
                (theme) => ({
                  bgcolor: "primary.main",
                  color: "white",
                  ...theme.applyStyles("dark", {
                    bgcolor: theme.vars?.palette.grey[800],
                  }),
                }),
              ]}
              onClick={(ev) =>
                handleThemeChange(ev, mode === "dark" ? "light" : "dark")
              }
              size="medium"
            >
              {mode === "light" ? (
                <LightModeOutlined />
              ) : (
                <DarkModeOutlined />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MainNavbar;
