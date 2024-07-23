import React, { memo } from "react";

function ChildrenComponent({ onCount }) {
  console.log("re-render");
  return (
    <div>
      <button onClick={onCount}>Handle count</button>
    </div>
  );
}

export default memo(ChildrenComponent);
