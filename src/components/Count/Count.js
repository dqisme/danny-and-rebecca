import { createElement, getDaysLeft } from "../../utils";
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
const CountElement = createCountElement();
Count.append(CountElement);
Count.style.display = 'none';

function createCountElement() {
  const Numbers = [OneHtml, TwoHtml, ThreeHtml, FourHtml, FiveHtml, SixHtml, SevenHtml, EightHtml, NineHtml];
  const index = getDaysLeft() - 1;
  const NumberElement = Numbers[index];
  return NumberElement ?
    createElement(NumberElement) : createElement('div', 'final');
}

export default Count;