import {OPEN_MENU, OPEN_ADD, OPEN_DEL} from '../constants/action-types';

// export default  openMenu = (open)=> {
//   return { type: OPEN_MENU, open }
// }
export function openMenu(open) {
  return { type: OPEN_MENU, open }
}

export function addEntity(addVisible) {
  return { type: OPEN_ADD, addVisible }
}

export function delEntity(delVisible) {
  return { type: OPEN_DEL, delVisible }
}

