import React, { useState } from "react"
import Logo from "../assets/Logo.png"
// import { HiOutlineBars3 } from "react-icons/hi2"
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";
// import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
// import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const Navbar = () => {
//     const [openMenu, setOpenMenu] = useState(false);
//   const menuOptions = [
//     {
//       text: "About Us",
//       icon: <HomeIcon />,
//     },
//     {
//       text: "Our Approach",
//       icon: <InfoIcon />,
//     },
//     {
//       text: "News",
//       icon: <CommentRoundedIcon />,
//     },
//     {
//       text: "Get Involved",
//       icon: <PhoneRoundedIcon />,
//     },
//   ]

    return (
        <nav>
        <div className="nav-entire-container">
        <div className="nav-logo-container">
        <img src={Logo} alt='PHIG Logo' />
        </div>
        <div className="navbar-links-container">
        <div className="navlinks-excluding-button">
          <a href="">About Us</a>
          <a href="">Our Approach</a>
          <a href="">News</a>
          <a href="">Get Involved</a>
          </div>
          <button className="primary-button">Donate</button>
        </div>
        </div>
        {/* <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Box>
        </Drawer> */}
      </nav>
  )
}

export default Navbar