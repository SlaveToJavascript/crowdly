
import React from "react";
import GoogleTrends1 from "./GoogleTrends1";
// import "./styles.css";

export default function GoogleTrend1() {
  return (
    <>
  
      <div id="widget">
        <GoogleTrends1
          type="TIMESERIES"
          keyword="protest"
          url="https://ssl.gstatic.com/trends_nrtr/2051_RC11/embed_loader.js"
        />
        <GoogleTrends1
          type="GEO_MAP"
          keyword="protest"
          url="https://ssl.gstatic.com/trends_nrtr/2051_RC11/embed_loader.js"
          />
      </div>
    </>
  );
}


