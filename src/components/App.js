import { createElement } from "../utils";
import Logo from './Logo/Logo';
import './App.css';

const App = createElement('div', 'app');

App.appendChild(Logo);

export default App;