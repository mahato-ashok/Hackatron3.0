import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import hamburger from "../assets/images/Navbar/Vector.svg";
import "./Navbar.css";

export default function SwipeableTemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  const menuItems = [
    ["SCHEDULE", "schedule"],
    ["ABOUT", "aboutus"],
    ["VENUE", "venue"],
    ["PRIZES", "prizes"],
    ["TRACKS", "tracks"],
    ["SPONSORS", "sponsors"],
    ["FAQ", "faq"],
    ["CONTACT US", "footer"],
  ];

  return (
    <div className="min-[768px]:hidden mt-3">
      
      {/* HAMBURGER BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="p-2 bg-[#080c0a]/80 border border-[#39FF14]/20 active:scale-95 pixel-art"
      >
        <img src={hamburger} className="w-5 h-5 opacity-90" alt="menu" />
      </button>

      {/* DRAWER */}
      <SwipeableDrawer
        anchor="top"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        PaperProps={{
          sx: {
            backgroundColor: "#080c0a",
            borderBottom: "2px solid rgba(57,255,20,0.2)",
          },
        }}
      >
        <Box
          className="relative overflow-hidden font-vt323 text-white"
          sx={{ width: "100%" }}
        >
          <List className="relative z-10 pt-4">

            {/* CLOSE MENU */}
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => setOpen(false)}
                sx={{ justifyContent: "center" }}
              >
                <ListItemText
                  primary="[ X ] CLOSE MENU"
                  primaryTypographyProps={{
                    fontSize: "1.2rem",
                    color: "#ff4d4d",
                    textAlign: "center",
                    fontFamily: "vt323",
                  }}
                />
              </ListItemButton>
            </ListItem>

            {/* NORMAL SCROLL LINKS */}
            {menuItems.map(([label, id]) => (
              <ListItem key={id} disablePadding>
                <ListItemButton
                  onClick={() => scrollToSection(id)}
                  sx={{ textAlign: "center", py: 2 }}
                >
                  <ListItemText
                    primary={label}
                    className="nav-pixel-link"
                    primaryTypographyProps={{
                      fontSize: "1.8rem",
                      letterSpacing: "0.1em",
                      fontFamily: "vt323",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}

            {/* TEAMS EXTERNAL LINK */}
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  window.open("https://www.hnccbits.com/teams#particular-section", "_blank");
                  setOpen(false);
                }}
                sx={{ textAlign: "center", py: 2 }}
              >
                <ListItemText
                  primary="TEAMS"
                  className="nav-pixel-link"
                  primaryTypographyProps={{
                    fontSize: "1.8rem",
                    letterSpacing: "0.1em",
                    fontFamily: "vt323",
                  }}
                />
              </ListItemButton>
            </ListItem>

          </List>
        </Box>
      </SwipeableDrawer>
    </div>
  );
}