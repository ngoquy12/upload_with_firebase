import React from "react";

export default function CustomeInput({ type, onChange, value }) {
  return (
    <>
      <input type={type} onChange={onChange} value={value} />
    </>
  );
}
