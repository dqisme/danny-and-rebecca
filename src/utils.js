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
