
export const SET_LAYOUT_Topic = "SET_LAYOUT_Topic";

export const setLayoutTopic = src => dispatch => {
    dispatch({
        type: SET_LAYOUT_Topic,
        src
    })
};

const defaultTopic = "https://www.youtube.com/embed/TGan48YE9Us";
const initalState = defaultTopic;

export function reducerLayoutTopic(state = initalState, action) {
    switch (action.type) {
      case SET_LAYOUT_Topic:
        return action.src;
      default:
        return state;
    }
}
