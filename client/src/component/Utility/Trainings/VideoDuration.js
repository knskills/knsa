import React, { useRef, useState } from "react";
import { BASE_URL } from "../../helper/helper";

const VideoDuration = ({ siTrainingsData }) => {
  const videoEl = useRef(null);
  const [videDurationis, setVideoDurationis] = useState("");

  const handleLoadedMetadata = () => {
    const video = videoEl.current;
    if (!video) return;
    console.log(`The video is ${video.duration} seconds long.`);
    setVideoDurationis(video.duration);
  };

  return (
    <div>
      {siTrainingsData.trainIntroVid ? (
        <video
          style={{ display: "none" }}
          ref={videoEl}
          onLoadedMetadata={handleLoadedMetadata}
          src={`${BASE_URL}/${siTrainingsData.trainIntroVid}`}
          type="video/mp4"
          width="320"
          height="240"
          controls
        ></video>
      ) : (
        ""
      )}

      <div className="video-duration">{`${videDurationis} Sec.`}</div>
    </div>
  );
};

export default VideoDuration;
