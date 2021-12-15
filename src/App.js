import React, { useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Routing from './pages/Routing';

function App() {
  // eslint-disable-next-line

  return (
    <Router>
      <div>
        <Routing />
      </div>
    </Router>
  );
}

export default App;