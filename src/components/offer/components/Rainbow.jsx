import React from "react";
import "./Rainbow.scss";

const Rainbow = ({ textOne, textTwo }) => {
  return (
    <div className="wrapper">
      <ul className="c-rainbow">
        <li className="c-rainbow__layer c-rainbow__layer--white">{textOne}</li>
        <li className="c-rainbow__layer c-rainbow__layer--orange">{textOne}</li>
        <li className="c-rainbow__layer c-rainbow__layer--red">{textOne}</li>
        <li className="c-rainbow__layer c-rainbow__layer--violet">{textOne}</li>
        <li className="c-rainbow__layer c-rainbow__layer--blue">{textOne}</li>
        <li className="c-rainbow__layer c-rainbow__layer--green">{textOne}</li>
        <li className="c-rainbow__layer c-rainbow__layer--yellow">{textOne}</li>
      </ul>
      <ul className="c-rainbow">
        <li className="c-rainbow__layer c-rainbow__layer--white">{textTwo}</li>
        <li className="c-rainbow__layer c-rainbow__layer--orange">{textTwo}</li>
        <li className="c-rainbow__layer c-rainbow__layer--red">{textTwo}</li>
        <li className="c-rainbow__layer c-rainbow__layer--violet">{textTwo}</li>
        <li className="c-rainbow__layer c-rainbow__layer--blue">{textTwo}</li>
        <li className="c-rainbow__layer c-rainbow__layer--green">{textTwo}</li>
        <li className="c-rainbow__layer c-rainbow__layer--yellow">{textTwo}</li>
      </ul>
    </div>
  );
};

export default Rainbow;
