import { createStore, combineReducers, applyMiddleware } from "redux";
import { systemReducer } from "./system/reducer";
import { chatReducer } from "./chat/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thuckMiddleware from "redux-thunk";

const rootReducer = combineReducers({
  system: systemReducer,
  chat: chatReducer
});

export type AppState = ReturnType<typeof rootReducer>;

const configureStore = () => {
  const middlewears = [thuckMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewears);
  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );
  return store;
};

export default configureStore;
