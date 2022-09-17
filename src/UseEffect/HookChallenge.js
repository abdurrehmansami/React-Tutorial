import React, { useEffect, useState } from "react";

const HookChallenge = () => {
  const [num, setNum] = useState(0);
  const incNum = () => {
    setNum(num + 1);
  };

  // document.title = `Button clicked ${num} times..!`;
  // OR
  useEffect(() => {
    document.title = `Button clicked ${num} times..!`;
  }, [num]);
  return (
    <>
      <button onClick={incNum}>Click Number {num}</button>
    </>
  );
};

export default HookChallenge;
