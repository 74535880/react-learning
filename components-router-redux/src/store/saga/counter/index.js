import { delay, takeEvery, put } from "redux-saga/effects";
import {
  asyncDecrease,
  asyncIncrease,
  increase,
  decrease
} from "../../actions-reducers/counter";

function* decreaseHandle() {
  yield delay(2000);
  yield put(decrease());
}

function* handleIncrease() {
  yield delay(2000);
  yield put(increase());
}

export default function*() {
  yield takeEvery(asyncDecrease().type, decreaseHandle);
  yield takeEvery(asyncIncrease().type, handleIncrease);
  console.log("counter-监听完成");
}
