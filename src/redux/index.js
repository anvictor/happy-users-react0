import store from "../redux/store/index";
import { openMenu } from "./actions/index";
window.store = store;
window.openMenu = openMenu;