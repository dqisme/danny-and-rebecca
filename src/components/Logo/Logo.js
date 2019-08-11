import { createElement } from "../../utils";
import anime from "animejs/lib/anime.es";
import DHtml from './D.svg';
import AndHtml from './And.svg';
import RHtml from './R.svg';
import './Logo.css';

const Logo = createElement('div', 'logo');
Logo.append(createElement(DHtml, 'D'));
Logo.append(createElement(AndHtml, 'And'));
Logo.append(createElement(RHtml, 'R'));

let animationD, animationR, animationAnd;
Logo.addEventListener('mouseenter', () => {
  animationD = anime({
    targets: '#D',
    translateX: 100,
    rotate: 10,
    easing: 'spring',
  });
  animationR = anime({
    targets: '#R',
    translateX: -100,
    rotate: -10,
    easing: 'spring',
  });
  animationAnd = anime({
    targets: '#And',
    opacity: 0.5,
    scale: 0.5,
  });
});
Logo.addEventListener('mouseleave', () => {
  animationD.reset();
  animationR.reset();
  animationAnd.reset();
});

export default Logo;