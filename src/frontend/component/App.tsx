import * as React from 'react';

import { Tabs, Tab } from 'react-toolbox';

import { SiteBar } from './SiteBar';
import { About } from './About';
import { GettingStarted } from './GettingStarted';

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
          <GettingStarted />
        </Tab>
        <Tab label="About">
          <About />
        </Tab>
      </Tabs>      
    </div>);
  }
}
