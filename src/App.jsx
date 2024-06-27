const LoadGovMetric = ({ account }) => {
  //Attach the stylesheet to the head
  const styleSheet = document.createElement("link");
  styleSheet.rel = "stylesheet";
  styleSheet.href =
    "https://hull-city-council.github.io/gov-metric-web-component/src/style.css";
  document.head.append(styleSheet);
  return (
    <div class="feedback-wrapper">
      <h2 class="site-footer__text">How would you rate this page?</h2>
      <ul class="list list--inline">
        <li class="list__item page-rating">
          <a
            class="list__link gm_sidebar_anchor"
            title="rate this page as good"
            role="button"
            target="_blank"
            rel="nofollow"
            href="https://websurveys.govmetric.com/theme/sm/2629?Q_RATINGID=3"
          >
            <img
              class="page-rating-smiley page-rating-smiley-good"
              alt="green smiley face"
              src="https://hull-city-council.github.io/gov-metric-web-component/public/smiley-dark-green.svg"
            />
            Good
          </a>
        </li>
        <li class="list__item page-rating">
          <a
            class="list__link gm_sidebar_anchor"
            title="rate this page as average"
            role="button"
            target="_blank"
            rel="nofollow"
            href="https://websurveys.govmetric.com/theme/sm/2629?Q_RATINGID=2"
          >
            <img
              class="page-rating-smiley"
              alt="green orange face"
              src="https://hull-city-council.github.io/gov-metric-web-component/public/smiley-orange.svg"
            />
            Average
          </a>
        </li>
        <li class="list__item page-rating">
          <a
            class="list__link gm_sidebar_anchor"
            title="rate this page as poor"
            role="button"
            target="_blank"
            rel="nofollow"
            href="https://websurveys.govmetric.com/theme/sm/2629?Q_RATINGID=4"
          >
            <img
              class="page-rating-smiley"
              alt="green red face"
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
