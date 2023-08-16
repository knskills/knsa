import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const CountScroll = () => {
  const [countOn, setCountOn] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setCountOn(true)}
        onExit={() => setCountOn(false)}
      >
        <div className="footer-warapper">
          <div className="footer-status">
            <i className="fa-brands fa-servicestack"></i>
            {countOn && <CountUp start={0} end={500} duration={20} delay={0} />}
            <span className="text">TRAINED COURSE</span>
          </div>
          <div className="footer-status">
            <i className="fa-solid fa-medal"></i>
            {countOn && <CountUp start={0} end={340} duration={20} delay={0} />}
            <span className="text">AWARDS WON</span>
          </div>
          <div className="footer-status">
            <i className="fa-sharp fa-solid fa-user"></i>
            {countOn && <CountUp start={0} end={600} duration={20} delay={0} />}
            <span className="text">NO OF EMPLOYEES</span>
          </div>
          <div className="footer-status">
            <i className="fa-sharp fa-solid fa-check-double"></i>
            {countOn && <CountUp start={0} end={800} duration={20} delay={0} />}
            <span className="text">SUCCESSFUL PROJECTS</span>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
};
export default CountScroll;
