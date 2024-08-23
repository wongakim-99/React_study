import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools());

// 루트 DOM 요소를 가져옵니다.
const rootElement = document.getElementById("root");

// React 18의 createRoot를 사용하여 루트를 생성합니다.
const root = ReactDOM.createRoot(rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
root.render(
  <Provider store={store}>
    {" "}
    {/* 여기서 stroe를 store로 수정 */}
    <App />
  </Provider>
);
