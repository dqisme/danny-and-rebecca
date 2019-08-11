import { createElement } from "../../utils";
import NineHtml from './9.svg';
import EightHtml from './8.svg';
import SevenHtml from './7.svg';
import SixHtml from './6.svg';
import FiveHtml from './5.svg';
import FourHtml from './4.svg';
import ThreeHtml from './3.svg';
import TwoHtml from './2.svg';
import OneHtml from './1.svg';
import './Count.css';

const Count = createElement('div', 'count');
const NumberHtml = getNumberHtml();
const NumberIcon = createElement(NumberHtml);
Count.append(NumberIcon);
Count.style.display = 'none';

function getNumberHtml() {
  const Numbers = [OneHtml, TwoHtml, ThreeHtml, FourHtml, FiveHtml, SixHtml, SevenHtml, EightHtml, NineHtml];
  const index = parseInt((new Date('2019-08-16T04:00:00').getTime() - Date.now()) / 1000 / 3600 / 24) - 1;
  if (index < 9) {
    return Numbers[index];
  }
  return 'div';
}

export default Count;