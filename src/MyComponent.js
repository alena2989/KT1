import React, { useEffect } from "react";

const MyComponent = () => {
  const data = ["element1", "element2", "element3"];

  const function1 = () => {
    function2();
  };

  const function2 = () => {
    data.forEach((element) => {
      console.log(element);
    });
  };

  useEffect(() => {
    function1();
  }, []);

  return (
    <div>
      <h1>КТ1</h1>
    </div>
  );
};

export default MyComponent;
