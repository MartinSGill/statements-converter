import { createAction } from "redux-actions";
import { Actions } from "../constants/Actions";

export const changeTab = createAction<number>(Actions.APP_CHANGE_TAB);
export const nextWorkflowStage = createAction<undefined>(Actions.APP_NEXT_STAGE);
export const prevWorkflowStage = createAction<undefined>(Actions.APP_PREV_STAGE);
