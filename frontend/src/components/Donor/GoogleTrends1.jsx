import React from "react";
import ReactDOM from "react-dom";
import Script from "react-load-script";

export default function GoogleTrends1 ({ type, keyword, url }) {
  const handleScriptLoad = _ => {
    window.trends.embed.renderExploreWidgetTo(
      document.getElementById("widget"),
      type,
      {
        comparisonItem: [{ keyword, geo: "MM", time: "today 3-m" }],
        category: 0,
        property: ""
      },
      {
        exploreQuery: `q=${encodeURI(keyword)}&geo=MM&date=today 3-m`,
        guestPath: "https://trends.google.com:443/trends/embed/"
      }
    );
  };

  const renderGoogleTrend = _ => {
    return <Script url={url} onLoad={handleScriptLoad} />;
  };

  return <div>{renderGoogleTrend()}</div>;
}
