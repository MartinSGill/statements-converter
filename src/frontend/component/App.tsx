import * as React from 'react';

import { Tabs, Tab } from 'react-toolbox';

import { SiteBar } from './SiteBar';
import { About } from './About';
import { DownloadStatements } from './DownloadStatements';
import { ModifyData } from './ModifyData';
import { UploadStatements } from './UploadStatements';
import { DownloadResult } from './DownloadResult';

interface IAppState {
  tabIndex: number;
}

export class App extends React.Component<any, IAppState> {

  constructor() {
    super();
    this.state = { tabIndex: 0 };
  }

  private handleTabChange = (index:number) => {
    this.setState({tabIndex: index});
  };

  render() {
    return (
    <div>
      <SiteBar/>
      <Tabs index={this.state.tabIndex} onChange={this.handleTabChange}>
        <Tab label="Convert">
          <DownloadStatements />
          <UploadStatements />
          <ModifyData />
          <DownloadResult />
        </Tab>
        <Tab label="About">
          <About />
        </Tab>
      </Tabs>      
    </div>);
  }
}

