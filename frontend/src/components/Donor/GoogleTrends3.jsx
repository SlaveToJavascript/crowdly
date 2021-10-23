import React from "react";
import ReactDOM from "react-dom";
import Script from "react-load-script";

export default function GoogleTrends3 ({ type, keyword, url }) {
  const handleScriptLoad = _ => {
    window.trends.embed.renderExploreWidgetTo(
      document.getElementById("content"),
      type,
      {
        comparisonItem: [{ keyword, geo: "NP", time: "today 3-m" }],
        category: 0,
        property: ""
      },
      {
        exploreQuery: `q=${encodeURI(keyword)}&geo=NP&date=today 3-m`,
        guestPath: "https://trends.google.com:443/trends/embed/"
      }
    );
  };

  const renderGoogleTrend = _ => {
    return <Script url={url} onLoad={handleScriptLoad} />;
  };

  return <div>{renderGoogleTrend()}</div>;
}
