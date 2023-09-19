import React from 'react';
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from 'react-dom/client';
import App from './App';
import { DarkMode } from './DarkMode';
import ClassLIfeCycle from './ClassLIfeCycle';
import HookLifeCycle from './HookLifeCycle';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<HookLifeCycle />);
