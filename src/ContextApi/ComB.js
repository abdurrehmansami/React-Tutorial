import React, { useContext } from "react";
import ComC from "./ComC";
import { FirstName } from "../App";
import { LastName } from "../App";

const ComB = () => {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  return (
    <>
      My name is {fname}
      {lname}
    </>
  );
};

export default ComB;
