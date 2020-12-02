import createElement from "../../utils/createElement";

export function template(ctx) {
    let form = createElement('form', ['form']);

    let formTitle = createElement('div', ['form__title']);
    formTitle.textContent = ctx.title;
    form.append(formTitle);

    ctx.fields.forEach((value) => {
        let formElement = createElement('label', ['form__element']);

        let formElementText = createElement('div', ['form__element-text'], value.name);

        let formElementInput = createElement('input', ['form__element-input'], null, {
            type: 'text',
            name: value.name,
            placeholder: value.value,
            autocomplete: 'off'
        });

        formElement.append(formElementText, formElementInput);
        form.append(formElement);
    });

    let formButtons = createElement('div', ['form__buttons']);
    form.append(formButtons);

    let formButtonDiscard = createElement('button', ['form__button', '_discard'], 'Discard');
    formButtonDiscard.textContent = 'Discard';

    let formButtonSubmit = createElement('button', ['form__button', '_submit'], 'Submit');

    formButtons.append(formButtonDiscard, formButtonSubmit);

    return {
        form,
        formButtonSubmit,
        formButtonDiscard
    };
}