import Block from '../../modules/block';
import {template} from "./form.template";

export default class FormComponent extends Block {
    constructor(name, props, handler) {
        super(name, props);
        this.handler = handler;
    }

    render() {
        let {form, form__submit} = template(this.props)

        form__submit.addEventListener('click', (event) => {
            event.preventDefault();

            let fields = Array.from(form.getElementsByClassName('form__element-input'));

            let values = {};
            fields.forEach((field) => {
                values[field.name] = field.value;
            })

            this.handler(values);
        })

        return form;
    }
}