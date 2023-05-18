import "./SubscriptionContainer.css";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
const SubscriptionContainer = ({
  subscriptionDuration,
  subscriptionPrice,
  subscriptionDurationPrice,
  handleButtonClick,
  tabId,
  activeButton,
}) => {
  const onClickTab = () => {
    handleButtonClick(tabId);
  };

  return (
    <div
      className={activeButton ? "text-field-2" : "text-field-3"}
      onClick={onClickTab}
    >
      {activeButton == 1 ? (
        <img className="radio-button-icon1" alt="" src="/radio-button1.svg" />
      ) : (
        <RadioButtonUncheckedIcon className="radio-button-icon" />
      )}
      <div className="text-container1">
        <div className="text9">{subscriptionDuration}</div>
        <div className="left-text-container">
          <div className="top-text">
            <div className="text10">Total</div>
            <div className="text11">{subscriptionPrice}</div>
          </div>
          <div className="bottom-text">
            <div className="text12">{subscriptionDurationPrice}</div>
            <div className="text13">/mo</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionContainer;
