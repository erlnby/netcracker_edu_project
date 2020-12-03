import createElement from "../../utils/createElement";
import image from "../../assets/images/helper.jpg"

export function template(ctx) {
    let helper = createElement('div', ['helper']);

    let helperImage = createElement('img', ['helper__image'], null, {
        src: image,
    });

    helper.append(helperImage);
    return helper;
}