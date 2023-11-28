import './LoadingPill.css'
const LoadingPill = () => {
  return (
    <div class="absCenter ">
      <div class="loaderPill">
        <div class="loaderPill-anim">
          <div class="loaderPill-anim-bounce">
            <div class="loaderPill-anim-flop">
              <div class="loaderPill-pill"></div>
            </div>
          </div>
        </div>
        <div class="loaderPill-floor">
          <div class="loaderPill-floor-shadow"></div>
        </div>
        <div class="loaderPill-text">Loading your RX</div>
      </div>
    </div>
  );
};

export default LoadingPill
