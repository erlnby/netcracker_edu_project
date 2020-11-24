function createElement(tagName, classList = [], text = null, attributes = {}) {
    let element = document.createElement(tagName);
    classList.forEach((value) => element.classList.add(value));

    if (text) {
        element.textContent = text
    }

    Object.entries(attributes).forEach(([name,  value]) => element.setAttribute(name, value))

    return element;
}

export default createElement;