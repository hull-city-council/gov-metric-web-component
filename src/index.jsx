import React from "react";
import r2wc from "@r2wc/react-to-web-component";
import LoadGovMetric from "./App";

const govMetricRating = r2wc(LoadGovMetric, { props: { account: "string" } });

// Attach the stylesheet to the head
const styleSheet = document.createElement("link");
styleSheet.rel = "stylesheet";
styleSheet.href =
  "https://hull-city-council.github.io/gov-metric-web-component/build/static/js/main.css";
document.head.append(styleSheet);
// Define and append web component to the main element
customElements.define("gov-metric-rating", govMetricRating);
document
  .getElementById("main")
  .append(document.querySelector("gov-metric-rating"));
