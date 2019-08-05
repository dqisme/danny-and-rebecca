import './index.css';
import LogoSvg from './images/logo.svg';

function createElement(htmlString, id) {
    let element;
    if (htmlString[0] === '<') {
        const template = document.createElement('template');
        template.innerHTML = htmlString;
        element = template.content.firstChild;
    } else {
        element = document.createElement(htmlString);
    }
    element.setAttribute('id', id);
    return element;
}

const Container = createElement('div', 'container');
const Logo = createElement(LogoSvg, 'logo');

Container.appendChild(Logo);
document.body.appendChild(Container);