import createElement from "../../utils/createElement";

export  function template(ctx) {
    let sizer =  createElement('div', ['sizer', '_hidden']);
    let sizerText = createElement('span', ['sizer__text']);
    sizer.append(sizerText);

    return {sizer, sizerText};
}