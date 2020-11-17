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

    let form__submit = createElement('button', ['form__submit']);
    // form__submit.setAttribute('type', 'submit');
    form__submit.innerHTML = 'Submit';
    form.append(form__submit)

    return {
        form,
        form__submit
    };
}