// getEdit card section or page
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../helper/helper";
import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const UpddateCardData = () => {
  // const navigate = useNavigate();

  const [trainFields, setTrainFields] = useState("");
  const [trainHead, setTrainHead] = useState("");
  const [trainLang, setTrainLang] = useState("");
  const [trainer, setTrainer] = useState("");
  const [trainOpin, setTrainOpin] = useState("");
  const [trainDesc, setTrainDesc] = useState("");
  const [trainFeedback, setTrainFeedback] = useState("");
  const [trainAbout, setTrainAbout] = useState("");
  const [trainStage, setTrainStage] = useState("");
  const [trainRating, setTrainRating] = useState("");
  const [trainCert, setTrainCert] = useState("");
  const [trainThumb, setTrainThumb] = useState("");
  const [trainAllVideo, setTrainAllVideo] = useState([]);
  const [trainMrp, setTrainMrp] = useState("");
  const [trainSrp, setTrainSrp] = useState("");
  const [trainPurpose, setTrainPurpose] = useState("");
  const [trainIntroVid, setTrainIntroVid] = useState("");
  const [pageRefreshStatus, setPageRefreshStatus] = useState(false);
  const params = useParams();

  const viewdata = () => {
    try {
      const id = params.id;
      axios.get(`${BASE_URL}/api/get-products-edit/${id}`).then((res) => {
        const resPonse = res.data.data;
        console.log("get page success for edit", resPonse, 33);
        setTrainFields(resPonse.trainFields);
        setTrainHead(resPonse.trainHead);
        setTrainLang(resPonse.trainLang);
        setTrainer(resPonse.trainer);
        setTrainOpin(resPonse.trainOpin);
        setTrainDesc(resPonse.trainDesc);
        setTrainFeedback(resPonse.trainFeedback);
        setTrainAbout(resPonse.trainAbout);
        setTrainStage(resPonse.trainStage);
        setTrainRating(resPonse.trainRating);
        setTrainCert(resPonse.trainCert);
        setTrainThumb(resPonse.trainThumb);
        setTrainAllVideo(resPonse.trainAllVideo);
        setTrainMrp(resPonse.trainMrp);
        setTrainSrp(resPonse.trainSrp);
        setTrainPurpose(resPonse.trainPurpose);
        setTrainIntroVid(resPonse.trainIntroVid);
      });
    } catch (err) {
      alert("get edit page error");
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("trainFields", trainFields);
    formData.append("trainHead", trainHead);
    formData.append("trainLang", trainLang);
    formData.append("trainer", trainer);
    formData.append("trainOpin", trainOpin);
    formData.append("trainDesc", trainDesc);
    formData.append("trainFeedback", trainFeedback);
    formData.append("trainAbout", trainAbout);
    formData.append("trainStage", trainStage);
    formData.append("trainRating", trainRating);
    formData.append("trainCert", trainCert);
    formData.append("trainThumb", trainThumb);

    for (let index = 0; index < trainAllVideo.length; index++) {
      formData.append("trainAllVideo", trainAllVideo[index]);
    }

    formData.append("trainMrp", trainMrp);
    formData.append("trainSrp", trainSrp);
    formData.append("trainPurpose", trainPurpose);
    formData.append("trainIntroVid", trainIntroVid);

    console.log("formData", formData);

    const inputData = {
      id: params.id,
    };

    console.log("handleUpdate");

    // THIS URL FOR OUTPUT AFTER ADD PRODUCT DATA, AXIOS FUNCTION RUN WHEN CLICK USER ON UPDATE BUTTON after change and set on output file, End Tutorials, Now i'll go "GetProduct.js" file with point 11
    const _id = params.id;
    axios
      .post(`${BASE_URL}/api/edit-product/${_id}`, formData, inputData)
      .then((res) => {
        // console.log("product updated success", res);
        alert("Product updated success");
        // props.showAlert("Product Updated Successfully", "success");
      })
      .catch((error) => {
        alert("product not updated getting error");
      });
  };

  useEffect(() => {
    viewdata();
    // eslint-disable-next-line
  }, [pageRefreshStatus]);

  return (
    <>
      <div className="trainingData-container">
        <div className="training-form">
          <div className="training-flex-card">
            <b>Start Your Business With - KN_ACADEMY </b>
            <form>
              {/*1. training-from */}
              <div className="training-form-outline d-flex d-flex">
                {/* 1. */}
                <div className="left-form-outline d-flex">
                  {/*1. Training-name- field */}
                  <div className="training-form-group">
                    {/* <label htmlFor="trainingname">Training Fields</label>
                    <input
                      value={trainFields}
                      onChange={(e) => setTrainFields(e.target.value)}
                      type="text"
                      className="training-form-control training-Fields"
                      id="trainingname"
                      name="trainingname"
                      placeholder="Which Fields Want to training "
                      autoComplete="trainingname"
                    /> */}

                    <label htmlFor="trainingstage">Training Fields</label>
                    <select
                      value={trainFields}
                      onChange={(e) => setTrainFields(e.target.value)}
                      name="trainingstage"
                      id="trainingstage"
                    >
                      <option defaultValue="Select">Select</option>
                      <option value="Network Marketing">
                        Network Marketing
                      </option>
                      <option value="Motivational Talks">
                        Motivational Talks
                      </option>
                      <option value="Leadership Skills">
                        Leadership Skills
                      </option>
                      <option value="People Skills">People Skills</option>
                      <option value="Selling Skills">Selling Skills</option>
                      <option value="Public Skills">Public Skills</option>
                    </select>
                  </div>

                  {/*2. Training Heading */}
                  <div className="training-form-group">
                    <label htmlFor="traininghead">Training Heading</label>
                    <input
                      value={trainHead}
                      onChange={(e) => setTrainHead(e.target.value)}
                      type="text"
                      className="training-form-control training-heading"
                      id="traininghead"
                      name="traininghead"
                      placeholder="Your Trainig Headings"
                      autoComplete="traininghead"
                    />
                  </div>
                </div>

                {/* 2. */}
                <div className="right-form-outline d-flex">
                  {/*4. Training Heading */}
                  <div className="training-form-group">
                    <label htmlFor="trainingmode">Language Mode</label>
                    <input
                      value={trainLang}
                      onChange={(e) => setTrainLang(e.target.value)}
                      type="text"
                      className="training-form-control language-mode"
                      id="trainingmode"
                      name="trainingmode"
                      placeholder="Trainig Language Mode"
                      autoComplete="trainingmode"
                    />
                  </div>

                  {/*9. trainer */}
                  <div className="training-form-group">
                    <label htmlFor="trainer">Training By :</label>
                    <input
                      value={trainer}
                      onChange={(e) => setTrainer(e.target.value)}
                      type="text"
                      className="training-form-control trainer"
                      id="trainer"
                      name="trainer"
                      placeholder="Trainer full Name without title eg. Mr/Miss etc."
                    />
                  </div>
                </div>
              </div>

              {/*2. training-from */}
              <div className="training-form-outline d-flex d-flex">
                {/* 7. */}
                <div className="left-form-outline d-flex">
                  {/*13. Program */}
                  <div className="training-form-group">
                    <label htmlFor="trainropn">Trainer Opinion</label>
                    <textarea
                      value={trainOpin}
                      onChange={(e) => setTrainOpin(e.target.value)}
                      className="training-form-control"
                      cols="35"
                      rows="2"
                      id="trainropn"
                      name="trainropn"
                      placeholder="Opinion or Advice About Training"
                    >
                      Opinion or Advice About Training
                    </textarea>
                  </div>

                  {/*14. Training Heading */}
                  <div className="training-form-group">
                    <label htmlFor="describe">Description</label>
                    <textarea
                      value={trainDesc}
                      onChange={(e) => setTrainDesc(e.target.value)}
                      className="training-form-control"
                      id="describe"
                      name="describe"
                      cols="35"
                      rows="2"
                      placeholder="Training Details more than 100 words..."
                    >
                      Training Details more than 100 words..
                    </textarea>
                  </div>
                </div>

                {/* 8. */}
                <div className="right-form-outline d-flex">
                  {/*15. Training Heading */}
                  <div className="training-form-group">
                    <label htmlFor="Feedback">Feedback</label>

                    <textarea
                      value={trainFeedback}
                      onChange={(e) => setTrainFeedback(e.target.value)}
                      className="training-form-control"
                      type="text"
                      id="Feedback"
                      name="Feedback"
                      cols="35"
                      rows="2"
                      placeholder="Your Feedback for Best Performance!"
                    >
                      Give Your Feedback for Best Performance!
                    </textarea>
                  </div>

                  {/*3. Training About */}
                  <div className="training-form-group">
                    <label htmlFor="traininghead">About of Training</label>
                    <textarea
                      value={trainAbout}
                      onChange={(e) => setTrainAbout(e.target.value)}
                      className="training-form-control"
                      name="traininghead"
                      id="traininghead"
                      cols="35"
                      rows="2"
                      placeholder="Your Trainig About and Purpose, atleast 30 words!"
                    >
                      Enter Your Trainig About and Purpose, atleast 30 words!
                    </textarea>
                  </div>
                </div>
              </div>

              {/*3. training-from */}
              <div className="training-form-outline d-flex d-flex">
                {/* 3. */}
                <div className="left-form-outline d-flex">
                  {/*5. Training-Stage- field */}
                  <div className="training-form-group">
                    <label htmlFor="trainingstage">Training Stage</label>
                    <select
                      value={trainStage}
                      onChange={(e) => setTrainStage(e.target.value)}
                      name="trainingstage"
                      id="trainingstage"
                    >
                      <option defaultValue="Select">Select</option>
                      <option value="BEGINNER">BEGINNER</option>
                      <option value="INTERMEDIATE">INTERMEDIATE</option>
                      <option value="ADVANCED">ADVANCED</option>
                    </select>
                  </div>

                  {/*7. Training-Certificate */}
                  <div className="training-form-group">
                    <label htmlFor="training-rate">Give Your Ratings</label>
                    <select
                      value={trainRating}
                      onChange={(e) => setTrainRating(e.target.value)}
                      name="training-rate"
                      id="training-rate"
                    >
                      <option defaultValue="Select">Select</option>
                      <option value="WORST">1. WORST</option>
                      <option value="BAD">2. BAD</option>
                      <option value="NEUTRAL">3. NEUTRAL</option>
                      <option value="GOOD">4. GOOD</option>
                      <option value="EXCELLENT">5. EXCELLENT</option>
                    </select>
                  </div>
                </div>

                {/* 4. */}
                <div className="right-form-outline d-flex">
                  {/*8. Training Heading */}
                  <div className="training-form-group">
                    <label htmlFor="trainingnail">
                      Training Thumbnail Image
                    </label>
                    <input
                      // value={trainThumb}
                      onChange={(e) => setTrainThumb(e.target.files[0])}
                      title="Image Upload Training Thumbnail"
                      type="file"
                      className="training-form-control training-image"
                      id="trainingnail"
                      accept="image/*"
                    />

                    {trainThumb ? (
                      <img
                        src={`${BASE_URL}/${trainThumb}`}
                        width="100"
                        height="80"
                      />
                    ) : (
                      ""
                    )}
                  </div>

                  {/*12. Training All Video */}
                  <div className="training-form-group">
                    <label htmlFor="allvideo">All Video of Training</label>
                    <input
                      // value={trainAllVideo}
                      onChange={(e) => setTrainAllVideo(e.target.files)}
                      title="Select Multiple Video"
                      type="file"
                      id="allvideo"
                      accept="video/*"
                      multiple="multiple"
                    />
                  </div>
                </div>
              </div>

              {/*4. training-from */}
              <div className="training-form-outline d-flex d-flex">
                {/* 5. */}
                <div className="right-form-outline d-flex">
                  {/*16. Training-Max-Prie */}
                  <div className="training-form-group">
                    <label htmlFor="trainingmrp">MRP :</label>
                    <input
                      value={trainMrp}
                      onChange={(e) => setTrainMrp(e.target.value)}
                      type="number"
                      className="training-form-control training-mrp"
                      id="trainingmrp"
                      name="trainingmrp"
                      placeholder="Maximum Trainings Video Cost"
                      autoComplete="trainingmrp"
                    />
                  </div>

                  {/*17. Training Heading */}
                  <div className="training-form-group">
                    <label htmlFor="trainingsrp">SRP :</label>
                    <input
                      value={trainSrp}
                      onChange={(e) => setTrainSrp(e.target.value)}
                      type="number"
                      className="training-form-control training-srp"
                      id="trainingsrp"
                      name="trainingsrp"
                      placeholder="Minimum Trainings Video Cost"
                      autoComplete="trainingsrp"
                    />
                  </div>
                </div>

                {/* 6. */}
                <div className="left-form-outline d-flex">
                  {/*10. Training Sequal */}
                  <div className="training-form-group">
                    <label htmlFor="trainingsequal">Training Sequal</label>
                    <input
                      value={trainPurpose}
                      onChange={(e) => setTrainPurpose(e.target.value)}
                      type="text"
                      className="training-form-control training-sequal"
                      id="trainingsequal"
                      name="trainingsequal"
                      placeholder="Training Purpose"
                    />
                  </div>

                  <div className="training-form-group">
                    <label htmlFor="introvideo">
                      Introduction Video of Training
                    </label>
                    <input
                      // value={trainIntroVid}
                      onChange={(e) => setTrainIntroVid(e.target.files[0])}
                      type="file"
                      id="introvideo"
                      accept="video/*"
                    />
                  </div>
                </div>
              </div>

              <div className="training-form-outline d-flex d-flex">
                {/*6. Training-Certificate */}
                <div className="training-form-group">
                  <label htmlFor="certificate">Certificate Available</label>
                  <select
                    value={trainCert}
                    onChange={(e) => setTrainCert(e.target.value)}
                    name="certificate"
                    id="certificate"
                  >
                    <option defaultValue="Select">Select</option>
                    <option value="YES">YES</option>
                    <option value="NO">NO</option>
                  </select>
                </div>
              </div>
              <button
                onClick={handleUpdate}
                className="btn btn-primary"
                // disabled={
                //   trainFields.length < 5 ||
                //   trainHead.length < 5 ||
                //   trainLang.length < 2 ||
                //   trainer.length < 5 ||
                //   trainOpin.length < 5 ||
                //   trainDesc.length < 5 ||
                //   trainFeedback.length < 5 ||
                //   trainAbout.length < 5 ||
                //   trainStage.length < 3 ||
                //   trainRating.length < 2 ||
                //   trainCert.length < 1 ||
                //   trainThumb.length === null ||
                //   trainAllVideo.length === null ||
                //   trainPurpose.length < 5 ||
                //   trainIntroVid.length === null
                // }
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpddateCardData;
