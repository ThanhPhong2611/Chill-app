
export const SET_Modal_Notice = "SET_Modal_Notice";

export const setModalNotice = status => dispatch => {
    dispatch({
        type: SET_Modal_Notice,
        status
    })
};

const initalState = false;

export function reducerModalNotice(state = initalState, action) {
    switch (action.type) {
      case SET_Modal_Notice:
        return action.status;
      default:
        return state;
    }
}
