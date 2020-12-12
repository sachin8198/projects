import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import AirlineSeatFlatIcon from "@material-ui/icons/AirlineSeatFlat";
import CreateIcon from "@material-ui/icons/Create";
import LocationDisabledIcon from "@material-ui/icons/LocationDisabled";
import AssessmentIcon from "@material-ui/icons/Assessment";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import AddBoxIcon from "@material-ui/icons/AddBox";
import Header from "./Header";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <div className="body__logo">
        <h1>LOGO</h1>
      </div>
      <h2 className="body__tool">
        <BorderColorIcon />
        Tools
      </h2>

      <List>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon className="body__icons" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccessibilityIcon className="body__icons" />
          </ListItemIcon>
          <ListItemText primary="Mentorship" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <WbIncandescentIcon className="body__icons" />
          </ListItemIcon>
          <ListItemText primary="Doubt Resolver" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AirlineSeatFlatIcon className="body__icons" />
          </ListItemIcon>
          <ListItemText primary="Remedy" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <CreateIcon className="body__icons" />
          </ListItemIcon>
          <ListItemText primary="Assignment Creator" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LocationDisabledIcon className="body__icons" />
          </ListItemIcon>
          <ListItemText primary="Tracking Tool" />
        </ListItem>
        <ListItem button className="backlog__remover">
          <ListItemIcon>
            <AssessmentIcon className="body__icons backlog__remover" />
          </ListItemIcon>
          <ListItemText primary="Backlog Remover" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LocalLibraryIcon className="body__icons" />
          </ListItemIcon>
          <ListItemText primary="Material Sorter" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AddBoxIcon className="body__icons" />
          </ListItemIcon>
          <ListItemText primary="Test Creator" />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        // className={classes.appBar}
        style={{ background: "white" }}
      >
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            // edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <Header />
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
