import React from "react";
import r2wc from "@r2wc/react-to-web-component";
import LoadGovMetric from "./App";
import "./style.css";

const govMetricRating = r2wc(LoadGovMetric, { props: { account: "string" } });

// Attach the stylesheet to the head
const styleSheet = document.createElement("link");
styleSheet.rel = "stylesheet";
styleSheet.href = "style.css";
document.head.append(styleSheet);
// Define and append web component to the main element
customElements.define("gov-metric-rating", govMetricRating);
document
  .getElementById("main")
  .append(document.querySelector("gov-metric-rating"));
