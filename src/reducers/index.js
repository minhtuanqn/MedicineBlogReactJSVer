import { combineReducers } from "redux";
import tagsReducer from "./tagsReducer";
import topicsReducer from "./topicsReducer";

const rootReducer = combineReducers({
  allTopics: topicsReducer,
  allTags: tagsReducer,
  selectedIdTopic: topicsReducer,
})

export default rootReducer;
