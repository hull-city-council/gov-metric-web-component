import r2wc from "@r2wc/react-to-web-component";
import LoadGovMetric from "./App";

const govMetricRating = r2wc(LoadGovMetric, { props: { account: "string" } });
customElements.define("gov-metric-rating", govMetricRating);
document
  .getElementsById("main")
  .append(document.querySelector("gov-metric-rating"));
