import React, {useState} from "react";
import "../banner/banner.css";
import Button from "@material-ui/core/Button";
import Search from "../search/Search";

export default function Banner() {
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
        <h5>Banner quote put her and dexription</h5>
        <Button
          variant={"outlined"}>Explore Nearby Hotels</Button>
      </div>
    </div>
  )
}
