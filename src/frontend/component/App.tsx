import * as React from 'react';

import { SiteBar } from './SiteBar';
import { About } from './About';
import { GettingStarted } from './GettingStarted';

export class App extends React.Component<any, any> {
  render() {
    return (
    <div>
      <SiteBar/>
      <About />
      <GettingStarted />
    </div>);
  }
}
