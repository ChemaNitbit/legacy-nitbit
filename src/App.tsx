import React from 'react';

import {AppProvider} from './context/AppContext';
import Navigation from './navigation/AppNavigation';

const App = (): JSX.Element => {
  return (
    <AppProvider>
      <Navigation />
    </AppProvider>
  );
};

export default App;
