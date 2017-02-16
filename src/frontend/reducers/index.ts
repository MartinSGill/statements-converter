import { combineReducers, Reducer } from 'redux';

import { ApplicationState, WorkflowStages } from './ApplicationState';
export { ApplicationState, WorkflowStages } from './ApplicationState';

import { Actions } from '../constants/Actions';

export const rootReducer = combineReducers<ApplicationState>({
  workflowStage,
  tabIndex,
});

function workflowStage(state: WorkflowStages, action: any) : WorkflowStages {
  return state || 'Get';
}

function tabIndex(state: number, action: any): number {
  if (action.type === Actions.APP_CHANGE_TAB) {
    return action.payload;
  }
  
  return state || 0;
}
