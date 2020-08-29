import React from "react";
import "../header/header.css";
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from "@material-ui/core/Avatar";

export default function Home() {
  return (
    <div className="header">
      <img
        className="header_icon"
        src={"https://firebasestorage.googleapis.com/v0/b/airbnb-61db1.appspot.com/o/airbnblogo.png?alt=media&token=5bd4b036-dca3-472e-85c1-9d540123fc09"}
        alt="logo"/>

      <div className="header_center">
        <input type="text"/>
        <SearchIcon/>
      </div>

      <div className="header_right">
        <p>Be a host</p>
        <Avatar/>
        <LanguageIcon/>
        <ExpandMoreIcon/>
      </div>
    </div>
  )
}
