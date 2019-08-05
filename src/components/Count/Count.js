import { createElement } from "../../utils";
import NineHtml from './9.svg';
import './Count.css';

const Count = createElement('div', 'count');
const NineIcon = createElement(NineHtml, 'nine');
Count.append(NineIcon);
Count.style.display = 'none';

export default Count;