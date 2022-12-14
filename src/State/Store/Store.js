import { legacy_createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import {FormOneReducer} from "../Reducers/FormOneReducer";
// import {FormTwoReducer} from "../Reducers/FormTwoReducer";
// import { FirstReducer } from "../Reducers/FirstReducer";
// import { NavigationReducer } from "../Reducers/NavigationReducer";
// import {CarouselReducer} from "../Reducers/CarouselReducer";
// import {CourseReducer } from "../Reducer";
import { NavigationReducer } from "../../ExalTech/Navigation/Reducers/NavigationReducer";
import { CarouselReducer } from "../../ExalTech/Navigation/Reducers/CarouselReducer";
import { CourseReducer } from "../../ExalTech/Navigation/Reducers/CourseReducer";


export const myStore = () => {
  return( legacy_createStore(
    combineReducers({ CarouselReducer, NavigationReducer,CourseReducer
      }),
    composeWithDevTools()
  ));

};

