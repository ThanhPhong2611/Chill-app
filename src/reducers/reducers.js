import { combineReducers } from "redux";
import {reducerLayoutTime} from './time';
import {reducerLayoutMedia} from './media';
import {reducerLayoutSpace} from './space';
import {reducerLayoutTopic} from './topic';
import {reducerModalNotice} from './Modal/notice';
import {reducerInfoUserOfTheme} from './user';
import {actionTimer, settingsTimer} from './time';
const reducers = combineReducers({
    reducerLayoutTime,
    reducerLayoutMedia,
    reducerLayoutSpace,
    reducerLayoutTopic,
    reducerModalNotice,
    reducerInfoUserOfTheme,
    actionTimer,
    settingsTimer,
    
});

export default reducers;
