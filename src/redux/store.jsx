import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer"; // 경로 맞게

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware() // 미들웨어 없으면 그냥 비워도 됨
  )
);

export default store;
