export const MIAN_MENU_TOGGLE = "MIAN_MENU_TOGGLE";
export const MIAN_MENU_CLOSE = "MIAN_MENU_CLOSE";
export const MIAN_MENU_OPEN = "MIAN_MENU_OPEN";
export const MENU_ITEM_CLICK = "MENU_ITEM_CLICK";

function menuToggle() {
  return {
    type: MIAN_MENU_TOGGLE
  };
}
function menuToggleOpen() {
  return {
    type: MIAN_MENU_OPEN
  };
}
function menuToggleClose() {
  return {
    type: MIAN_MENU_CLOSE
  };
}

function menuItemClickedRequest(itemName) {
  return {
    type: MENU_ITEM_CLICK,
    itemName
  };
}

export function mianMenuToggle(event, open) {
  return dispatch => {
    if (event.type === "click") {
      dispatch(menuToggle());
    } else {
      if (event.type === "mouseenter") {
        if (open === true) {
          dispatch(menuToggleOpen());
        } else if (open === false) {
          dispatch(menuToggleClose());
        } else {
          dispatch(menuToggleOpen());
        }
      } else if (event.type === "mouseleave") {
        dispatch(menuToggleClose());
      }
    }
  };
}

export function menuItemClick(itemName) {
  return dispatch => {
    dispatch(menuItemClickedRequest(itemName));
  };
}
