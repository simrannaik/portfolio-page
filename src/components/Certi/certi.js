import React from "react";
import './certi.css';
import Certi1 from '../../assets/certi-1.png';
import Certi2 from '../../assets/certi-2.png';
import Certi3 from '../../assets/certi-3.png';
import Certi4 from '../../assets/certi-4.png';
import Certi5 from '../../assets/certi-5.png';
import Certi6 from '../../assets/certi-6.png';

const Certi = () => {
    return (
        <section id="certi">
            <h2 className="certiTitle">My Certificates</h2>
            <div className="certiImgs">
                <a href="https://drive.google.com/file/d/1MpjLM4lyUaHpk5aFBhnXxq3oklLKytrl/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    <img src={Certi1} alt="Certificate 1" className="certiImg" />
                </a>
                <a href="https://drive.google.com/file/d/13Nnm_E_m-hdOS2a1tMrB6oGwy1BLaBrf/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    <img src={Certi2} alt="Certificate 2" className="certiImg" />
                </a>
                <a href="https://drive.google.com/file/d/12AcQJg8owCr7uHHYnQYiAUZnXAJ6uMBq/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    <img src={Certi3} alt="Certificate 3" className="certiImg" />
                </a>
                <a href="https://drive.google.com/file/d/1MPXSKDBPU4BErHLYCWFX0MnZa1QYHA4U/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    <img src={Certi4} alt="Certificate 4" className="certiImg" />
                </a>
                <a href="https://drive.google.com/file/d/1SC9Kh1hoCN9mehF8IcMznjooz-mIZpoA/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    <img src={Certi5} alt="Certificate 5" className="certiImg" />
                </a>
                <a href="https://drive.google.com/file/d/1P78G5Mwzdv5oEHpw4Z8GGVLB3NYVQFPP/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <img src={Certi6} alt="Certificate 6" className="certiImg" />
                </a>
            </div>
        </section>
    );
};

export default Certi;
