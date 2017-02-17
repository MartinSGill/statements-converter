import { combineReducers, Reducer } from 'redux';
import { workflowStage, tabIndex } from './App';

import { ApplicationState } from './ApplicationState';
export { ApplicationState };

export const rootReducer = combineReducers<ApplicationState>({
  workflowStage,
  tabIndex,
});

