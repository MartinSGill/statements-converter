import { Actions } from '../constants/Actions'
import { WorkflowStage } from '../constants/WorkflowStage';

export function workflowStage(state: number, action: any) : number {
  switch (action.type) {
    case Actions.APP_NEXT_STAGE:
      if (state < WorkflowStage.DOWNLOAD) {
        return state + 1;
      }
      break;
    case Actions.APP_PREV_STAGE:
      if (state > WorkflowStage.GET) {
        return state - 1;
      }
      break;
    default:
      break;
  }

  return state || WorkflowStage.GET;
}

export function tabIndex(state: number, action: any): number {
  if (action.type === Actions.APP_CHANGE_TAB) {
    return action.payload;
  }
  
  return state || 0;
}
