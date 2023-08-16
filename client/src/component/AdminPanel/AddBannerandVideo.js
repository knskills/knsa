import React, { useState } from "react";

const AddBannerandVideo = () => {
  const [banner, setBanner] = useState([{ bannerTheme: "", bannerFile: "" }]);

  const [companyVideo, setCompanyVideo] = useState([
    { videoTheme: "", videoFile: "" },
  ]);

  const handleBanner = () => {
    setBanner([...banner, { bannerTheme: "", bannerFile: "" }]);
  };

  const handleVideo = () => {
    setBanner([...companyVideo, { videoTheme: "", videoFile: "" }]);
  };
  return (
    <>
      <div className="home-banner-form-container">
        <div className="banner-form-flex">
          <form>
            <div className="input-field-form">
              <div className="video-section">Banner Details</div>
              {banner.map((bannerItem, bannerIndex) => {
                return (
                  <div className="intro-video-section">
                    {/* 1 */}
                    <div className="banner1-text banner-input">
                      <label>Banner Theme</label>
                      <input name="bannerTheme" type="text" />
                    </div>

                    <div className="banner1-file banner-input">
                      <label htmlFor="banner1">Banner File</label>
                      <input name="bannerFile" type="file" accept="image/*" />
                    </div>

                    {/* button section */}
                    <div className="video-btn banner-input">
                      {banner.length !== 1 && (
                        <button className="btn-danger">
                          <i class="fa-solid fa-minus"></i>
                        </button>
                      )}
                      {banner.length - 1 === 1 && (
                        <button className="btn-success" onClick={handleBanner}>
                          <i class="fa-solid fa-plus"></i>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="input-field-form">
              <div className="video-section">Video Details</div>

              {companyVideo.map((videoItem, videoIndex) => {
                return (
                  <div className="intro-video-section">
                    {/* 1 */}
                    <div className="Video-text banner-input">
                      <label htmlFor="video-text">Video Theme</label>
                      <input name="videoTheme" type="text" />
                    </div>

                    <div className="Video-file banner-input">
                      <label htmlFor="VideoFile">Video File</label>
                      <input name="VideoFile" type="file" accept="video/*" />
                    </div>

                    {/* button section */}
                    <div className="video-btn">
                      {companyVideo.length !== 1 && (
                        <button className="btn-danger">
                          <i class="fa-solid fa-minus"></i>
                        </button>
                      )}
                      {companyVideo.length - 1 === 1 && (
                        <button className="btn-success" onClick={handleVideo}>
                          <i class="fa-solid fa-plus"></i>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBannerandVideo;
