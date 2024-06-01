//나중에 createStore 함수를 사용하여 스토어를 만들 때는 리듀서를 하나만 사용해야 됨
//이 작업은 리덕스에서 제공하는 combineReducer라는 유틸 함수를 사용해야 됨

import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
