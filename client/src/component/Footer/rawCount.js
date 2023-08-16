import React, { useEffect } from 'react'

const rawCount = () => {
    let valueDisplays = document.querySelectorAll(".num")
    let interval = 5000;
    console.log("valueDisplays", valueDisplays);
    valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"))
        console.log("endValue", endValue);
        let duration = Math.floor(interval / endValue)
        let counter = setInterval(() => {
            startValue += 1;
            valueDisplay.textContent = startValue;
            if (startValue == endValue) {
                clearInterval(counter)
            }
        }, duration);
    })

//         < style >

// /* Footer Section */
// .footer - warapper {
//         border: 1px solid rgb(165, 22, 22);
//         background - color: wheat;
//         width: 80vh;
//         /* transform: translate(-50%, -50%); */
//         display: flex;
//         justify - content: space - around;
//         gap: 10px;
//     }

// .footer - warapper.footer - status {
//     width: 28vmin;
//     height: 28vmin;
//     border: 1px solid orange;
//     display: flex;
//     flex - direction: column;
//     justify - content: space - around;
//     padding: 1em 0;
//     position: relative;
//     font - size: 16px;
//     border - radius: 0.5em;
//     background - color: black;
//     border - bottom: 10px solid skyblue
// }

// .footer - status i {
//     color: #00ff89;
//     font - size: 2.5em;
//     text - align: center;
// }

// span.num {
//     color: #ffffff;
// }

// span.text {
//     color: white;
//     font - size: 1em;
//     text - align: center;
//     pad: 0.7em 0;
//     font - weight: 400;
//     line - height: 0;
// }
//     </style >
    return (
    <>
        <div className="Footer-container">
            <h1>This is the footer</h1>
            <div className="footer-part">
                <div className="footer-warapper">
                    <div className="footer-status">
                        <i className="fa-brands fa-usps"></i>
                        <span className='num' data-val="500" >500</span>
                        <span className='text'>SERVED VERTICALS</span>
                    </div>
                    <div className="footer-status">
                        <i className="fa-brands fa-usps"></i>
                        <span className='num' data-val="340" >340</span>
                        <span className='text'>AWARDS WON</span>
                    </div>
                    <div className="footer-status">
                        <i className="fa-brands fa-usps"></i>
                        <span className='num' data-val="650" >600</span>
                        <span className='text'>NO OF EMPLOYEES</span>
                    </div>
                    <div className="footer-status">
                        <i className="fa-brands fa-usps"></i>
                        <span className='num' data-val="800" >800</span>
                        <span className='text'>SUCCESSFUL PROJECTS</span>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default rawCount