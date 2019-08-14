import { createElement, getDaysLeft } from "../../utils";
import anime from "animejs/lib/anime.es";
import DHtml from './D.svg';
import AndHtml from './And.svg';
import RHtml from './R.svg';
import './Logo.css';

function animate(heartScale, duration) {
  return [
    anime({
      targets: '#D',
      translateX: 100,
      rotate: 10,
      easing: 'spring',
      duration,
    }),
    anime({
      targets: '#R',
      translateX: -100,
      rotate: -10,
      easing: 'spring',
      duration,
    }),
    anime({
      targets: '#And',
      opacity: 0.7,
      scale: heartScale,
      easing: 'spring',
      fill: '#BF393F',
      duration,
    }),
    anime({
      targets: '#AndPath',
      d: 'M112,185 C107,189.666667 106.333333,190.166667 110,186.5 C108,188.166667 107,189 107,189 C107,189 108,187.5 108,187.5 C108,187.5 108,188 107,189 C106,190 107.5,189 103.5,189.5 C101.790075,189.713741 98.6234081,186.547074 94,180 C96,182.333333 93.3333333,179.833333 86,172.5 C74.9352425,161.435243 79,168 70,158 C65.320028,152.800031 66,157 54,141.5 C42,126 41.5,128 33,119.5 C29,111.5 15,108.5 8.5,93 C1.89678509,77.2538721 -1,75.5 1,45 C1.5635272,36.4062103 24.5,11 31.5,8 C46.0616038,1.75931264 82.467407,-0.541644 87,11 C88.484814,14.665252 83.5,6 104.5,24.5 L108.5,20 L112,16.5 C115.516667,13.2246684 120.84074,7.0137931 131,6 L138.5,3.5 L144.5,3 C144.5,3.5 168.5,-10.5 194,23.5 C219.5,57.5 208.5,55.5 208,73 C207.5,90.5 208,79.5 201,93 C194,106.5 192.671481,99.1742705 194,100.5 C196.657037,103.151459 186.298148,106.903448 182,114 C176.451481,123.35809 162.866296,136.081963 139.5,155.5 C135.827037,158.619363 134.312592,161.220159 134,162 C132.358889,166.21114 134,163 126,170 C118,177 126.5,169 119.5,177.5 Z',
      easing: 'spring',
      duration,
    }),
  ];
}

const Logo = createElement('div', 'logo');
Logo.append(createElement(DHtml, 'D'));
Logo.append(createElement(AndHtml, 'And'));
Logo.append(createElement(RHtml, 'R'));

if (getDaysLeft() > 0) {
  let animations;
  Logo.addEventListener('mouseenter', () => {
    animations = animate(Math.random() + 1);
  });
  Logo.addEventListener('mouseleave', () => {
    animations.forEach(animation => animation.reset());
  });
} else {
  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => animate(2, 1000), 500);
  });
}

export default Logo;