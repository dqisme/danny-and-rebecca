import { createElement, toggleDisplay } from "../utils";
import Logo from './Logo/Logo';
import Count from './Count/Count';
import './App.css';

const App = createElement('div', 'app');

App.appendChild(Logo);
App.appendChild(Count);
App.addEventListener('click', () => {
    toggleDisplay(Logo);
    toggleDisplay(Count);
});

export default App;