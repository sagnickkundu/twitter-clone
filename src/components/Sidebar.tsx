import {
  Twitter,
  Home,
  Search,
  NotificationsNone,
  MailOutline,
  BookmarkBorder,
  ListAlt,
  PermIdentity,
  MoreHoriz,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import LogoutButton from "./logout-button";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <Twitter className="sidebar__twitterIcon" />
      <div className="sidebarOption sidebarOption--active">
        <Home />
        <h2>Home</h2>
      </div>
      <div className="sidebarOption">
        <Search />
        <h2>Explore</h2>
      </div>
      <div className="sidebarOption">
        <NotificationsNone />
        <h2>Notifications</h2>
      </div>
      <div className="sidebarOption">
        <MailOutline />
        <h2>Messages</h2>
      </div>
      <div className="sidebarOption">
        <BookmarkBorder />
        <h2>Bookmarks</h2>
      </div>
      <div className="sidebarOption">
        <ListAlt />
        <h2>Lists</h2>
      </div>
      <div className="sidebarOption">
        <PermIdentity />
        <h2><Link to={"/profile"}>Profile</Link></h2>
      </div>
      <div className="sidebarOption">
        <MoreHoriz />
        <h2>More</h2>
      </div>
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
      <div className="sidebar__logout">
      <LogoutButton/>
      </div>
    </div>
  );
};

export default Sidebar;
