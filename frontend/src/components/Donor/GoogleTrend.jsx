import React from "react";
import GoogleTrends from "./GoogleTrends";
// import "./styles.css";

export default function GoogleTrend() {
  return (
    <>

      <div id="widget">
        <GoogleTrends
          type="TIMESERIES"
          keyword="Farmers"
          url="https://ssl.gstatic.com/trends_nrtr/2051_RC11/embed_loader.js"
        />
        <GoogleTrends
          type="GEO_MAP"
          keyword="Farmers"
          url="https://ssl.gstatic.com/trends_nrtr/2051_RC11/embed_loader.js"
        />
      </div>
    </>
  );
}
