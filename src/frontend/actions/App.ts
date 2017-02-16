import { createAction } from 'redux-actions';
import { Actions } from '../constants/Actions';

export const changeTab = createAction<number>(Actions.APP_CHANGE_TAB);
