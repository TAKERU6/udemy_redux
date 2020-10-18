import {
  INCREMENT,
  DECREMENT,
  FIVEINCREMENT,
  FIVEDECREMENT,
  TENINCREMENT,
  TENDECREMENT,
  RESET
} from "../actions";
const initialState = { value: 0 };
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + action.count };
    case DECREMENT:
      return { value: state.value - action.count };
    case TENINCREMENT:
      return { value: state.value + action.count };
    case TENDECREMENT:
      return { value: state.value - action.count };
    case FIVEINCREMENT:
      return { value: state.value + action.count };
    case FIVEDECREMENT:
      return { value: state.value - action.count };
    case RESET:
      return { value: action.count };
    default:
      return state;
  }
};
