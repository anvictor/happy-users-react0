import { createStore } from "redux";
import openMenuReducer from "../reducers/index";
// import OPEN_MENU from '../constants/action-types';

const store = createStore(openMenuReducer);
// export function openMenu(open) {
//   return { type: OPEN_MENU, open }
// };

export default store;