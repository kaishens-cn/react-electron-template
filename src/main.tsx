import '@/app.scss';
import '@/samples/node-api';

import React from 'react';
import { createRoot } from 'react-dom/client';

import Home from '@/pages/Home';

const root = createRoot(document.getElementById('root')!);

root.render(<Home />);
