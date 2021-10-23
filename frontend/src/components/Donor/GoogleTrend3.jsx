import React from "react";
import GoogleTrends3 from "./GoogleTrends3";
// import "./styles.css";

export default function GoogleTrend2() {
  return (
    <>
  
      <div id="content">
        <GoogleTrends3
          type="TIMESERIES"
          keyword="women education"
          url="https://ssl.gstatic.com/trends_nrtr/2051_RC11/embed_loader.js"
        />
        <GoogleTrends3
          type="GEO_MAP"
          keyword="women education"
          url="https://ssl.gstatic.com/trends_nrtr/2051_RC11/embed_loader.js"
          />
      </div>
    </>
  );
}
