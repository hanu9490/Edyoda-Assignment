import "./SubscriptionFeeContainer.css";
const SubscriptionFeeContainer = ({ limitedTimeOffer, total }) => {
  return (
    <div className="summary-container">
      <div className="alert-header">
        <div className="left-text">Subscription Fee</div>
        <div className="text25">₹18,500</div>
      </div>
      <div className="alert3">
        <div className="alert-header">
          <div className="text26">Limited time offer</div>
          <div className="text27">- ₹{limitedTimeOffer}</div>
        </div>
        <div className="alert-body">
          <img className="icon-clock1" alt="" src="/icon-clock1.svg" />
          <div className="left-text">{`Offer valid till 25th March 2023 `}</div>
        </div>
      </div>
      <div className="alert-header">
        <div className="left-text">
          <span className="total">{`Total `}</span>
          <span>(Incl. of 18% GST)</span>
        </div>
        <b className="right-text">₹{total}</b>
      </div>
    </div>
  );
};

export default SubscriptionFeeContainer;
