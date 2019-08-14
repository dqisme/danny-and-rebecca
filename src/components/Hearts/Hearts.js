import { createElement } from '../../utils';
import './Hearts.css';

const Hearts = createElement('div', 'hearts');

const className = 'heart';
Hearts.start = () => (Hearts.animation = setInterval(function(){
  const r_left	= Math.floor(Math.random() * 100) + 1;
  const zindex	= Math.floor(Math.random() * 10) + 1;
  const Heart = createElement("<div class='" + className + "' style='left:"+r_left+"%; z-index:"+ zindex +"; top: -100px;'></div>");
  Hearts.append(Heart);
  const hearts = Array.from(document.getElementsByClassName(className));
  if (hearts) {
    hearts
      .filter(element => element.offsetTop <= -100)
      .forEach(element => element.remove());
  }
}, 300));

Hearts.stop = () => {
  clearInterval(Hearts.animation);
  Array.from(document.getElementsByClassName(className))
    .forEach(element => element.remove());
};

export default Hearts;