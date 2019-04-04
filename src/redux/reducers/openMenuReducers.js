import {OPEN_MENU} from '../constants/action-types';
import {OPEN_ADD} from '../constants/action-types';
import {OPEN_DEL} from '../constants/action-types';

const initialMenuState = {
  open: false,
  addVisible: false,
  delVisible: false
};


function OpenMenuReducers(state = initialMenuState, action) {
  const localState = {};
  Object.assign(localState,  state);
  if (action.type === OPEN_MENU){
    localState.open = !localState.open;
    console.log(localState.open);
  }
  if (action.type === OPEN_ADD){
    localState.addVisible = !localState.addVisible;
    console.log(localState.addVisible);
  }
  if (action.type === OPEN_DEL){
    localState.delVisible = !localState.delVisible;
    console.log(localState.delVisible);
  }

  return localState;
};
export default OpenMenuReducers;