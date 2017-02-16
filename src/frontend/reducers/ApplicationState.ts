export type WorkflowStages = 'Get' | 'Upload' | 'Modify' | 'Download';

export interface ApplicationState {
  workflowStage: WorkflowStages;
  tabIndex: number;
}
