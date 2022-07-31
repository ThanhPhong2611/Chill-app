export const SET_Info_User = "SET_Info_User";

export const setInfoUser = (obj) => (dispatch) => {
  dispatch({
    type: SET_Info_User,
    obj,
  });
};

const defaultInfo = {
  name: "Yaroslav Shuraev",
  social: {
    instagram: "https://www.instagram.com/yaroslav_shuraev/",
    url: "https://mini-moss.tumblr.com/",
  },
};
const initalState = defaultInfo;

export function reducerInfoUserOfTheme(state = initalState, action) {
  switch (action.type) {
    case SET_Info_User:
      return action.obj;
    default:
      return state;
  }
}
