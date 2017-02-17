import * as React from 'react';
import { Tabs, Tab } from 'react-toolbox';
import { connect } from 'react-redux';
import { SiteBar } from './SiteBar';
import { About } from './About';
import { GetStatements } from './GetStatements';
import { ModifyData } from './ModifyData';
import { UploadStatements } from './UploadStatements';
import { DownloadResult } from './DownloadResult';
import { ApplicationState } from '../reducers';
import { bindActionCreators, Dispatch } from 'redux';
import * as AppActions from '../actions/App';

interface ApplicationProps {
  appState: ApplicationState,
  actions: typeof AppActions    
}

export function App(props: ApplicationProps) {

  const {appState, actions} = props;

  return (
    <div>
      <SiteBar />
      <Tabs index={appState.tabIndex} onChange={actions.changeTab}>
        <Tab label="Convert">
          <GetStatements 
              workflowStage={appState.workflowStage} 
              onNext={actions.nextWorkflowStage} />
          <UploadStatements 
              workflowStage={appState.workflowStage} 
              onNext={actions.nextWorkflowStage} 
              onPrevious={actions.prevWorkflowStage} />
          <ModifyData 
              workflowStage={appState.workflowStage} 
              onNext={actions.nextWorkflowStage} 
              onPrevious={actions.prevWorkflowStage} />
          <DownloadResult 
              workflowStage={appState.workflowStage} 
              onPrevious={actions.prevWorkflowStage} />
        </Tab>
        <Tab label="About">
          <About />
        </Tab>
      </Tabs>
    </div>);
}

function mapStateToProps(state: ApplicationState) {
  return { appState: state };
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(AppActions as any, dispatch)
  };
}

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
);

export const TheApp = connected(App);
