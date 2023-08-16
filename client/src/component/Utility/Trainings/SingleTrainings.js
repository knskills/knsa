import React, { useEffect, useState } from "react";
import PaymentCards from "../PaymentCards";
import { Link, useParams } from "react-router-dom";
import { BASE_URL } from "../../helper/helper";
import axios from "axios";
import VideoDuration from "./VideoDuration";

const SingleTrainings = () => {
  const params = useParams();
  const [refresh, setRefresh] = useState(false);
  const [siTrainingsData, setSiTrainingsData] = useState("");
  console.log("siTrainingsData", siTrainingsData);

  useEffect(() => {
    const id = params.id;
    axios
      .get(`${BASE_URL}/api/getsingle-trainings/${id}`)
      .then((res) => {
        console.log("single-res-trainings", res.data.data);
        setSiTrainingsData(res.data.data);
      })
      .catch((err) => {
        console.log("geterr", err);
      });

    setRefresh(!refresh);
    // eslint-disable-next-line
  }, []);

  // handle admin tag
  const [handleAdminTag, setHandleAdminTag] = useState(1);
  const handleAdmin = (e) => {
    setHandleAdminTag(e);
  };

  return (
    <>
      <div className="training-data-container">
        <div className="single-trainings-flex">
          <div className="trainers-nav-list">
            <Link className="single-home" to="/">
              Home
            </Link>
            <i className="fa-solid fa-grip-lines-vertical"></i>
            <p className="single-name">{siTrainingsData.trainFields}</p>
          </div>

          <div className="single-trng-top d-flex">
            <div className="single-trng-left">
              <div className="s-trainings-top-header">
                <h2>{siTrainingsData.trainHead}</h2>
              </div>

              <div className="s-trainings-bottom-header">
                <p>
                  <i className="fa-solid fa-check"></i>
                  {siTrainingsData.trainOpin}
                </p>
                <p>
                  <i className="fa-solid fa-check"></i>
                  {siTrainingsData.trainPurpose}
                </p>
                <p>
                  <i className="fa-solid fa-check"></i>
                  {siTrainingsData.trainAbout}
                </p>
              </div>

              <div className="s-trng-bgr-sql d-flex">
                <div className="s-trng-bgr-sql-left d-flex">
                  <p title="Language">{siTrainingsData.trainLang}</p>
                  <p title="Features">{siTrainingsData.trainStage}</p>
                  <p>{siTrainingsData.trainCert ? "FREE CERTIFICATE" : ""}</p>
                </div>

                <div className="s-trng-bgr-sql-right d-flex">
                  <p title="Ratings">{siTrainingsData.trainRating}</p>
                  <p>4 Chapters</p>
                  <p className="d-flex">
                    Total Duration : &nbsp;
                    <VideoDuration siTrainingsData={siTrainingsData} />
                  </p>
                </div>
              </div>

              <div className="strng-update-left d-flex">
                <p>Last Updated : {siTrainingsData.date}</p> |
                <p>Created By : {siTrainingsData.trainer}</p>
              </div>
            </div>

            <div className="single-trng-right">
              <img
                src={`${BASE_URL}/${siTrainingsData.trainThumb}`}
                alt={siTrainingsData.trainFields}
              />
            </div>
          </div>
        </div>

        <hr />
        <div className="t-data-flex d-flex justify-content-space-evenly">
          <div className="training-data-details">
            {/* nav button */}
            <div className="single-trng-index">
              <ul className="d-flex">
                <li onClick={() => handleAdmin(1)}>Benefits</li> |
                <li onClick={() => handleAdmin(2)}>Program </li> |
                <li onClick={() => handleAdmin(3)}>Associability</li> |
                <li onClick={() => handleAdmin(4)}>Opinion from Trainer</li> |
                <li onClick={() => handleAdmin(5)}>Description</li> |
                <li onClick={() => handleAdmin(6)}>Feedback</li> |
                <li onClick={() => handleAdmin(7)}>Review</li> |
                <li onClick={() => handleAdmin(8)}>Trainer</li>
              </ul>
            </div>

            {/* 1 */}
            {handleAdminTag === 1 && (
              <div className="benifits-opinion">
                <h3>Motives of this Trainings are :</h3>
                <div className="sequal-benifits">
                  {siTrainingsData.trainPurpose}
                </div>
              </div>
            )}

            {/* 2 */}
            {handleAdminTag === 2 && (
              <div className="benifits-opinion">
                <h3>Programs </h3>
                <div className="sequal-benifits d-flex">
                  <p>Last Updated : {siTrainingsData.date}</p> |
                  <p>Created By : {siTrainingsData.trainer}</p>
                </div>

                <div className="trainings-details">
                  <p>Pre Introduction of Trainings</p>
                </div>
              </div>
            )}

            {/* 3 */}
            {handleAdminTag === 3 && (
              <div className="benifits-opinion">
                <h3>More Associability :</h3>
                <div className="sequal-benifits">
                  <p className="d-flex">
                    <i class="fa-solid fa-video"></i> &nbsp;
                    <VideoDuration siTrainingsData={siTrainingsData} />
                  </p>
                  <p>
                    <i className="fa-solid fa-trophy"></i> Earn Free
                    Certificate.
                  </p>
                </div>
              </div>
            )}

            {/* 4 */}
            {handleAdminTag === 4 && (
              <div className="benifits-opinion">
                <h3>Opinion From Trainers :</h3>
                <div className="sequal-benifits">
                  {siTrainingsData.trainOpin}
                </div>
              </div>
            )}

            {/* 5 */}
            {handleAdminTag === 5 && (
              <div className="benifits-opinion">
                <h3>Description</h3>
                <div className="sequal-benifits">
                  {siTrainingsData.trainDesc}
                </div>
              </div>
            )}

            {/* 6 */}
            {handleAdminTag === 6 && (
              <div className="benifits-opinion">
                <h3>Trainers Feedback</h3>
                <div className="sequal-benifits">
                  {siTrainingsData.trainRating}
                </div>
              </div>
            )}

            {/* 7 */}
            {handleAdminTag === 7 && (
              <div className="benifits-opinion">
                <h3>Review</h3>
                <div className="sequal-benifits">
                  {siTrainingsData.trainFeedback}
                </div>
              </div>
            )}

            {/* 8 */}
            {handleAdminTag === 8 && (
              <div className="benifits-opinion">
                <h3>Trainer</h3>
                <div className="sequal-benifits">
                  {siTrainingsData.trainer}
                  {/* images */}
                </div>
              </div>
            )}
          </div>

          {/* Payment-card sectoin */}
          <div className="payment-card-details">
            <PaymentCards
              element={<VideoDuration siTrainingsData={siTrainingsData} />}
              siTrainingsData={siTrainingsData}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTrainings;
