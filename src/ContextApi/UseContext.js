import React, { useState, useEffect } from "react";

const UseContext = () => {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);
  const incNum = () => {
    setNum(num + 1);
  };
  const incNums = () => {
    setNums(nums + 1);
  };

  useEffect(() => {
    alert("Clicked ");
  }, [num]);

  return (
    <>
      <button onClick={incNum}>Click Me..! {num}</button>
      <button onClick={incNums}>Click Me..! {nums}</button>
    </>
  );
};

export default UseContext;

//  By using this Hook, you tell React that your component needs to do something after render
//  only [] means o something after first render only
// [particular] means do something after that particular thing chnges
