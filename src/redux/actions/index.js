import {OPEN_MENU} from '../constants/action-types';

export function openMenu(open) {
  return { type: OPEN_MENU, open }
};