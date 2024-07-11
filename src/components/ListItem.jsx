import React from "react";
import { Link } from "react-router-dom";
const ListItem = ({ listName, href,className }) => {
  return (
    <>
      <Link to={href}>
        <li className={className}>{listName}</li>
      </Link>
    </>
  );
};

export default ListItem;
