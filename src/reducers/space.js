
export const SET_LAYOUT_Space = "SET_LAYOUT_Space";

export const setLayoutSpace = status => dispatch => {
    dispatch({
        type: SET_LAYOUT_Space,
        status
    })
};

const initalState = true;

export function reducerLayoutSpace(state = initalState, action) {
    switch (action.type) {
      case SET_LAYOUT_Space:
        return action.status;
      default:
        return state;
    }
}
