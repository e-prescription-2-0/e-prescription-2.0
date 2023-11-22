import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Benefits-style.css";
import {
  faAnchor,
  faCamera,
  faDatabase,
  faGlobe,
  faHourglassHalf,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import BenefitCard from "./BenefitCard";


const Benefits = () => {
  const cardList = [
    {
      title: "Expertise",
      info:
        "Precision meets care with our skilled healthcare professionals, ensuring the latest in medical technology for your prescriptions.",
      icon:                 <FontAwesomeIcon icon={faGlobe} />,
    },
    {
      title: "Confidential",
      info:
        "Rest easy knowing your health records are safe – our robust security measures prioritize the confidentiality of your sensitive information.",
      icon: <FontAwesomeIcon icon={faAnchor} />,
    },
    {
      title: "Time-Efficiency",
      info:
        "Swift and hassle-free, our application saves time for healthcare providers and patients, streamlining the prescription process.",
      icon: <FontAwesomeIcon icon={faHourglassHalf} />,
    },
    {
      title: "Accessibility",
      info:
        "Prescriptions at your fingertips – our app ensures you can manage your health anytime, anywhere, providing ultimate accessibility.",
      icon: 
      <FontAwesomeIcon icon={faDatabase} />,
    },
    {
      title: "Integration Capabilities",
      info:
        "Seamless integration with your healthcare systems; our app easily connects with electronic health records and other management platforms for a comprehensive healthcare experience.",
      icon: <FontAwesomeIcon icon={faUpload} />,
    },
    {
      title: "Caring",
      info:
        "Experience compassion in every click; our user-friendly interface and dedicated support reflect our genuine commitment to your health.",
      icon: <FontAwesomeIcon icon={faCamera} />,
    },
  ];
  return (
    <div class="feat bg-gray pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="section-head col-sm-12">
            <h4>
              <span>Why Choose</span> Us?
            </h4>
            <p>
              Choose our e-prescription platform for a streamlined and secure
              healthcare experience. Benefit from our expertise, ensuring
              precision in prescriptions, while enjoying the convenience of
              time-efficient processes and ultimate accessibility anywhere,
              anytime. Elevate your well-being with a caring and compassionate
              approach to prescription management.
            </p>
          </div>
          
          {cardList.map((data)=><BenefitCard data={data}/>)}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
