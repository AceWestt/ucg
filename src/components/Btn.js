import React from "react";
import defaultIcon from "../imgs/common/btn-primary-icon.svg";
import defaultIconSec from "../imgs/common/btn-secondary-icon.svg";

const Btn = ({
  customClass = "",
  type = "primary",
  text = "",
  icon,
  action = () => {},
}) => {
  if (!icon) {
    icon = defaultIcon;
    if (type === ("secondary" || "subtle")) {
      icon = defaultIconSec;
    }
  }
  return (
    <div className={`btn ${type} ${customClass}`} onClick={action}>
      {icon && <img src={icon} alt={text} />}
      {text && <span>{text}</span>}
    </div>
  );
};

export default Btn;
