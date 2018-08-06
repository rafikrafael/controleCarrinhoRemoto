import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import Index from './index/Index';
import Controles from './Controles/Controles';

function RouterComponent() {
  return (
    <Router>
      <Scene key="root">
        <Scene 
          key="index"
          component={Index}
          title="Conectar ao Carrinho"
          initial
        />
        <Scene 
          key="controleCarrinho"
          component={Controles}
          title="Controle Remoto"
          />
      </Scene>
    </Router>
  );
}

export default RouterComponent;