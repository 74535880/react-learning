import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import reducer from "./actions-reducers";
import rootSaga from "./saga";
const saga = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(saga, logger));

saga.run(rootSaga);

export default store;
