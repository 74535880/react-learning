import { createActions, handleActions, combineActions } from "redux-actions";

export const {
  increase,
  decrease,
  asyncIncrease,
  asyncDecrease,
  add
} = createActions({
  INCREASE: () => 1,
  DECREASE: () => 1,
  ASYNC_INCREASE: null,
  ASYNC_DECREASE: null,
  ADD: num => num
});

const fn = combineActions(increase, decrease, add);

export default handleActions(
  {
    [fn]: (state, { payload }) => state + payload
  },
  1
);
