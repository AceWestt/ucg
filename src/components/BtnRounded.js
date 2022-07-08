import React from "react";
import defaultIcon from "../imgs/common/pencil-icn.svg";

const Btn = ({
  customClass = "",
  type = "primary",
  text = "",
  icon = defaultIcon,
  action = () => {},
}) => {
  return (
    <div className={`btn rnd ${type} ${customClass}`} onClick={action}>
      {icon && (
        <div className="icn-wrap">
          <img src={icon} alt={text} />
        </div>
      )}
    </div>
  );
};

export default Btn;
