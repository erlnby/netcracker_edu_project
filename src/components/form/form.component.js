import Block from '../../modules/block';
import {template} from "./form.template";

export default class FormComponent extends Block {
    constructor(props, submit, discard) {
        super('form', props);
        this.submit = submit;
        this.discard = discard;
    }

    render() {
        let {form, formButtonSubmit, formButtonDiscard} = template(this.props)

        form.addEventListener('click', event => {
            let formButton = event.target.closest('.form__button')

            if (formButton) {
                if (formButton.classList.contains('_submit')) {
                    let fields = Array.from(form.elements)
                        .filter((element) => element.tagName === 'INPUT')
                        .map((element) => [element.name, element.value || element.placeholder])

                    if (fields.every((element) => {
                        return this.props.fields.find((value) => {
                            return value.name === element[0]
                        }).validator(element[1]);
                    })) {
                        this.submit(Object.fromEntries(fields));
                    } else {
                        alert('Wrong input');
                    }

                } else if (formButton.classList.contains('_discard')) {
                    this.discard();
                }
            }
        })

        form.addEventListener('submit', event => {
            event.preventDefault()
        })

        return form;
    }
}