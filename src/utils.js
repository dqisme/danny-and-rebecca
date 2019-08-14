export function createElement(htmlString, id) {
    let element;
    if (htmlString[0] === '<') {
        const template = document.createElement('template');
        template.innerHTML = htmlString;
        element = template.content.firstChild;
    } else {
        element = document.createElement(htmlString);
    }
    if (id) {
        element.setAttribute('id', id);
    }
    togglablize(element);
    return element;
}

function togglablize(element) {
    element.onDisplay = (handler) => {
        element._onDisplay = handler;
    };
    element.onVanish = (handler) => {
        element._onVanish = handler;
    };
    element.display = () => {
        element.style.display = null;
        if (typeof element._onDisplay === 'function') {
            element._onDisplay();
        }
    }
    element.vanish = () => {
        element.style.display = 'none';
        if (typeof element._onVanish === 'function') {
            element._onVanish();
        }
    }
}

export function toggleDisplay(element) {
    if (element.style.display === 'none') {
        element.display();
    } else {
        element.vanish();
    }
}

export function getDaysLeft() {
  return parseInt((new Date('2019-08-16T04:00:00').getTime() - Date.now()) / 1000 / 3600 / 24);
}
