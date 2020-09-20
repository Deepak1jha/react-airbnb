import React, {useState} from "react";
import "../banner/banner.css";
import Button from "@material-ui/core/Button";
import Search from "../search/Search";
import {Link} from "react-router-dom";

export default function Banner({prop}) {
  console.log("bannnnneeeerrrr")
  console.log(prop)
  console.log("banner")
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <Search/>}
        <Button
          className="banner_searchButton"
          variant={"outlined"}
          onClick={() => {
            setShowSearch(!showSearch)
          }}
        >{showSearch ? "Hide" : "Search Date"}</Button>
      </div>
      <div className="banner_info">
        <h1>Banner quote</h1>
        <h5>Banner quote put her and description</h5>
        <Button
          onClick={() => {
            prop.history.push("/search")
            console.log(prop)
          }}
          variant={"outlined"}
        >Explore Nearby Hotels</Button>
      </div>
    </div>
  )
}
