import createElement from "../../utils/createElement";

export function template(ctx) {
    let form = createElement('form', ['form']);

    let form__title = createElement('div', ['form__title']);
    form__title.innerHTML = ctx.title;
    form.append(form__title);

    ctx.fields.forEach((value) => {
        let form__element = createElement('label', ['form__element']);

        let form__element_text = createElement('div', ['form__element-text']);
        form__element_text.innerHTML = value.name

        let form__element_input = createElement('input', ['form__element-input']);
        form__element_input.setAttribute('type', 'text');
        form__element_input.setAttribute('name', value.name);
        form__element_input.setAttribute('value', value.value);
        form__element_input.setAttribute('autocomplete', 'off');


        form__element.append(form__element_text, form__element_input);
        form.append(form__element);
    });

    let form__buttons = createElement('div', ['form__buttons']);
    form.append(form__buttons);

    let form__button_discard = createElement('button', ['form__button', '_discard']);
    form__button_discard.textContent = 'Discard';

    let form__button_submit = createElement('button', ['form__button', '_submit']);
    form__button_submit.textContent = 'Submit';

    form__buttons.append(form__button_discard, form__button_submit);

    return {
        form,
        form__button_submit,
        form__button_discard
    };
}