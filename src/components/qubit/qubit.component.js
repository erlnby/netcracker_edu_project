import Block from '../../modules/block';
import {template} from "./qubit.template";

export default class QubitComponent extends Block {
    render() {
        return template(this.props);
    }
}