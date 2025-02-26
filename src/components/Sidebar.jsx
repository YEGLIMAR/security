import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography
} from "@mui/material";
import logo from "../assets/ubook.png";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import SecurityIcon from "@mui/icons-material/Security";
export default function Sidebar() {
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const handleToggle = () => {
    setOpenSubMenu(!openSubMenu);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 250,
        flexShrink: 0,
        "& .MuiDrawer-paper": { width: 250, backgroundColor: "#1e3a5f", color: "white" },
      }}
    >
      <List>
        {/* Logo */}
        <ListItem sx={{ justifyContent: "center", padding: "20px" }}>
          <Typography variant="inherit" sx={{ color: "CaptionText", fontWeight: "bold" }}>
            <img src={logo} alt="U-BOOK" width="180" />
          </Typography>
        </ListItem>

        {/* Opción Seguridad */}
        <ListItem disablePadding>
          <ListItemButton onClick={handleToggle}>
            <ListItemIcon sx={{ color: "white" }}> 
              <SecurityIcon />
            </ListItemIcon>
            <ListItemText primary="Seguridad" sx={{ color: "white" }} />
            {openSubMenu ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>

        {/* Submenú de Seguridad */}
        <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton component={Link} to="/security/users" sx={{ pl: 4 }}>
              <ListItemText primary="Usuarios" sx={{ color: "white" }} />
            </ListItemButton>
            <ListItemButton component={Link} to="/security/profiles" sx={{ pl: 4 }}>
              <ListItemText primary="Perfiles" sx={{ color: "white" }} />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
}
