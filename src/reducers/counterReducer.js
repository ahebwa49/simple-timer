import { INCREMENT } from "../actions/increment";
import { DECREMENT } from "../actions/decrement";
import { START } from "../actions/start";
import { RESET } from "../actions/reset";

export const counterReducer = (counterState = 0, action) => {
  let newState;
  switch (action.type) {
      
    case INCREMENT:
      if (counterState < 60) {
        newState = counterState + 5;
        return newState;
      } else {
        return counterState;
      }
      break;

    case DECREMENT:
      if (counterState > 0) {
        newState = counterState - 5;
        return newState;
      } else {
        return counterState;
      }
      break;

    case RESET:
      newState = 0;
      return newState;
      break;

    case START:
      if (counterState > 0) {
        newState = counterState - 1;
        return newState;
      } else {
        return counterState;
      }

      break;

    default:
      return counterState;
  }
};
