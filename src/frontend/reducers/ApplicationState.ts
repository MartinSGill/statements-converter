export type WorkflowStages = 'Get' | 'Upload' | 'Edit' | 'Download';

export interface ApplicationState {
  workflowStage: WorkflowStages;
  tabIndex: number;
}
