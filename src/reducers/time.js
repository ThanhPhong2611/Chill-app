export const SET_LAYOUT_TIME = "SET_LAYOUT_TIME";
export const setLayoutTime = (status) => (dispatch) => {
  dispatch({
    type: SET_LAYOUT_TIME,
    status,
  });
};
const initalState = true;
export function reducerLayoutTime(state = initalState, action) {
  switch (action.type) {
    case SET_LAYOUT_TIME:
      return action.status;
    default:
      return state;
  }
}

//
export const settingsTimer = (state = initialState.settings, action) => {
  switch (action.type) {
    case "TIMER_INCREMENT":
      return { ...state, [action.timerType]: state[action.timerType] + 1 };
    case "TIMER_DECREMENT":
      return { ...state, [action.timerType]: state[action.timerType] - 1 };
    case "SET_TIMER":
      return { ...state, [action.timerType]: action.value };
    default:
      return state;
  }
};
export const onTick = (settings) => ({ type: "TIMER_TICK", settings });
export const onTimerStartStop = () => ({
  type: "TIMER_START_STOP",
});
export const hideAlertTimer = () => ({ type: "HIDE_ALERT_TIMER" });
export const onTimerReset = () => ({
  type: "TIMER_RESET",
});
export const setTotalTime = (totalTime) => ({
  type: "SET_TOTAL_TIME",
  totalTime,
});

function leadingZero(n) {
  return n < 10 ? "0" + n : n;
}
const getTimerDisplay = (timerInSeconds) => ({
  minutes: Math.floor(timerInSeconds / 60),
  seconds: leadingZero(timerInSeconds % 60),
});
const pomodoro = 20;
const TIMERS = {
  POMODORO: "POMODORO",
  BREAK: "BREAK",
};
const initialState = {
  settings: {
    [TIMERS.POMODORO]: pomodoro, // switch to "break" timer when pomodoro timer === 0
    [TIMERS.BREAK]: 20, // stop timers when "break" timer === 0
  },
  timeSetting : pomodoro,
  timer: {
    timer: pomodoro * 60, // in seconds
    display: {
      minutes: pomodoro,
      seconds: "00",
    },
    ticking: false,
    currentTimer: TIMERS.POMODORO,
    nextTimer: TIMERS.BREAK,
  },
  alertNotice : false,
};

export const actionTimer = (state = initialState.timer, action) => {
  let timer;
  switch (action.type) {
    case "HIDE_ALERT_TIMER":
      console.log("hide alert");
      return { ...state, alertNotice: false };
    case "SET_TOTAL_TIME":
      console.log("SET_TOTAL_TIME", state);
      return {
        ...state,
        timer: action.totalTime * 60,     
        timeSetting: action.totalTime,
        display: { minutes: action.totalTime, seconds: "00" },
      };
    case "SET_TIMER":
      // editing the current timer?
      if (action.timerType === state.currentTimer) {
        timer = state.timer - action.difference * 60; // * 60: in seconds
        if (timer < 0) timer = 0;
        return { ...state, timer, display: getTimerDisplay(timer) };
      }
      return state;
    case "TIMER_INCREMENT":
      if (action.timerType === state.currentTimer) {
        timer = state.timer + 60;
        return { ...state, timer, display: getTimerDisplay(timer) };
      }
      return state;
    case "TIMER_DECREMENT":
      if (action.timerType === state.currentTimer) {
        timer = state.timer - 60;
        if (timer < 0) timer = 0;
        return { ...state, timer, display: getTimerDisplay(timer) };
      }
      return state;
    case "TIMER_TICK":
      timer = state.timer - 1;
   
      if (timer < 0) {
        timer = pomodoro * 60;
        return {
          ...state,
          currentTimer: state.nextTimer,
          nextTimer: state.currentTimer,
          timer,
          display: { minutes: state.timeSetting, seconds: "00" },
          ticking: !state.ticking,
          alertNotice : true
        };
      }
      return { ...state, timer, timeSetting : state.timeSetting ? state.timeSetting : pomodoro, display: getTimerDisplay(timer) };
    case "TIMER_START_STOP":
    
      return { ...state, ticking: !state.ticking };
    case "TIMER_RESET":
      return initialState.timer;
    default:
      return state;
  }
};
