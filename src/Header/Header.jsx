import React from "react";

import { Box, Typography, AppBar, Toolbar, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete } from "@react-google-maps/api";
import useStyles from "./styles.js";

function Header() {
  const { classes } = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div>
        </Box>
      </Toolbar>
    </AppBar>
    // <AppBar position="static">
    //   <Toolbar className={classes.toolbar}>
    //     <Typography variant="h5" className={classes.title}>
    //       travel advisor
    //     </Typography>
    //     <Box display="flex">
    //       <Typography variant="h6" className={classes.title}>
    //         explor new places
    //       </Typography>
    //       {/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}> */}
    //       <div className={classes.search}>
    //         <div className={classes.searchIcon}>
    //           <SearchIcon />
    //         </div>
    //         <InputBase
    //           placeholder="Search…"
    //           classes={{ root: classes.inputRoot, input: classes.inputInput }}
    //         />
    //       </div>
    //       {/* </Autocomplete> */}
    //     </Box>
    //   </Toolbar>
    // </AppBar>
  );
}

export default Header;
