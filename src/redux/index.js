import { openMenu } from "./actions/index";
import store from "../redux/store/index";
window.store = store;
window.openMenu = openMenu;