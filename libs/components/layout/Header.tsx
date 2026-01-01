import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Language as LanguageIcon,
  Person as PersonIcon,
} from "@mui/icons-material";

import { useUser } from "@/apollo/store";
import { logout } from "@/libs/auth";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  {
    name: "Tours",
    path: "/tours",
    submenu: [
      { name: "All Tours", path: "/tours" },
      { name: "Destinations", path: "/destinations" },
      { name: "Travel Packages", path: "/packages" },
    ],
  },
  {
    name: "Pages",
    path: "#",
    submenu: [
      { name: "Gallery", path: "/gallery" },
      { name: "Tour Guides", path: "/guides" },
      { name: "Testimonials", path: "/testimonials" },
      { name: "Careers", path: "/careers" },
    ],
  },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Header: React.FC = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const user = useUser();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [languageAnchor, setLanguageAnchor] = useState<null | HTMLElement>(
    null
  );
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleUserMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageOpen = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageAnchor(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setLanguageAnchor(null);
  };

  const changeLanguage = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale });
    handleLanguageClose();
  };

  const handleLogout = () => {
    logout();
    handleUserMenuClose();
  };

  return (
    <header className={`header${isScrolled ? " header--scrolled" : ""}`}>
      {" "}
      {/* BEM */}
      <div className="header__container">
        {/* Logo */}
        <Link href="/" className="header__logo">
          <span>
            Bavro<span className="header__logoDot">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="header__nav">
          {navLinks.map((link) => (
            <div
              className="header__navItem"
              key={link.name}
              onMouseEnter={() => setActiveSubmenu(link.name)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <Link href={link.path} className="header__navLink">
                {link.name}
              </Link>
              {link.submenu && activeSubmenu === link.name && (
                <div className="header__submenu">
                  {link.submenu.map((sub) => (
                    <Link
                      href={sub.path}
                      className="header__submenuLink"
                      key={sub.name}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="header__actions">
          {/* Language Selector */}
          <IconButton className="header__langBtn" onClick={handleLanguageOpen}>
            <LanguageIcon />
          </IconButton>
          <Menu
            anchorEl={languageAnchor}
            open={Boolean(languageAnchor)}
            onClose={handleLanguageClose}
            className="header__langMenu"
          >
            <MenuItem onClick={() => changeLanguage("en")}>English</MenuItem>
            <MenuItem onClick={() => changeLanguage("kr")}>한국어</MenuItem>
            <MenuItem onClick={() => changeLanguage("ru")}>Русский</MenuItem>
          </Menu>

          {/* User Menu */}
          {user.isLoggedIn ? (
            <>
              <IconButton
                className="header__userBtn"
                onClick={handleUserMenuOpen}
              >
                <PersonIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleUserMenuClose}
                className="header__userMenu"
              >
                <MenuItem
                  onClick={() => {
                    router.push("/profile");
                    handleUserMenuClose();
                  }}
                >
                  Profile
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    router.push("/bookings");
                    handleUserMenuClose();
                  }}
                >
                  My Bookings
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <Button
              variant="contained"
              color="primary"
              className="header__bookBtn"
              onClick={() => router.push("/login")}
            >
              Book Now
            </Button>
          )}

          {/* Mobile Menu Toggle */}
          <IconButton
            className="header__menuBtn"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </div>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          className="header__drawer"
        >
          <div className="header__drawerContent">
            <div className="header__drawerTop">
              <span className="header__logo">
                Bavro<span className="header__logoDot">.</span>
              </span>
              <IconButton
                onClick={handleDrawerToggle}
                className="header__drawerClose"
              >
                <CloseIcon />
              </IconButton>
            </div>
            <List>
              {navLinks.map((link) => (
                <React.Fragment key={link.name}>
                  <ListItem
                    component={Link}
                    href={link.path}
                    onClick={handleDrawerToggle}
                    className="header__drawerNavItem"
                  >
                    <ListItemText primary={link.name} />
                  </ListItem>
                  {link.submenu?.map((sub) => (
                    <ListItem
                      key={sub.name}
                      component={Link}
                      href={sub.path}
                      onClick={handleDrawerToggle}
                      className="header__drawerSubNavItem"
                    >
                      <ListItemText primary={sub.name} />
                    </ListItem>
                  ))}
                </React.Fragment>
              ))}
            </List>
            {!user.isLoggedIn && (
              <Button
                variant="contained"
                color="primary"
                fullWidth
                className="header__drawerBookBtn"
                onClick={() => {
                  router.push("/login");
                  handleDrawerToggle();
                }}
              >
                Book Now
              </Button>
            )}
          </div>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
