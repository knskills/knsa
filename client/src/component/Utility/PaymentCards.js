// here i'll make the payment cards page
import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BASE_URL } from "../helper/helper";
import VideoDuration from "./Trainings/VideoDuration";

const PaymentCards = ({ siTrainingsData, element }) => {
  return (
    <>
      <div className="card-payment-container">
        <div className="card-pe-flex flex-direct-col d-flex align-i-center justify-content-center">
          {/* Video-flex */}
          <div className="train-video-flex">
            <video
              src={`${BASE_URL}/${siTrainingsData.trainIntroVid}`}
              type="video/mp4"
              controls
            />
          </div>

          {/* Payment-Flex */}
          <div className="payment-flex-col">
            <div className="add-wishilist">
              <i className="fa-sharp fa-solid fa-heart"></i>
            </div>
            <div className="coup-card">
              <b>Extra Offer For You</b>
              <p>Code Applied : KNA_2023</p>
            </div>
            <div className="pay-btn-flex">
              <div className="amount-pay-card">
                <b>
                  <FaRupeeSign /> <p>{siTrainingsData.trainSrp}</p>
                </b>

                <p>(+ GST)</p>
              </div>

              <div className="mrp-card">
                <p>
                  <FaRupeeSign /> {siTrainingsData.trainMrp}
                </p>
              </div>

              <div className="buy-btn-card">
                <Link
                  to="/admin/admin-login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy Now
                </Link>

                <Link
                  to="/admin/admin-login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Add to Cart
                </Link>
              </div>

              <div className="course-about-card">
                <b>Achieve More with - KNA</b>
                <div className="dur-cert">
                  <p className="video-dur">
                    <i className="fa-solid fa-video"></i>
                    Duration :{element}
                  </p>
                  <p>
                    <i className="fa-solid fa-tv"></i> Tutorial : 4 Chapter
                  </p>
                  <p>
                    <i className="fa-solid fa-certificate"></i>Certificate :
                    Free
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentCards;
