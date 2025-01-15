import React from "react";
const LoadGovMetric = ({ account }) => {
  // Attach the stylesheet to the head
  const styleSheet = document.createElement("link");
  styleSheet.rel = "stylesheet";
  styleSheet.href =
    "//hull-city-council.github.io/gov-metric-web-component/src/style.css";
  document.head.append(styleSheet);

  // Attach govmetric scripts
  const gmScriptSideBar = document.createElement("script");
  gmScriptSideBar.src = "//websurveys2.govmetric.com/js/client/gm_sidebar.js";
  const gmHitCounter = document.createElement("script");
  gmHitCounter.src = "//hitcounter.govmetric.com/2630";
  document.head.append(gmScriptSideBar, gmHitCounter);
  return (
    <div className="feedback-wrapper">
      <h2 className="site-rating__heading">How would you rate this page?</h2>
      <ul className="feedback__list">
        <li className="list__item_rating page-rating">
          <a
            className="list__link gm_sidebar_anchor"
            title="rate this page as good (opens in a new window)"
            role="button"
            target="_blank"
            rel="nofollow"
            href={
              "https://websurveys2.servmetric.com/theme/gm/" +
              account +
              "?GUID=53323c6e-949d-4bdf-87ad-fcf397e1d1c0&Q_RATINGID=3&pageNo=14810"
            }
          >
            <img
              className="page-rating-smiley page-rating-smiley-good"
              alt="green face"
              src="https://hull-city-council.github.io/gov-metric-web-component/public/smiley-dark-green.svg"
            />
            Good
          </a>
        </li>
        <li className="list__item_rating page-rating">
          <a
            className="list__link gm_sidebar_anchor"
            title="rate this page as average (opens in a new window)"
            role="button"
            target="_blank"
            rel="nofollow"
            href={
              "https://websurveys2.servmetric.com/theme/gm/" +
              account +
              "?GUID=53323c6e-949d-4bdf-87ad-fcf397e1d1c0&Q_RATINGID=2&pageNo=14810"
            }
          >
            <img
              className="page-rating-smiley"
              alt="orange face"
              src="https://hull-city-council.github.io/gov-metric-web-component/public/smiley-orange.svg"
            />
            Average
          </a>
        </li>
        <li className="list__item_rating page-rating">
          <a
            className="list__link gm_sidebar_anchor"
            title="rate this page as poor (opens in a new window)"
            role="button"
            target="_blank"
            rel="nofollow"
            href={
              "https://websurveys2.servmetric.com/theme/gm/" +
              account +
              "?GUID=53323c6e-949d-4bdf-87ad-fcf397e1d1c0&Q_RATINGID=4&pageNo=14810"
            }
          >
            <img
              className="page-rating-smiley"
              alt="red face"
              src="https://hull-city-council.github.io/gov-metric-web-component/public/smiley-dark-red.svg"
            />
            Poor
          </a>
        </li>
      </ul>
    </div>
  );
};
export default LoadGovMetric;
