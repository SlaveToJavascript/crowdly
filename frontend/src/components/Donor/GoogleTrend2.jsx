import React from "react";
import GoogleTrends2 from "./GoogleTrends2";
// import "./styles.css";

export default function GoogleTrend2() {
  return (
    <>
  
      <div id="data">
        <GoogleTrends2
          type="TIMESERIES"
          keyword="beach"
          url="https://ssl.gstatic.com/trends_nrtr/2051_RC11/embed_loader.js"
        />
        <GoogleTrends2
          type="GEO_MAP"
          keyword="beach"
          url="https://ssl.gstatic.com/trends_nrtr/2051_RC11/embed_loader.js"
          />
      </div>
    </>
  );
}
