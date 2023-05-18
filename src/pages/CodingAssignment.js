import Header from "../components/Header";
import SubscriptionPlanContainer from "../components/SubscriptionPlanContainer";
import ContainerLockup from "../components/ContainerLockup";
import "./CodingAssignment.css";
const CodingAssignment = () => {
  return (
    <div className="coding-assignment">
      <Header />
      <main className="content-container">
        <img className="back-ground-icon1" alt="" src="/back-ground@2x.png" />
        <div className="form">
          <div className="progress-bar">
            <div className="stage-1">
              <div className="icon-1">
                <div className="div">1</div>
              </div>
              <div className="text-11">Sign Up</div>
            </div>
            <div className="stage-1">
              <div className="icon-1">
                <div className="div">2</div>
              </div>
              <div className="text-11">Subscribe</div>
            </div>
          </div>
          <div className="form-header">
            <div className="text4">Select your subcription plan</div>
          </div>
          <SubscriptionPlanContainer />
          <div className="button-container">
            <div className="secondary-button">
              <b className="text5">cancel</b>
            </div>
            <div className="primary-button">
              <b className="text5">proceed to pay</b>
            </div>
          </div>
          <div className="icon-container">
            <div className="razorpay-icon1">
              <img
                className="razorpay-icon-item"
                alt=""
                src="/frame-125371@2x.png"
              />
            </div>
          </div>
        </div>
        <ContainerLockup />
      </main>
    </div>
  );
};

export default CodingAssignment;
