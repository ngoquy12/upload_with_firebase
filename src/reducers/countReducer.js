import { ACT_1, ACT_2, ACT_3, ACT_4 } from "../constants";

export const countReducer = (state, action) => {
  switch (action) {
    case ACT_1:
      return state + 1;
    case ACT_2:
      return state + 2;
    case ACT_3:
      return state + 3;
    case ACT_4:
      return state + 4;
    default:
      return state;
  }
};
