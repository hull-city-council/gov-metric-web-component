const LoadGovMetric = ({ account }) => {
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
              class="page-rating-smiley"
              alt="green smiley face"
              src="/smiley-dark-green.svg?1.13.5"
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
              src="/smiley-orange.svg?1.13.5"
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
              src="/smiley-dark-red.svg?1.13.5"
            />
            Poor
          </a>
        </li>
      </ul>
    </div>
  );
};
export default LoadGovMetric;
