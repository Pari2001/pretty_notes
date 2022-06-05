import React from "react";
import "./style.css";
import { IconButton } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
//import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

const Navbar = () => {
  return (
    <>
      <nav className="navbar pink">
        <div className="container-fluid">
          <div className="navbar-brand flexy">
            <div>
              <IconButton>
                <DescriptionIcon />
                {/* <TipsAndUpdatesIcon /> */}
              </IconButton>
            </div>
            <div>Pretty Notes</div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
