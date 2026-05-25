// Create a root element
// Render some markup to the root

// react uses jsx to directly render elements using js and html by imbeding everything to root element /div everything extends fro that

import React from 'react';
import {createRoot} from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  <h1>Hello, world!</h1>
);