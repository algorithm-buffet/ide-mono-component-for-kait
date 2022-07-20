import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { [CLASSNAME] } from '../src/index';

const container = document.getElementById('example');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(<div>
    {[CLASSNAME]()}
  </div>);