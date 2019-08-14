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
    return element;
}

export function toggleDisplay(element) {
    if (element.style.display === 'none') {
        element.style.display = null;
    } else {
        element.style.display = 'none';
    }
}

export function getDaysLeft() {
  return parseInt((new Date('2019-08-16T04:00:00').getTime() - Date.now()) / 1000 / 3600 / 24);
}
