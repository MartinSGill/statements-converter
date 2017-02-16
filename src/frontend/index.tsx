import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TheApp , App } from './component/App';
import { AppContainer } from 'react-hot-loader';
//import { overrideComponentTypeChecker } from 'react-toolbox';
import { Provider } from 'react-redux';

const rootEl = document.getElementById('app');

import configureStore from './store';
const store = configureStore();

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <TheApp />
      </AppContainer>
    </Provider>,
    rootEl
  );
};

// if (process.env.NODE_ENV !== 'production') {
//   overrideComponentTypeChecker((classType, reactElement) => (
//     reactElement && (
//       reactElement.type === classType
//       || reactElement.type.name === classType.displayName
//     )
//   ));
//   if (module.hot) {
//     module.hot.accept('./component/App', render);
//   }
// }

render();
