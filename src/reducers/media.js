
export const SET_LAYOUT_Media = "SET_LAYOUT_Media";

export const setLayoutMedia = status => dispatch => {
    dispatch({
        type: SET_LAYOUT_Media,
        status
    })
};

const initalState = true;

export function reducerLayoutMedia(state = initalState, action) {
    switch (action.type) {
      case SET_LAYOUT_Media:
        return action.status;
      default:
        return state;
    }
}
