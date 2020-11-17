function createElement(tagName, classList = []) {
    let element = document.createElement(tagName);
    classList.forEach((value) => element.classList.add(value));
    return element;
}

export default createElement;