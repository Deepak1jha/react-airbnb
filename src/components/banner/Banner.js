import React from "react";
import "../banner/banner.css";
import Button from "@material-ui/core/Button";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner_info">
        <h1>Banner quote</h1>
        <h5>Banner quote put her and dexription</h5>
        <Button
          variant={"outlined"}>Explore Nearby Hotels</Button>
      </div>
    </div>
  )
}
