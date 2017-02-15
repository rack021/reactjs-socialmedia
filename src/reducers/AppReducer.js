import * as AppActions from "../actions/AppActions";
const initialState = {
  menuOpen: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AppActions.MIAN_MENU_TOGGLE:
      return { ...state, menuOpen: state.menuOpen ? false : true };
    case AppActions.MIAN_MENU_OPEN:
      return { ...state, menuOpen: true };
    case AppActions.MIAN_MENU_CLOSE:
      return { ...state, menuOpen: false };
  }
  return state;
}
