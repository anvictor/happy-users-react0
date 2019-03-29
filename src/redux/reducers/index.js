import {OPEN_MENU} from '../constants/action-types';

const initialMenuState = {open: false};

function openMenuReducer(state = initialMenuState, action) {
  const localState = {};
  Object.assign(localState,  state);
  if (action.type === OPEN_MENU){
    localState.open = !localState.open;
  }
  return localState;
};
export default openMenuReducer;