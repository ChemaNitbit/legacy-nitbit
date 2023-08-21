import React from 'react';

import Navigation from './navigation/AppNavigation';
import {AppProvider} from './context/AppContext';

const App = (): JSX.Element => {
  return (
    <AppProvider>
      <Navigation />
    </AppProvider>
  );
};

export default App;
