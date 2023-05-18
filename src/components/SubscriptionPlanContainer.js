import SubscriptionContainer from "./SubscriptionContainer";
import SubscriptionFeeContainer from "../components/SubscriptionFeeContainer";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import "./SubscriptionPlanContainer.css";
import { useState } from "react";

const SubscriptionPlanContainer = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [limitedTimeOffer, setLimitedTimeOffer] = useState(0);
  const [total, setTotal] = useState(0);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    switch (buttonId) {
      case 1:
        setLimitedTimeOffer(18500 - 179);
        setTotal((179 * 18) / 100 + 179);
        break;
      case 2:
        setLimitedTimeOffer(18500 - 149);
        setTotal((149 * 18) / 100 + 149);
        break;
      case 3:
        setLimitedTimeOffer(18500 - 99);
        setTotal((99 * 18) / 100 + 99);
        break;
    }
  };

  return (
    <>
      <div className="input-container">
        <div className="text-field-1">
          <img className="radio-button-icon1" alt="" src="/radio-button.svg" />
          <div className="text-container2">
            <div className="text14">{`12 Months Subscription `}</div>
            <div className="right-text-container">
              <div className="top-text1">
                <div className="text15">Total</div>
                <div className="text16">₹99</div>
              </div>
              <div className="bottom-tet">
                <div className="text17">₹8</div>
                <div className="text18">/mo</div>
              </div>
            </div>
          </div>
          <div className="tag">
            <div className="offer-expired">Offer expired</div>
          </div>
        </div>
        <div
          className={activeButton === 1 ? "text-field-2" : "text-field-3"}
          onClick={() => handleButtonClick(1)}
        >
          {activeButton == 1 ? (
            <img
              className="radio-button-icon1"
              alt=""
              src="/radio-button1.svg"
            />
          ) : (
            <RadioButtonUncheckedIcon className="radio-button-icon1" />
          )}
          <div className="text-container2">
            <div className="text14">{`12 Months Subscription `}</div>
            <div className="right-text-container1">
              <div className="top-text1">
                <div className="text20">Total</div>
                <div className="text16">₹179</div>
              </div>
              <div className="bottom-tet">
                <div className="text17">₹15</div>
                <div className="text23">/mo</div>
              </div>
            </div>
          </div>
          <div className="tag1">
            <div className="recommended">Recommended</div>
          </div>
        </div>
        <SubscriptionContainer
          subscriptionDuration="6 Months Subscription "
          subscriptionPrice="₹149"
          subscriptionDurationPrice="₹25"
          activeButton={activeButton === 2}
          handleButtonClick={handleButtonClick}
          tabId={2}
        />
        <SubscriptionContainer
          subscriptionDuration="3 Months Subscription "
          subscriptionPrice="₹99"
          subscriptionDurationPrice="₹33"
          activeButton={activeButton === 3}
          handleButtonClick={handleButtonClick}
          tabId={3}
        />
      </div>
      <SubscriptionFeeContainer
        limitedTimeOffer={limitedTimeOffer}
        total={total}
      />
    </>
  );
};

export default SubscriptionPlanContainer;
