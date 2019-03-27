import {OPEN_MENU} from '../constants/action-types';
const initialMenuState = {
  open: false
};
function openMenuReducer(state = initialMenuState, action) {
  if (action.type === OPEN_MENU){
    state.open = !state.open;
  }
  return state;
};
export default openMenuReducer;