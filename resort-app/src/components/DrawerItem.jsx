import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ClearIcon from "@material-ui/icons/Clear";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import AirlineSeatFlatIcon from "@material-ui/icons/AirlineSeatFlat";
import CreateIcon from "@material-ui/icons/Create";
import LocationDisabledIcon from "@material-ui/icons/LocationDisabled";
import AssessmentIcon from "@material-ui/icons/Assessment";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import AddBoxIcon from "@material-ui/icons/AddBox";
import "./DrawerItem.css";

function DrawerItem() {
  return (
    <div className="drawerItem">
      <Drawer variant="permanent" open anchor="left" className="body__drawer">
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
      </Drawer>
    </div>
  );
}

export default DrawerItem;
