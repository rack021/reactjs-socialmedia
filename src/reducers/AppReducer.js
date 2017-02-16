import * as AppActions from "../actions/AppActions";
const initialState = {
  menuOpen: false,
  mainMenuList: [{ active: true, name: "Home", icon: "fa-home", link: "profile" }, { active: false, name: "Dashboard", icon: "fa-dashboard", link: "blog" }]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AppActions.MIAN_MENU_TOGGLE:
      return { ...state, menuOpen: state.menuOpen ? false : true };
    case AppActions.MIAN_MENU_OPEN:
      return { ...state, menuOpen: true };
    case AppActions.MIAN_MENU_CLOSE:
      return { ...state, menuOpen: false };
    case AppActions.MENU_ITEM_CLICK:
      let meneItemList = state.mainMenuList.map((item, i) => {
        item.active = item.name === action.itemName ? true : false;
        return item;
      });
      return { ...state, mainMenuList: meneItemList };
  }
  return state;
}
