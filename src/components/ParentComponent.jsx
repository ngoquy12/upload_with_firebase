import React, { useCallback, useState } from "react";
import ChildrenComponent from "./ChildrenComponent";

export default function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleCount = useCallback(() => {
    setCount((prev) => prev + 1); // prev = 0
  }, []);

  return (
    <div>
      <ChildrenComponent onCount={handleCount} />
      <h3>Count: {count}</h3>
      {/* <button onClick={handleCount}>Count</button> */}
    </div>
  );
}
