import Block from '../../modules/block';
import {template} from "./form.template";

export default class FormComponent extends Block {
    constructor(props, submit, discard) {
        super('form', props);
        this.submit = submit;
        this.discard = discard;
    }

    render() {
        let {form, form__button_submit, form__button_discard} = template(this.props)

        form__button_submit.addEventListener('click', (event) => {
            event.preventDefault();

            let values = {};
            Array.from(form.elements)
                .filter((element) => element.tagName === 'INPUT')
                .forEach((element) => {
                    values[element.name] = element.value;
                });

            this.submit(values);
        })

        form__button_discard.addEventListener('click', (event) => {
            event.preventDefault();

            this.discard();
        })

        return form;
    }
}