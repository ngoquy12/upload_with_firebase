import React, { useReducer, useState } from "react";
import { countReducer } from "../reducers/countReducer";
import { ACT_1, ACT_2, ACT_3, ACT_4 } from "../constants";

// 1. Giá trị khởi tạo
// 2. reducer
// 3. action (Hành động từ người dùng)
// 4. Cập nhật state

const initialState = 0;

export default function Count() {
  const [count, dispatch] = useReducer(countReducer, initialState);

  const handleCount = (action) => {
    dispatch(action);
  };

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => handleCount(ACT_1)}>Count + 1</button>
      <button onClick={() => handleCount(ACT_2)}>Count + 2</button>
      <button onClick={() => handleCount(ACT_3)}>Count + 3</button>
      <button onClick={() => handleCount(ACT_4)}>Count + 4</button>
    </div>
  );
}
