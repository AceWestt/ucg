import React from "react";

const NavLink = ({
  icon,
  link = "#",
  text = "",
  action = () => {},
  customClass = "",
}) => {
  return (
    <a href={link} onClick={action} className={`nav-link ${customClass}`}>
      {icon && <img src={icon} alt={text} />}
      <span>{text}</span>
    </a>
  );
};

export default NavLink;
