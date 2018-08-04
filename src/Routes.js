import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import Index from './index/Index';

function RouterComponent() {
  return (
    <Router>
      <Scene key="root">
        <Scene 
          key="index"
          component={Index}
          title="Controle Remoto"
          initial
        />
      </Scene>
    </Router>
  );
}

export default RouterComponent;