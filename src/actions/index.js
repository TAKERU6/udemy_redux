export const INCREMENT = "INCREMENT";
export const FIVEINCREMENT = "FIVEINCREMENT";
export const TENINCREMENT = "TENINCREMENT";
export const DECREMENT = "DECREMENT";
export const FIVEDECREMENT = "FIVEDECREMENT";
export const TENDECREMENT = "TENDECREMENT";
export const RESET = "RESET";
export const increment = () => ({ type: INCREMENT, count: 1 });
export const fiveIncrement = () => ({ type: FIVEINCREMENT, count: 5 });
export const tenIncrement = () => ({ type: TENINCREMENT, count: 10 });
export const decrement = () => ({ type: DECREMENT, count: 1 });
export const fiveDecrement = () => ({ type: FIVEDECREMENT, count: 5 });
export const tenDecrement = () => ({ type: TENDECREMENT, count: 10 });
export const reset = () => ({ type: RESET, count: 0 });
