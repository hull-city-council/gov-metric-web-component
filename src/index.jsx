import React from "react";
import r2wc from "@r2wc/react-to-web-component";
import LoadGovMetric from "./App";

const govMetricRating = r2wc(LoadGovMetric, { props: { account: "string" } });

// Define and append web component to the main element depending on the theme used
const mainElementsList = document.querySelectorAll("#content, #main");
const mainsArray = [...mainElementsList];
customElements.define("gov-metric-rating", govMetricRating);

mainsArray.forEach((element) => {
  element.append(document.querySelector("gov-metric-rating"));
});
